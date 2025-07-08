'use client';
import React from 'react';
import ThemeToggleSwitch from './ThemeToggle';

export default function MobileSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && <div onClick={onClose} className="fixed inset-0 bg-black/40 z-40" />}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile sidebar"
      >
        <button onClick={onClose} className="p-4 cursor-pointer">X</button>
        <nav className="p-4">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact Me</a></li>
			<div className='mt-4'>
				<ThemeToggleSwitch />
			</div>
          </ul>
        </nav>
		
      </aside>
    </>
  );
}
