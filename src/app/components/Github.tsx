"use client";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GITHUB_USERNAME = "ericskylar1";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
}

export default function GithubBash() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=8`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-24 font-mono">
      <div className="bg-black text-white border border-zinc-700 rounded-md shadow-xl overflow-hidden text-sm leading-relaxed">
        {/* Terminal Top Header */}
        <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-700 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-2">
            {/* GitHub Logo SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.605-2.665-.304-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.137 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.624-5.475 5.922.43.372.815 1.102.815 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span>MINGW64:/c/erics/secret/git/files</span>
          </div>
          <div className="space-x-2 text-right">
            <span className="text-white/30">─</span>
            <span className="text-white/30">□</span>
            <span className="text-white/30">✕</span>
          </div>
        </div>

        <div className="px-4 py-6 space-y-5">
          {/* GitHub Calendar */}
          <div>
            <span className="text-green-400">ericskylar@MY-DESKTOP</span>{" "}
            <span className="text-fuchsia-400">MINGW64</span>{" "}
            <span className="text-white">~ </span>
            <span className="text-cyan-300">(main)</span>
            <br />
            <span className="text-white">$</span>{" "}
            <span className="text-white">display-contributions --calendar</span>

            <div className="mt-2 border border-zinc-800 p-3 bg-black">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                blockSize={14}
                blockMargin={4}
                fontSize={14}
              />
            </div>
          </div>

          {/* GitHub Repositories */}
          <div>
            <span className="text-green-400">ericskylar@MY-DESKTOP</span>{" "}
            <span className="text-fuchsia-400">MINGW64</span>{" "}
            <span className="text-white">~ </span>
            <span className="text-cyan-300">(main)</span>
            <br />
            <span className="text-white">$</span>{" "}
            <span className="text-white">list-repos --latest</span>

            {loading ? (
              <div className="text-zinc-500 mt-2">⏳ fetching repos...</div>
            ) : (
              <ul className="mt-3 space-y-4 pl-4 list-disc text-zinc-200">
                {repos.map((repo) => (
                  <li key={repo.id}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-300 hover:underline font-semibold"
                    >
                      {repo.name}
                    </a>{" "}
                    <span className="text-zinc-400 text-xs">⭐ {repo.stargazers_count}</span>
                    {repo.language && (
                      <span className="ml-2 text-cyan-300 text-xs">[{repo.language}]</span>
                    )}
                    {repo.description && (
                      <div className="text-zinc-500 text-xs mt-1 pl-2 border-l border-l-zinc-700">
                        → {repo.description}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Terminal Prompt */}
          <div>
            <span className="text-green-400">ericskylar@MY-DESKTOP</span>{" "}
            <span className="text-fuchsia-400">MINGW64</span>{" "}
            <span className="text-white">~ </span>
            <span className="text-cyan-300">(main)</span>
            <br />
			<span>$</span>
            <span className="text-white animate-pulse"> | </span>
          </div>
        </div>
      </div>
    </section>
  );
}
