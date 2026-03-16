"use client";

import { showcaseItems } from "@/lib/data";
import { Marquee } from "@/components/ui/Marquee";

export function Showcase() {
  return (
    <section className="-mt-40">
      <Marquee speed={35}>
        {showcaseItems.map((item) => (
          <div
            key={item.title}
            className="flex-shrink-0 w-[400px] sm:w-[500px] mx-3"
          >
            <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-400 text-lg font-medium">
                  {item.title}
                </div>
              )}
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
