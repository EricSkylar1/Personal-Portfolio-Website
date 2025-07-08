'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggleSwitch() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setIsDark(newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
      className={`
        relative flex items-center
        w-14 h-8
        bg-yellow-400 dark:bg-moon-grey
        rounded-full
        ring-2 ring-offset-2 ring-yellow-500 dark:ring-moon-grey
        select-none
        cursor-pointer
      `}
    >
      {/* Sun Icon */}
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-full
          ${isDark ? 'opacity-20' : 'opacity-100'}
          text-white transition-opacity duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        </svg>
      </div>

      {/* Moon Icon */}
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-full
          ${isDark ? 'opacity-100' : 'opacity-20'}
          text-white transition-opacity duration-300 ml-auto`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
        </svg>
      </div>
    </button>
  );
}
