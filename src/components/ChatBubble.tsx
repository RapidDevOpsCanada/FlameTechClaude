"use client";

import Script from "next/script";
import { useState } from "react";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <Script
        id="housecall-pro-chat-bubble"
        src="https://chat.housecallpro.com/proChat.js"
        strategy="afterInteractive"
        data-color="#ff6b35"
        data-organization="658955b0-0b5a-42f1-86b4-9e46f8acce61"
      />
      <style jsx global>{`
        #proChatIframeContainer {
          opacity: 0 !important;
          pointer-events: none !important;
        }
        #proChatIframeContainer.chat-open {
          opacity: 1 !important;
          pointer-events: auto !important;
        }
        @keyframes ftchat-pulse {
          0%,
          100% {
            box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
          }
          50% {
            box-shadow:
              0 6px 30px rgba(255, 107, 53, 0.7),
              0 0 60px rgba(255, 107, 53, 0.2);
          }
        }
        @keyframes ftchat-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
      {!open && (
        <>
          <button
            type="button"
            aria-label="Open chat"
            onClick={handleOpen}
            className="fixed w-16 h-16 rounded-full border-0 cursor-pointer text-[28px] leading-[64px] text-center p-0 bottom-6 right-6 max-md:bottom-24"
            style={{
              background: "linear-gradient(135deg, #ff6b35, #e85520)",
              zIndex: 2147483647,
              animation: "ftchat-pulse 2.5s infinite",
            }}
          >
            💬
            <span
              className="absolute -top-1 -right-1 bg-[#e63946] text-white w-[22px] h-[22px] rounded-full text-xs font-extrabold leading-[18px] text-center border-2 border-white"
            >
              1
            </span>
          </button>
          <button
            type="button"
            onClick={handleOpen}
            className="fixed bottom-24 right-4 max-md:bottom-44 bg-[#1a1a2e] text-white px-4 py-2.5 rounded-lg text-[13px] font-semibold cursor-pointer shadow-lg"
            style={{
              zIndex: 2147483647,
              animation: "ftchat-bounce 3s ease-in-out infinite 2s",
              fontFamily: "sans-serif",
            }}
          >
            🔥 Need help? We&apos;re online!
            <span
              aria-hidden
              className="absolute -bottom-1.5 right-7 w-3 h-3 bg-[#1a1a2e] rotate-45"
            />
          </button>
        </>
      )}
    </>
  );
}
