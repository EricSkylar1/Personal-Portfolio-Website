export default function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto p-12 bg-gradient-to-b from-black via-gray-900 to-gray-800 rounded-3xl shadow-xl select-none">
      <h2 className="text-5xl font-extrabold text-gray-300 mb-8 tracking-wide slideUp">
        About Me
      </h2>
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-mono tracking-wide slideUp delay-150">
        I’m a <span className="text-gray-100 font-semibold">problem solver</span> and <span className="text-gray-100 font-semibold">software engineer</span> specializing in building scalable, efficient, and maintainable applications using <span className="text-gray-100 font-semibold">React</span> and <span className="text-gray-100 font-semibold">Tailwind CSS</span>.
        <br /><br />
        I thrive on writing clean, well-architected code and leveraging the latest web technologies to create seamless user experiences and robust systems.
        <br /><br />
        Passionate about emerging fields like <span className="text-gray-100 font-semibold">AI</span>, <span className="text-gray-100 font-semibold">decentralized networks</span>, and <span className="text-gray-100 font-semibold">cloud architecture</span>, I continuously push the boundaries of what’s possible.
      </p>

      <style jsx>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .slideUp {
          animation: slideUp 0.6s ease forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
