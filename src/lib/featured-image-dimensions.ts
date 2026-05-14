/**
 * Static dimensions for every featured-image path the blog seed
 * references. Used to emit ImageObject JSON-LD with width/height so
 * Google can size the image for cards/Discover surfaces and choose
 * an OG image with confidence.
 *
 * When adding a new article, run:
 *   sips -g pixelWidth -g pixelHeight public<path>
 * and append the {w, h} pair below.
 */
export const featuredImageDimensions: Record<string, { w: number; h: number }> = {
  "/images/2025/10/why-does-my-ac-compressor-shut-off-after-30-minutes.jpg": { w: 700, h: 467 },
  "/images/2025/10/why-does-my-ac-drip-pan-keep-filling-up.jpg": { w: 700, h: 467 },
  "/images/2025/10/why-does-my-ac-feel-humid.jpg": { w: 700, h: 467 },
  "/images/2025/12/furnace-smells-gas.jpg": { w: 800, h: 449 },
  "/images/2025/12/furnace-smells-like-plastic.jpg": { w: 1280, h: 800 },
  "/images/2025/12/Why-Does-My-Boiler-Make-Popping-Noises.jpg": { w: 700, h: 393 },
  "/images/2026/01/Why-Does-My-Water-Softener-Have-Water-in-It.jpg": { w: 800, h: 449 },
  "/images/2026/02/how-to-clean-heat-pump-coils.jpg": { w: 800, h: 449 },
  "/images/2026/03/water-softener-installation.jpg": { w: 735, h: 663 },
  "/images/2026/04/boiler-losing-pressure-featured.jpg": { w: 1312, h: 736 },
  "/images/2026/04/furnace-fuse-keeps-blowing-featured-1.jpg": { w: 1312, h: 736 },
  "/images/2026/04/why-does-my-boiler-keep-turning-off-featured.jpg": { w: 1312, h: 736 },
};

export function getFeaturedImageDimensions(
  path: string | null | undefined,
): { w: number; h: number } | null {
  if (!path) return null;
  return featuredImageDimensions[path] ?? null;
}
