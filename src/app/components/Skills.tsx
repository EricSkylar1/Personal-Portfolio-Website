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
    { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
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
      <div className="flex flex-col gap-10">
        {skills.map((row, i) => (
          <div key={categories[i]}>
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">{categories[i]}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {row.map(skill => (
                <div key={skill.name} className="flex flex-col items-center p-4 bg-white dark:bg-zinc-900 rounded-xl shadow border border-zinc-200 dark:border-zinc-800">
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <span className="font-semibold text-lg text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
