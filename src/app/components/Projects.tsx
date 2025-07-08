"use client";
import React from "react";

import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaHtml5, FaCss3Alt, FaAws
} from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiExpo, SiFirebase, SiMongodb, SiRedis, SiWoocommerce, SiWordpress, SiExpress
} from "react-icons/si";


const techIconMap: Record<string, React.ReactElement> = {
  react: <FaReact title="React" className="text-3xl text-sky-500" />,
  nextjs: <SiNextdotjs title="Next.js" className="text-3xl text-black dark:text-white" />,
  "next.js": <SiNextdotjs title="Next.js" className="text-3xl text-black dark:text-white" />,
  "node.js": <FaNodeJs title="Node.js" className="text-3xl text-green-700" />,
  nodejs: <FaNodeJs title="Node.js" className="text-3xl text-green-700" />,
  python: <FaPython title="Python" className="text-3xl text-yellow-500" />,
  tailwind: <SiTailwindcss title="TailwindCSS" className="text-3xl text-cyan-400" />,
  tailwindcss: <SiTailwindcss title="TailwindCSS" className="text-3xl text-cyan-400" />,
  expo: <SiExpo title="Expo" className="text-3xl text-black dark:text-white" />,
  firebase: <SiFirebase title="Firebase" className="text-3xl text-yellow-400" />,
  mongodb: <SiMongodb title="MongoDB" className="text-3xl text-green-600" />,
  redis: <SiRedis title="Redis" className="text-3xl text-red-500" />,
  docker: <FaDocker title="Docker" className="text-3xl text-blue-400" />,
  wordpress: <SiWordpress title="WordPress" className="text-3xl text-blue-700" />,
  typescript: <SiTypescript title="TypeScript" className="text-3xl text-blue-600" />,
  vite: <TbBrandVite title="Vite" className="text-3xl text-blue-500" />,
  html: <FaHtml5 title="HTML5" className="text-3xl text-orange-500" />,
  css: <FaCss3Alt title="CSS3" className="text-3xl text-blue-500" />,
  javascript: <IoLogoJavascript title="JavaScript" className="text-3xl text-yellow-500" />,
  express: <SiExpress title="Express.js" className="text-3xl" />,
  woocommerce: <SiWoocommerce title="WooCommerce" className="text-6xl text-blue-600" />,
  aws: <FaAws title="AWS" className="text-3xl text-orange-500" />
};

const projects = [
  {
    title: "Bot Blackjack",
    description: "A simple web page where bots play blackjack against each other, showcasing AI strategies and game mechanics.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    image: "bot-blackjack.png",
  },
  {
    title: "Keers Cottage Bakery",
    description: "A modern, responsive site for a local bakery, featuring online ordering, menu management, and a custom admin dashboard.",
    tech: ["Wordpress", "WooCommerce"],
    link: "https://keerscottagebakery.com",
    image: "keers-cottage-bakery.png",
  },
  {
    title: "Home Helper AI",
    description: "A browser extension that predicts home listing prices using local market trends, predictive analytics, and interactive heat maps.",
    tech: ["TypeScript", "Next.js", "Python", "TailwindCSS", "Vite"],
    link: "#",
    image: "work-in-progress.png",
  },
  {
    title: "Judo Training Tracker",
    description: "A mobile app to log, analyze, and visualize judo training sessions, with progress charts and goal tracking.",
    tech: ["React", "Expo", "Firebase"],
    link: "#",
    image: "work-in-progress.png",
  },
  {
    title: "FishDad",
    description: "A mobile app to log, analyze, and visualize fishing trips, with catch tracking and weather integration.",
    tech: ["React", "Tailwind", "NextJS", "Express", "Redis", "MongoDB", "Docker", "AWS"],
    link: "#",
    image: "work-in-progress.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-35 px-4 flex flex-col font-inter">
      <h2 className="text-4xl font-extrabold mb-10 drop-shadow ml-3">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            tabIndex={0}
            className="group perspective"
          >
            <div className="relative w-full h-80 min-w-[380px] max-w-[620px] mx-auto card-3d group">
              {/* Front Side */}
              <a
                href={project.link}
                className="absolute inset-0 flex flex-col gap-4 dark:bg-zinc-900/80 rounded-2xl shadow-xl p-6 border border-zinc-200 dark:border-zinc-800 w-full h-full items-start justify-start card-front z-10"
              >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.tech.map(tech => {
                    const key = tech.toLowerCase();
                    const icon = techIconMap[key];
                    return (
                      <span key={tech} className="flex items-center" title={tech}>
                        {icon
                          ? icon
                          : (
                            <span className="px-2 py-1 text-sm rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-semibold">
                              {tech}
                            </span>
                          )}
                      </span>
                    );
                  })}
                </div>
              </a>
              {/* Back Side */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center w-full h-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 card-back"
                tabIndex={-1}
                aria-label={project.title + ' preview'}
              >
                <img
                  src={project.image}
                  alt={project.title + ' preview'}
                  className="object-cover w-full h-full"
                  draggable="false"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* 3D card flip styles moved to globals.css */}
    </section>
  );
}
