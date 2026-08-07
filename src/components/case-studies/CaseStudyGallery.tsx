import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  kind: "hero" | "screenshot" | "results";
  alt: string;
  caption: string;
}

/**
 * Deployment gallery — one hero/client-context image plus real product
 * screenshots (and an optional results visualization). Placeholders are pointed
 * at by the content layer until real deployment captures land.
 */
export function CaseStudyGallery({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) return null;

  const [hero, ...rest] = images;

  return (
    <div className="grid gap-6">
      {/* Client / context hero */}
      <Reveal variant="scale" as="figure">
        <div className="relative overflow-hidden rounded-2xl border border-line-strong shadow-card">
          <Image
            src={hero.src}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="aspect-video w-full object-cover"
          />
        </div>
        <figcaption className="mt-2 px-1 font-mono text-xs text-faint">
          {hero.caption}
        </figcaption>
      </Reveal>

      {/* Product screenshots + results visualization */}
      {rest.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((image, i) => (
            <Reveal key={image.src} staggerIndex={i} as="figure">
              <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-850">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className={
                    "aspect-[3/2] w-full object-cover " +
                    (image.kind === "hero"
                      ? ""
                      : image.kind === "results"
                        ? "opacity-95"
                        : "opacity-90")
                  }
                />
                {image.kind === "results" ? (
                  <span className="absolute start-3 top-3 rounded-full border border-accent-500/30 bg-accent-500/15 px-3 py-1 font-mono text-xs text-accent-300 backdrop-blur">
                    {image.caption}
                  </span>
                ) : null}
              </div>
              {image.kind !== "results" ? (
                <figcaption className="mt-2 px-1 font-mono text-xs text-faint">
                  {image.caption}
                </figcaption>
              ) : null}
            </Reveal>
          ))}
        </div>
      ) : null}
    </div>
  );
}