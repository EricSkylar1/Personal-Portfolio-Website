'use client';
import React, { useState } from 'react';
import MobileSidebar from './navbar-components/MobileSidebar';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
	<>
  <nav className="h-16 bg-black text-white flex items-center px-10 sticky top-0 z-50">
	  <div className="w-full flex items-center">
		<div className="flex items-center font-bold h-full">
		  <a id="quantify" href="/" className='text-3xl'>Eric Skylar</a>
		</div>
		<div className="flex-1 flex items-center justify-center mr-30">
		  <ul className="hidden md:flex gap-8 text-lg">
			{[
			  { href: "#projects", label: "Projects" },
			  { href: "#github", label: "Github" },
			  { href: "#skills", label: "Skills/Tech/Frameworks" },
			  { href: "#linkedin", label: "LinkedIn", target: "_blank", rel: "noopener noreferrer" },
			  { href: "#contact", label: "Contact" },
			].map((item, idx) => (
			  <li key={item.label}>
				<a
				  href={item.href}
				  {...(item.target ? { target: item.target } : {})}
				  {...(item.rel ? { rel: item.rel } : {})}
				  className="relative transition-colors duration-500 hover:text-red-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-red-400 after:transition-all after:duration-500 hover:after:w-full"
				>
				  {item.label}
				</a>
			  </li>
			))}
		  </ul>
		</div>
		<div className="flex items-center gap-4">
		  {/* Hamburger button for mobile */}
		  <button
			className="md:hidden p-2 text-gray-700"
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
