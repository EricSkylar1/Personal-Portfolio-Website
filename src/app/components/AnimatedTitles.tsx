"use client";
import { useEffect, useState } from "react";

export default function AnimatedTitles() {
  const titles = [
  "Full-Stack Developer.",
  "Data Scientist.",
  "Cloud Engineer.",
  "Product Builder.",
  "Problem Solver.",
  "Creator."
];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 2800);
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % titles.length);
      setFade(true);
    }, 3200);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(next);
    };
  }, [index]);

  return (
    <span
      className={`text-2xl font-semibold transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-0'}`}
      style={{ minWidth: 160 }}
    >
      {titles[index]}
    </span>
  );
}
