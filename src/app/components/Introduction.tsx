"use client";
import { useEffect, useState } from "react";
import AnimatedTitles from "./AnimatedTitles";


function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 18) return "Good Afternoon";
  return "Good Evening";
}

export default function Introduction() {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const interval = setInterval(() => setGreeting(getGreeting()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl rounded-3xl px-8 py-12 flex flex-col items-start text-left font-inter bg-transparent shadow-[0_4px_32px_0_rgba(255,255,255,0.25)]">
      <div className="flex items-center gap-8 mb-8 w-full">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-emerald-400 dark:from-red-700 dark:to-emerald-700 flex items-center justify-center overflow-hidden border-4 border-white dark:border-zinc-800 shadow-lg">
          <span className="text-white/80 text-lg">🧑‍💻</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-extrabold leading-tight mb-1 drop-shadow-sm">
            {greeting}, <span className="text-red-400">I'm Eric!</span>
          </span>
          <span className="text-2xl font-medium flex items-center gap-2">
            <span>I am a</span> <AnimatedTitles />
          </span>
        </div>
      </div>
      <blockquote className="italic border-l-4 border-red-400 pl-4 mb-8">“Turning data into action, and ideas into reality.”</blockquote>
      <p className="text-lg leading-relaxed mb-6">
        I was born in <span className="font-bold">Philadelphia, Pennsylvania</span>.
        At 16, I moved away from home to train as a full-time <span className="font-semibold">Judoka</span> in hopes of an Olympic dream. After retiring from competition, I shifted into tech and earned my degree in Data Science and Software Engineering from <span className="font-bold">Drexel University</span>.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Today I’m based in <span className="font-semibold">Montana</span>, where I live with my girlfriend and our two cats. Outside of tech, we explore the outdoors and run a cozy little cottage bakery together.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        I work primarily with <span className="font-semibold">TypeScript</span>, <span className="font-semibold">Java</span>, <span className="font-semibold">Python</span>, and <span className="font-semibold">SQL</span>. I’m passionate about building tools that combine data, usability, and real-world impact.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Right now I’m developing a browser extension that forecasts home listing prices using local market trends, predictive analytics, and interactive visuals like heat maps and anomaly detection.
      </p>
      <p className="text-lg leading-relaxed">
        Thanks for stopping by — feel free to check out some of my work below!
      </p>
    </div>
  );
}
