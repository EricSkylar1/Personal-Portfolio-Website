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
      className="w-full px-4 py-32 flex justify-center text-white"
      aria-label="Contact section"
    >
      <div className="w-full max-w-3xl rounded-3xl p-10 bg-gradient-to-tr from-[#2a0a0a] via-[#1b0b0b] to-[#1c0c0c] shadow-[0_0_40px_rgba(200,50,50,0.6)]">
        {/* Header */}
        <h2 className="text-4xl font-extrabold mb-4 text-red-500 tracking-wide text-center drop-shadow-sm">
          Contact Me
        </h2>
        <div className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto text-center">
          <p>
            Interested in collaborating or just want to say hi?
          </p>
          <p>Drop a message below.</p>
        </div>

        {/* Social Icons */}
        <nav aria-label="Social media links" className="flex gap-8 mb-12 text-3xl justify-center">
          {[{
            href: LINKEDIN_PROFILE_URL,
            label: 'LinkedIn profile',
            icon: <FaLinkedin />
          }, {
            href: GITHUB_PROFILE_URL,
            label: 'GitHub profile',
            icon: <FaGithub />
          }].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-red-500 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </nav>

        {/* Contact Form */}
        <form
          action="mailto:ericskylar@gmail.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-6 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-gradient-to-r from-[#1c1c1c] via-[#2a2a2a] to-[#1c1c1c] border border-red-600 text-white placeholder-red-400 px-5 py-4 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-shadow duration-300 shadow-sm shadow-red-900/30"
            required
            aria-label="Your Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-gradient-to-r from-[#1c1c1c] via-[#2a2a2a] to-[#1c1c1c] border border-red-600 text-white placeholder-red-400 px-5 py-4 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-shadow duration-300 shadow-sm shadow-red-900/30"
            required
            aria-label="Your Email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="bg-gradient-to-r from-[#1c1c1c] via-[#2a2a2a] to-[#1c1c1c] border border-red-600 text-white placeholder-red-400 px-5 py-4 rounded-xl resize-none
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-shadow duration-300 shadow-sm shadow-red-900/30"
            required
            aria-label="Your Message"
          ></textarea>
          <button
            type="submit"
            className="mt-6 bg-gradient-to-r from-[#330000] via-[#990000] to-[#330000] text-white font-semibold py-4 rounded-2xl shadow-md
              hover:from-[#550000] hover:via-[#cc0000] hover:to-[#550000] transition duration-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]"
            aria-label="Send Message"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
