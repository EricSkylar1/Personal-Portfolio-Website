"use client";
import { useEffect, useState } from "react";
import TextFlip from "./Textflip";

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
    <div className="w-full max-w-5xl h-215 mx-auto px-8 flex flex-col items-center justify-center text-center font-inter">
		{/* Avatar */}
		<div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-red-500 to-emerald-400 dark:from-red-700 dark:to-emerald-700 flex items-center justify-center overflow-hidden border-4 border-white dark:border-zinc-800 shadow-lg">
			<span className="text-white/80 text-lg">🧑‍💻</span>
		</div>

		{/* Greeting */}
		<h1 className="text-4xl font-extrabold leading-tight mb-2 drop-shadow-sm">
			{greeting}, <span className="text-red-400">I'm Eric!</span>
		</h1>

		{/* Animated Title */}
		<h2 className="text-2xl font-medium flex items-center justify-center gap-2">
			<span className=" min-w-[160px]">
				<TextFlip />
			</span>
		</h2>
    </div>
  );
}
