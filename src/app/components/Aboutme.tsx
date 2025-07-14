import React from "react";
import MasonryGallery from "./Masonrygallery"; // adjust the path if needed
import { InfiniteMovingCards } from "./infinite-moving-cards";

export default function AboutMe() {
  const images = [
    { src: "/Eric-Judo.jpg", alt: "Judo" },
    { src: "/Eric-Grad.jpeg", alt: "Graduation" },
    { src: "/Eric-Keer.jpeg", alt: "Eric and Keer" },
    { src: "/Cats.jpeg", alt: "Cats" },
	{ src: "/Eric-Hike.jpg", alt: "Hiking" },
	{ src: "/Eric-Judo2.jpg", alt: "Judo 2" },
  ];

  return (
    <section id="about-me" className="w-full max-w-6xl mx-auto px-4 py-16 grid gap-12 text-white grid-cols-1 md:grid-rows-2 md:grid-cols-none">
      {/* Left Panel — Your Life Story */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-red-400">A little about me...</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I’m originally from Philadelphia, Pennsylvania. At 16, I took a big leap and moved away from home to train full-time for the Olympics in Judo — an experience that taught me a lot about discipline and pushing my limits.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          After my athletic career wrapped up, I went on to earn my degree in Data Science with a Software Engineering minor from Drexel University — applying the same discipline, resilience, and focus I developed through years of Olympic-level Judo training to thrive in a rigorous academic environment.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
These days, I’m settled in Montana with my girlfriend and two cats who basically run the place. When I’m not yelling at the Eagles or Sixers on game day, you’ll find me hiking, traveling, or pretending to be a professional baker at our cozy cottage bakery — where I mostly just eat the goods.        </p>
      </div>

      {/* Right Panel — Masonry Gallery */}
      <div className="flex justify-center items-start h-full w-full">
        <InfiniteMovingCards
		items={images}
		direction="right"
		speed="normal"
		pauseOnHover={true}
		/>
      </div>
    </section>
  );
}
