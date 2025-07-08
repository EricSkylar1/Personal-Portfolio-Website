import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';

const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/ericskylar/';
const GITHUB_PROFILE_URL = 'https://github.com/EricSkylar1';
const EMAIL = 'mailto:ericskylar@gmail.com';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white/30 dark:bg-zinc-900/30 backdrop-blur-lg rounded-xl shadow-lg border border-cyan-400/10 dark:border-cyan-500/10 p-6 md:p-8 flex flex-col items-center gap-2 md:gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-center bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent drop-shadow">Get in touch with me!</h2>
        <p className="text-lg md:text-xl text-center text-zinc-700 dark:text-zinc-300 mb-4">Feel free to connect or send me an email for opportunities, collaborations, or just to say hello.</p>
        <div className="flex flex-row gap-10 mb-8 justify-center items-center">
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-sky-500 dark:text-sky-400 hover:text-white hover:bg-sky-500/80 dark:hover:text-sky-200 rounded-full p-3 text-5xl transition-all duration-200 shadow-md hover:shadow-sky-400/40 focus:outline-none focus:ring-2 focus:ring-sky-400"
            style={{ boxShadow: '0 0 16px 0 rgba(56,189,248,0.15)' }}
          >
            <FaLinkedin />
          </a>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-800 dark:text-zinc-100 hover:text-white hover:bg-cyan-500/80 dark:hover:text-cyan-200 rounded-full p-3 text-5xl transition-all duration-200 shadow-md hover:shadow-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            style={{ boxShadow: '0 0 16px 0 rgba(6,182,212,0.15)' }}
          >
            <FaGithub />
          </a>
          {/* Email icon removed as requested */}
        </div>
        <a
          href={EMAIL}
          className="mt-2 px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold rounded-lg shadow-none hover:bg-cyan-50/20 dark:hover:bg-cyan-900/20 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all text-lg tracking-wide focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
