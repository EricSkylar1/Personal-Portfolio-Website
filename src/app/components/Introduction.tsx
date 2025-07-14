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
    <div className="w-full h-180 md:h-215 mx-auto px-8 flex flex-col items-center justify-center text-center">
		{/* Avatar */}
		<div className="w-24 h-24 border-4 border-red-400 rounded-full overflow-hidden mb-6 shadow-[0_0_20px_rgba(220,38,38,0.7)]">
			<img
				src="/Eric-Pro.jpg"
				alt="Profile"
				className="w-full h-full object-cover"
			/>
		</div>


		{/* Greeting */}
		<h1 className="text-xl sm:text-4xl font-extrabold leading-snug sm:leading-tight mb-4 text-center sm:text-left drop-shadow-sm">
			{greeting}, <span className="text-red-400">I'm Eric!</span>
		</h1>

		{/* Animated Title */}
		<h2 className="text-4xl sm:text-2xl font-medium flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
			<span className="min-w-[160px]">
				<TextFlip />
			</span>
		</h2>

    </div>
  );
}
