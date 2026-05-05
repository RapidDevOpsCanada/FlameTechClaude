"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { MessageSquareText, X } from "lucide-react";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [labelDismissed, setLabelDismissed] = useState(false);

  function handleClose() {
    setOpen(false);
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

  function handleOpen() {
    setOpen(true);
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
        handleClose();
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      <Script
        id="housecall-pro-chat-bubble"
        src="https://chat.housecallpro.com/proChat.js"
        strategy="afterInteractive"
        data-color="#FB923C"
        data-organization="658955b0-0b5a-42f1-86b4-9e46f8acce61"
      />
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
           outside of the iframe + its container. The HCP script renders
           its own floating button after the iframe closes, which would
           collide with the custom launcher. */
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
          className="fixed bottom-6 right-6 max-md:bottom-24 flex flex-col items-end gap-3"
          style={{ zIndex: 2147483647 }}
        >
          {!labelDismissed && (
            <div className="relative max-md:hidden">
              <button
                type="button"
                onClick={handleOpen}
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
            aria-label="Open chat"
            onClick={handleOpen}
            className="ftchat-launcher cta-animated-border relative w-14 h-14 rounded-full flex items-center justify-center text-ink-900 transition-transform hover:scale-105 active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, #FB923C 0%, #EA7C22 100%)",
              animation: "ftchat-glow 3s ease-in-out infinite",
            }}
          >
            <MessageSquareText className="w-6 h-6" strokeWidth={2.25} />
            <span
              aria-hidden
              className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emergency border-2 border-ink-900"
            />
          </button>
        </div>
      )}
    </>
  );
}
