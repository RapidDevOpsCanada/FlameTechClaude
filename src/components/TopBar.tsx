import Icon from "@/components/Icon";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-ink-800 text-cream-50/75 border-b border-line-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-2 flex items-center justify-between text-[12px] font-semibold">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="verified" className="text-primary text-base" />
            BBB Accredited
          </span>
          <span className="text-cream-50/25">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="check_circle" className="text-primary text-base" />
            Licensed in Alberta
          </span>
          <span className="text-cream-50/25">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="request_quote" className="text-primary text-base" />
            Free Estimates
          </span>
        </div>
        <a
          href="tel:5878343668"
          className="inline-flex items-center gap-2 hover:text-emergency transition-colors"
        >
          <Icon name="call" className="text-primary text-base" />
          Call 587-834-3668
        </a>
      </div>
    </div>
  );
}
