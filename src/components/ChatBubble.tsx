"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, MessageSquareText, X } from "lucide-react";

const HCP_SCRIPT_SRC = "https://chat.housecallpro.com/proChat.js";
const HCP_ORG = "658955b0-0b5a-42f1-86b4-9e46f8acce61";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [labelDismissed, setLabelDismissed] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const scriptInjectedRef = useRef(false);
  const openedAtRef = useRef(0);

  // Inject the HCP script lazily on first user interaction. The bundle is
  // ~1.3MB; deferring it until needed eliminates that cost from cold page
  // loads where the visitor never engages the chat.
  function ensureScript(): Promise<void> {
    return new Promise((resolve) => {
      if (scriptInjectedRef.current) {
        if (scriptLoaded) resolve();
        else {
          const existing = document.getElementById(
            "housecall-pro-chat-bubble",
          ) as HTMLScriptElement | null;
          if (existing) {
            existing.addEventListener("load", () => resolve(), { once: true });
          } else {
            resolve();
          }
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
          setScriptLoaded(true);
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
    setLoading(true);
    await ensureScript();
    // The HCP script creates #proChatIframeContainer asynchronously after
    // load. Poll until it appears, then open it. Only flip to the open
    // state once the iframe is actually mounted so the launcher stays
    // visible (with a loading indicator) on slow mobile networks instead
    // of disappearing into a dead 2-3s gap.
    const start = Date.now();
    const tick = () => {
      const c = document.getElementById("proChatIframeContainer");
      if (c) {
        showIframe();
        openedAtRef.current = Date.now();
        setOpen(true);
        setLoading(false);
        return;
      }
      if (Date.now() - start < 8000) {
        requestAnimationFrame(tick);
      } else {
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
        // Ignore spurious close messages from the iframe right after open.
        // HCP's chat widget fires a `toggleChat:false` during its own init
        // on mobile, which would otherwise dismiss the chat the moment it
        // appears. Only honor close events ≥1.5s after we opened.
        if (
          openedAtRef.current === 0 ||
          Date.now() - openedAtRef.current < 1500
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
        }
        /* Suppress any default launcher / bubble injected by proChat.js
           outside of the iframe + its container. */
        [id^="proChat"]:not(#proChatIframe):not(#proChatIframeContainer),
        [class^="proChat-bubble"],
        [class*=" proChat-bubble"],
        [class*="proChatBubble"] {
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
