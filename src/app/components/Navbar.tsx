'use client';
import React, { useState } from 'react';
import ThemeToggleSwitch from './navbar-components/ThemeToggle';
import MobileSidebar from './navbar-components/MobileSidebar';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="h-16 bg-white dark:bg-black dark:text-white flex items-center px-4 z-10">
        <div className="w-full mx-auto flex justify-between items-center">
          	<div className="flex-col flex font-bold">
				<a className='text-3xl p-4'>Eric Skylar</a>
			</div>

          <div className="flex items-center gap-4">
			
            <div className="hidden md:flex">
              <ThemeToggleSwitch />
            </div>
			

            {/* Hamburger button for mobile */}
            <button
              className="md:hidden p-2 text-gray-700 dark:text-white"
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
