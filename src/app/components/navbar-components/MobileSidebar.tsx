'use client';
import React from 'react';

export default function MobileSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && <div onClick={onClose} className="fixed inset-0 bg-black/40 z-40" />}
      <aside
        className={`fixed top-0 right-0 h-full w-full bg-white text-black z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile sidebar"
      >
        <button onClick={onClose} className="p-4 cursor-pointer">X</button>
        <nav className="p-4">
          <ul className="text-center text-5xl gap-8">
              {[
				{ href: "#about-me", label: "About Me" },
                { href: "#projects", label: "Projects" },
                { href: "#github", label: "Github" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.label} className='mt-10'>
                  <a
                    href={item.href}
                    className="relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-400 after:transition-all after:duration-500 hover:after:w-full"
					onClick={onClose}
				  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
        </nav>
		
      </aside>
    </>
  );
}
