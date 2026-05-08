"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, MessageSquareText, X } from "lucide-react";

const HCP_SCRIPT_SRC = "https://chat.housecallpro.com/proChat.js";
const HCP_ORG = "658955b0-0b5a-42f1-86b4-9e46f8acce61";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [labelDismissed, setLabelDismissed] = useState(false);
  const scriptInjectedRef = useRef(false);
  const scriptLoadedRef = useRef(false);
  const openedAtRef = useRef(0);

  // Inject the HCP script lazily on first user interaction. The bundle is
  // ~1.3MB; deferring it until needed eliminates that cost from cold page
  // loads where the visitor never engages the chat.
  function ensureScript(): Promise<void> {
    return new Promise((resolve) => {
      // Tracked via ref, not state: a state-based check lost a race where
      // the pre-warm load fired but React hadn't re-rendered before the
      // user clicked, leaving us re-listening to a load event that won't
      // fire again.
      if (scriptLoadedRef.current) {
        resolve();
        return;
      }
      if (scriptInjectedRef.current) {
        const existing = document.getElementById(
          "housecall-pro-chat-bubble",
        ) as HTMLScriptElement | null;
        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true });
        } else {
          resolve();
        }
        return;
      }
      scriptInjectedRef.current = true;
      const s = document.createElement("script");
      s.id = "housecall-pro-chat-bubble";
      s.src = HCP_SCRIPT_SRC;
      s.async = true;
      s.setAttribute("data-color", "#FB923C");
      s.setAttribute("data-organization", HCP_ORG);
      s.addEventListener(
        "load",
        () => {
          scriptLoadedRef.current = true;
          resolve();
        },
        { once: true },
      );
      document.body.appendChild(s);
    });
  }

  function showIframe() {
    const c = document.getElementById("proChatIframeContainer");
    if (c) {
      c.classList.add("chat-open");
      const w = window.innerWidth < 600 ? "100%" : "400px";
      c.setAttribute(
        "style",
        `bottom:0px; position:fixed; right:0px; z-index:1200; display:block; width:${w}; height:100vh; opacity:1; pointer-events:auto;`,
      );
    }
    const f = document.getElementById("proChatIframe") as HTMLIFrameElement | null;
    if (f && f.contentWindow) {
      f.contentWindow.postMessage({ type: "toggleChat", open: true }, "*");
      f.contentWindow.postMessage(
        JSON.stringify({ type: "toggleChat", open: true }),
        "*",
      );
    }
  }

  async function handleOpen() {
    if (loading || open) return;
    // Fast path: pre-warm finished, iframe container exists. Open in one
    // commit so the launcher transitions straight to the chat with no
    // intermediate spinner flash.
    if (
      scriptLoadedRef.current &&
      document.getElementById("proChatIframeContainer")
    ) {
      showIframe();
      openedAtRef.current = Date.now();
      setOpen(true);
      return;
    }
    // Defer the spinner: if the chat opens within 250ms (pre-warm hit, or
    // the iframe container appears within a few frames) we skip the
    // setLoading(true) entirely so the launcher icon never flashes to the
    // spinner before the chat takes over.
    const spinnerTimer = window.setTimeout(() => setLoading(true), 250);
    await ensureScript();
    const start = Date.now();
    const tick = () => {
      const c = document.getElementById("proChatIframeContainer");
      if (c) {
        window.clearTimeout(spinnerTimer);
        showIframe();
        openedAtRef.current = Date.now();
        setOpen(true);
        setLoading(false);
        return;
      }
      if (Date.now() - start < 8000) {
        requestAnimationFrame(tick);
      } else {
        window.clearTimeout(spinnerTimer);
        setLoading(false);
      }
    };
    tick();
  }

  function handleClose() {
    setOpen(false);
    openedAtRef.current = 0;
    const c = document.getElementById("proChatIframeContainer");
    if (c) {
      c.classList.remove("chat-open");
      c.setAttribute(
        "style",
        "opacity:0; pointer-events:none; position:fixed; right:0px; bottom:0px;",
      );
    }
    const f = document.getElementById("proChatIframe") as HTMLIFrameElement | null;
    if (f && f.contentWindow) {
      f.contentWindow.postMessage({ type: "toggleChat", open: false }, "*");
      f.contentWindow.postMessage(
        JSON.stringify({ type: "toggleChat", open: false }),
        "*",
      );
    }
  }

  // Pre-warm the HCP script as early as the browser is idle, plus a
  // first-interaction backstop. The 2.5s setTimeout we used to ship with
  // routinely lost the race against the user's first click, which is what
  // surfaced the "click does nothing, then spinner, then chat" flash.
  // requestIdleCallback fires after the page becomes interactive so
  // Lighthouse TBT/TTI stays clean.
  useEffect(() => {
    const idle = (
      window as unknown as {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      }
    ).requestIdleCallback;
    let idleId: number | undefined;
    let fallbackTimeoutId: number | undefined;
    if (idle) {
      idleId = idle(() => void ensureScript(), { timeout: 2000 });
    } else {
      fallbackTimeoutId = window.setTimeout(() => void ensureScript(), 500);
    }

    const onFirstInteraction = () => {
      void ensureScript();
    };
    const passiveOnce: AddEventListenerOptions = { once: true, passive: true };
    window.addEventListener("pointermove", onFirstInteraction, passiveOnce);
    window.addEventListener("pointerdown", onFirstInteraction, passiveOnce);
    window.addEventListener("scroll", onFirstInteraction, passiveOnce);
    window.addEventListener("keydown", onFirstInteraction, { once: true });

    return () => {
      const cancelIdle = (
        window as unknown as { cancelIdleCallback?: (id: number) => void }
      ).cancelIdleCallback;
      if (idleId !== undefined && cancelIdle) cancelIdle(idleId);
      if (fallbackTimeoutId !== undefined) window.clearTimeout(fallbackTimeoutId);
      window.removeEventListener("pointermove", onFirstInteraction);
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
  }, []);

  // Listen for the iframe's close message so the custom launcher returns
  // when the user closes the chat from inside the HCP UI.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      let payload: unknown = e.data;
      if (typeof payload === "string") {
        try {
          payload = JSON.parse(payload);
        } catch {
          return;
        }
      }
      if (
        payload &&
        typeof payload === "object" &&
        "type" in payload &&
        (payload as { type?: string }).type === "toggleChat" &&
        (payload as { open?: boolean }).open === false
      ) {
        // HCP's iframe fires spurious toggleChat:false events during its
        // own init — and the timing varies a lot on mobile. 1.5s wasn't
        // enough for slow networks. 5s covers even cold-start cellular
        // and still feels responsive when the user genuinely closes.
        if (
          openedAtRef.current === 0 ||
          Date.now() - openedAtRef.current < 5000
        ) {
          return;
        }
        handleClose();
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      <style jsx global>{`
        /* Hide the HCP iframe container until the custom launcher opens it. */
        #proChatIframeContainer {
          opacity: 0 !important;
          pointer-events: none !important;
        }
        #proChatIframeContainer.chat-open {
          opacity: 1 !important;
          pointer-events: auto !important;
          display: block !important;
        }
        /* Suppress only HCP's default *launcher* button. Earlier we used a
           broad [id^="proChat"] rule that also hid wrapper elements the
           iframe lives inside, which made the chat invisible on mobile —
           limited to bubble-named selectors only. */
        #proChatBubble,
        #proChatBubbleContainer,
        [class*="proChatBubble"],
        [class*="ProChatBubble"],
        [id*="ChatBubble"]:not([id="proChatIframe"]):not([id="proChatIframeContainer"]) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        @keyframes ftchat-glow {
          0%,
          100% {
            box-shadow:
              0 10px 28px -8px rgba(251, 146, 60, 0.55),
              0 0 0 0 rgba(251, 146, 60, 0.35);
          }
          50% {
            box-shadow:
              0 14px 36px -8px rgba(251, 146, 60, 0.7),
              0 0 0 8px rgba(251, 146, 60, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ftchat-launcher {
            animation: none !important;
          }
        }
      `}</style>
      {/* Mobile-only close button. The HCP iframe renders its own close
          control at top-right on desktop, but on mobile the iframe takes
          the full viewport and that built-in control is hard to reach
          (and on some devices not visible at all). This sits at top-left
          so users always have a clear way out. */}
      {open && (
        <button
          type="button"
          aria-label="Close chat"
          onClick={handleClose}
          className="md:hidden fixed top-3 left-3 w-10 h-10 rounded-full bg-ink-900 text-cream-50 border border-line-dark shadow-2xl flex items-center justify-center active:scale-95 transition-transform"
          style={{ zIndex: 2147483647 }}
        >
          <X className="w-5 h-5" strokeWidth={2.5} />
        </button>
      )}
      {!open && (
        <div
          className="fixed bottom-6 right-6 flex flex-col items-end gap-3"
          style={{ zIndex: 2147483647 }}
        >
          {!labelDismissed && (
            <div className="relative max-md:hidden">
              <button
                type="button"
                onClick={handleOpen}
                onMouseEnter={() => {
                  // Warm the script on hover so first-click latency is hidden.
                  void ensureScript();
                }}
                className="lift bg-ink-900 text-cream-50 pl-4 pr-9 py-2.5 rounded-full text-[13px] font-semibold shadow-xl border border-line-dark hover:border-primary transition-colors"
              >
                Questions? Chat with our team.
              </button>
              <button
                type="button"
                aria-label="Dismiss chat prompt"
                onClick={(e) => {
                  e.stopPropagation();
                  setLabelDismissed(true);
                }}
                className="absolute top-1/2 -translate-y-1/2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-cream-50/60 hover:text-cream-50 hover:bg-ink-700 transition-colors"
              >
                <X className="w-3 h-3" strokeWidth={2.5} />
              </button>
            </div>
          )}
          <button
            type="button"
            aria-label={loading ? "Loading chat" : "Open chat"}
            aria-busy={loading}
            onClick={handleOpen}
            onMouseEnter={() => {
              void ensureScript();
            }}
            onTouchStart={() => {
              void ensureScript();
            }}
            disabled={loading}
            className="ftchat-launcher cta-animated-border relative w-14 h-14 rounded-full flex items-center justify-center text-ink-900 transition-transform hover:scale-105 active:scale-95 disabled:cursor-wait"
            style={{
              background:
                "linear-gradient(135deg, #FB923C 0%, #EA7C22 100%)",
              animation: loading ? "none" : "ftchat-glow 3s ease-in-out infinite",
            }}
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" strokeWidth={2.5} />
            ) : (
              <MessageSquareText className="w-6 h-6" strokeWidth={2.25} />
            )}
            {!loading && (
              <span
                aria-hidden
                className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emergency border-2 border-ink-900"
              />
            )}
          </button>
        </div>
      )}
    </>
  );
}
