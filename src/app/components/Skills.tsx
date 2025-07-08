import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaAws, FaLinux, FaDocker, FaJava, FaDatabase, FaTools, FaNetworkWired } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiRedux, SiJest, SiVercel, SiFigma, SiMysql, SiSpringboot, SiPandas, SiNumpy, SiHibernate } from 'react-icons/si';
import React from 'react';


const skills = [
  // Frontend
  [
    { name: 'React', icon: <FaReact className="text-sky-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
  ],
  // Backend
  [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
    { name: 'RESTful API', icon: <FaNetworkWired className="text-blue-700" /> },
    { name: 'Java', icon: <FaJava className="text-orange-700" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-700" /> },
    { name: 'Hibernate', icon: <SiHibernate className="text-green-900" /> },
    { name: 'Maven', icon: <FaTools className="text-orange-500" /> },
  ],
  // Databases
  [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'SQL Server', icon: <FaDatabase className="text-red-700" /> },
  ],
  // DevOps & Cloud
  [
    { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
    { name: 'AWS', icon: <FaAws className="text-yellow-500" /> },
    { name: 'Linux', icon: <FaLinux className="text-black dark:text-white" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  ],
  // Data Science
  [
    { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
    { name: 'Pandas', icon: <SiPandas className="text-black dark:text-white" /> },
    { name: 'NumPy', icon: <SiNumpy className="text-blue-400" /> },
  ],
];

export default function Skills() {
  const categories = [
    'Frontend',
    'Backend',
    'Databases',
    'DevOps & Cloud',
    'Data Science',
  ];
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-extrabold mb-10 text-center">Skills</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
        {skills.map((row, i) => {
          // Assign a unique gradient or color for each block
          const blockGradients = [
            'from-sky-800 via-sky-900 to-zinc-900 dark:from-sky-900 dark:via-sky-950 dark:to-black', // Frontend (techy/dark)
            'from-green-800 via-green-900 to-zinc-900 dark:from-green-900 dark:via-green-950 dark:to-black', // Backend (techy/dark)
            'from-purple-800 via-purple-900 to-zinc-900 dark:from-purple-900 dark:via-purple-950 dark:to-black', // Databases (techy/dark)
            'from-yellow-700 via-yellow-900 to-zinc-900 dark:from-yellow-900 dark:via-yellow-950 dark:to-black', // DevOps & Cloud (techy/dark)
            'from-pink-800 via-pink-900 to-zinc-900 dark:from-pink-900 dark:via-pink-950 dark:to-black', // Data Science (techy/dark)
          ];
          return (
            <div
              key={categories[i]}
              className={`flex flex-col items-center justify-center rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-6 w-full md:w-1/5 aspect-square min-w-[200px] max-w-[260px] mx-auto bg-gradient-to-br ${blockGradients[i]} transition-transform hover:scale-105 hover:shadow-2xl`}
            >
              <h3 className="text-xl font-bold mb-4 text-center drop-shadow-lg dark:text-white/90">{categories[i]}</h3>
              <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
                {row.map(skill => (
                  <div key={skill.name} className="flex flex-col items-center min-w-[60px]">
                    <div className="text-3xl mb-1">{skill.icon}</div>
                    <span className="font-medium text-base text-center whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
