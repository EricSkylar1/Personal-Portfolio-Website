"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

import GitHubCalendar from 'react-github-calendar';

const GITHUB_USERNAME = "ericskylar1"; // Change to your GitHub username

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
}

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`)
      .then(res => res.json())
      .then(data => {
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  return (
    <section id="github" className="w-full mx-auto py-20 px-4 flex flex-col items-start">
      <div className="w-full mb-10 flex flex-col md:flex-row md:gap-4 md:h-[440px]">
        {/* Calendar Section */}
        <div className="flex flex-col w-full md:w-1/2 h-full md:pr-2">
          <h2 className="text-4xl font-extrabold flex items-center gap-2 mb-6">
            <FaGithub className="text-3xl" /> GitHub Contributions
          </h2>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow p-4 flex justify-center items-center h-full">
            <GitHubCalendar username="ericskylar1" />
          </div>
        </div>
        {/* Recent Projects Section */}
        <div className="flex flex-col flex-1 w-full md:w-1/2 h-full md:pl-2">
          <h3 className="text-2xl font-bold mb-6">Recent Projects</h3>
          {loading ? (
            <div className="text-zinc-500">Loading repositories...</div>
          ) : (
            <div className="grid grid-cols-2 gap-4 w-full h-full">
              {repos.map(repo => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-zinc-900 rounded-xl shadow border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all h-full"
                  style={{ boxSizing: 'border-box' }}
                >
                  <div className="flex items-center gap-2 mb-2 p-5">
                    <FaGithub className="text-lg" />
                    <span className="font-semibold text-lg">{repo.name}</span>
                    {repo.language && (
                      <span className="ml-2 px-2 py-0.5 text-xs rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-300 text-sm mb-2 px-5">
                    {repo.description || "No description provided."}
                  </div>
                  <div className="text-xs text-zinc-400 px-5 pb-5">⭐ {repo.stargazers_count}</div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
