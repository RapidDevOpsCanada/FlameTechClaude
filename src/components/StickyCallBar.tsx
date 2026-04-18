export default function StickyCallBar() {
  return (
    <a
      href="tel:5878343668"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-emergency text-white py-4 px-6 flex items-center justify-center gap-3 font-technical font-bold text-sm uppercase tracking-widest shadow-2xl"
    >
      <span className="material-symbols-outlined text-lg">call</span>
      Call 587-834-3668
    </a>
  );
}
