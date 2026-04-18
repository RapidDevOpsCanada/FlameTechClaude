export default function StickyCallBar() {
  return (
    <a
      href="tel:5878343668"
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-emergency text-ink-900 py-4 px-6 rounded-full flex items-center justify-center gap-3 font-bold text-sm shadow-2xl"
    >
      <span className="material-symbols-outlined text-lg">call</span>
      Call 587-834-3668
    </a>
  );
}
