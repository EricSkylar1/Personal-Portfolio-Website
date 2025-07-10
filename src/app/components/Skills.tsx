import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaAws,
  FaLinux,
  FaDocker,
  FaJava,
  FaDatabase,
  FaTools,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiRedux,
  SiJest,
  SiVercel,
  SiFigma,
  SiMysql,
  SiSpringboot,
  SiPandas,
  SiNumpy,
  SiHibernate,
} from "react-icons/si";

// Simple function to lighten hex colors by a percent (0-100)
function lightenHex(hex: string, percent: number) {
  const num = parseInt(hex.replace("#", ""), 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
  g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
  b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const rawSkills = [
  // Frontend
  [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  ],
  // Backend
  [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: "#000000" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "SpringBoot", icon: <SiSpringboot />, color: "#6DB33F" },
    { name: "Hibernate", icon: <SiHibernate />, color: "#59666C" },
    { name: "REST API", icon: <FaNetworkWired />, color: "#61DAFB" },
    { name: "Maven", icon: <FaTools />, color: "#C71A36" },
  ],
  // Data / Cloud / DevOps
  [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "SQL Server", icon: <FaDatabase />, color: "#CC2927" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Linux", icon: <FaLinux />, color: "#FCC624" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  ],
  // Data Science
  [
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Pandas", icon: <SiPandas />, color: "#150458" },
    { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
  ],
];

// Process skills: replace black with white, and lighten all colors by 20%
const skills = rawSkills.map((category) =>
  category.map(({ color, ...rest }) => {
    let fixedColor = color.toLowerCase() === "#000000" ? "#ffffff" : color;
    fixedColor = lightenHex(fixedColor, 20);
    return { ...rest, color: fixedColor };
  })
);

export default function SkillsMatrix() {
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <section
      id="skills"
      className="w-full max-w-6xl mx-auto px-6 py-24 text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-center tracking-wide border-b border-zinc-700 pb-2">
        Skills & Technologies
      </h2>

      <div className="space-y-12">
        {skills.map((category, i) => (
          <div
            key={i}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-6 border-b border-zinc-700 pb-8"
          >
            {category.map((skill) => {
              const isHovered = hovered === skill.name;
              const color = skill.color;

              return (
                <div
                  key={skill.name}
                  className="flex items-center justify-center cursor-pointer"
                  onMouseEnter={() => setHovered(skill.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Label container */}
                  <span
                    className={`
                      overflow-hidden
                      whitespace-nowrap
                      text-base
                      font-semibold
                      transition-all
                      duration-300
                      mr-3
                      ${isHovered ? "w-32 opacity-100" : "w-0 opacity-0"}
                    `}
                    aria-hidden="true"
                    style={{ color }}
                  >
                    {skill.name}
                  </span>

                  {/* Icon */}
                  <div
                    className={`
                      text-4xl
                      flex
                      items-center
                      justify-center
                      transition-transform
                      duration-200
                      ${isHovered ? "scale-125" : ""}
                    `}
                    style={{ color, minWidth: 48, minHeight: 48 }}
                  >
                    {skill.icon}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
