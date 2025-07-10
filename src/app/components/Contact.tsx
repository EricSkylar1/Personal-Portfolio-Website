'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';

const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/ericskylar/';
const GITHUB_PROFILE_URL = 'https://github.com/EricSkylar1';
const EMAIL = 'mailto:ericskylar@gmail.com';

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-4 py-32 flex justify-center text-white font-inter"
    >
      <div className="w-full max-w-3xl rounded-md p-8 md:p-10 bg-zinc-900 shadow-xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-red-400 tracking-wide">
          Contact Me
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mb-6">
          Want to collaborate or just say hi? Drop a message below.
        </p>

        {/* Icons */}
        <div className="flex gap-6 mb-10 text-2xl">
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-red-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-red-400 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Form */}
        <form
          action="mailto:ericskylar@gmail.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 px-4 py-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-red-400 hover:bg-zinc-700 text-white hover:text-red-400 font-semibold py-3 rounded transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
