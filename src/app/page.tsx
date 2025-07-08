
"use client";
import { useEffect, useState } from "react";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Github from "./components/Github";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  const [greeting, setGreeting] = useState("Hi");

  useEffect(() => {
	const now = new Date();
	const hour = now.getHours();
	let greet = "Hi";
	if (hour >= 5 && hour < 12) {
	  greet = "Good Morning";
	} else if (hour >= 12 && hour < 18) {
	  greet = "Good Afternoon";
	} else {
	  greet = "Good Evening";
	}
	setGreeting(greet);
  }, []);

  return (
	<div className="flex min-h-screen flex-col items-center py-15 px-4 bg-gradient-to-b from-black to-gray-900 text-white">
	  <Introduction />
	  <Projects />
	  <Github />
	  <Skills />
	  <Contact />
	</div>
  );
}