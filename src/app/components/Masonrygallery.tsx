import React, { useEffect, useRef } from "react";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export default function TwoRowsHorizontalSlider({ images }: Props) {
  // Split images into two rows (alternating)
  const topRowImages = images.filter((_, i) => i % 2 === 0);
  const bottomRowImages = images.filter((_, i) => i % 2 !== 0);

  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Image width + gap in px (adjust based on your Tailwind sizing)
  const imageWidth = 256; // 64 * 4 px
  const gapWidth = 16;    // 4 px gap * 4 (gap-4 is 1rem = 16px)
  const totalItemWidth = imageWidth + gapWidth;

  const scrollSpeed = 0.5; // pixels per frame

  useEffect(() => {
    if (!topRef.current || !bottomRef.current) return;

    const topContainer = topRef.current;
    const bottomContainer = bottomRef.current;

    // Duplicate content for seamless scroll
    topContainer.innerHTML += topContainer.innerHTML;
    bottomContainer.innerHTML += bottomContainer.innerHTML;

    const maxScrollTop = topContainer.scrollWidth / 2;
    const maxScrollBottom = bottomContainer.scrollWidth / 2;

    let topScroll = 0;
    let bottomScroll = totalItemWidth / 2; // stagger offset for bottom row

    let animationId: number;

    function step() {
      topScroll += scrollSpeed;
      bottomScroll += scrollSpeed;

      if (topScroll >= maxScrollTop) topScroll = 0;
      if (bottomScroll >= maxScrollBottom) bottomScroll = 0;

      topContainer.scrollLeft = topScroll;
      bottomContainer.scrollLeft = bottomScroll;

      animationId = requestAnimationFrame(step);
    }

    animationId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationId);
  }, [images]);

  return (
    <div className="space-y-6 select-none overflow-hidden">
      {/* Top Row */}
      <div
        ref={topRef}
        className="flex gap-4 whitespace-nowrap overflow-x-auto no-scrollbar"
        style={{ height: 256 }} // h-64 in px
      >
        {topRowImages.map((img, idx) => (
          <img
            key={`top-${idx}`}
            src={img.src}
            alt={img.alt}
            className="inline-block w-64 h-64 object-cover rounded-xl shadow-lg"
            draggable={false}
          />
        ))}
      </div>

      {/* Bottom Row (staggered) */}
      <div
        ref={bottomRef}
        className="flex gap-4 whitespace-nowrap overflow-x-auto no-scrollbar"
        style={{ height: 256 }} // h-64 in px
      >
        {bottomRowImages.map((img, idx) => (
          <img
            key={`bottom-${idx}`}
            src={img.src}
            alt={img.alt}
            className="inline-block w-64 h-64 object-cover rounded-xl shadow-lg"
            draggable={false}
          />
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
