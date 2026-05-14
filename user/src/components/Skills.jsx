import { useEffect, useRef, useState } from 'react';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaBootstrap,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiJavascript, SiMongodb, SiPostgresql,
  SiExpress, SiRedux, SiPostman, SiVercel, SiNetlify,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const skillGroups = [
  {
    title: 'Frontend',
    color: 'from-indigo-500 to-blue-500',
    badges: [
      { name: 'React', icon: <FaReact />, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white border-white/20 bg-white/5' },
      { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/5' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' },
      { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-400 border-orange-500/30 bg-orange-500/5' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-400 border-blue-500/30 bg-blue-500/5' },
      { name: 'Bootstrap', icon: <FaBootstrap />, color: 'text-purple-400 border-purple-500/30 bg-purple-500/5' },
      { name: 'Redux', icon: <SiRedux />, color: 'text-purple-400 border-purple-500/30 bg-purple-500/5' },
    ],
  },
  {
    title: 'Backend & Database',
    color: 'from-purple-500 to-pink-500',
    badges: [
      { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-400 border-green-500/30 bg-green-500/5' },
      { name: 'Express', icon: <SiExpress />, color: 'text-slate-300 border-slate-500/30 bg-slate-500/5' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400 border-green-500/30 bg-green-500/5' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-400 border-blue-500/30 bg-blue-500/5' },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: 'from-orange-500 to-red-500',
    badges: [
      { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-400 border-orange-500/30 bg-orange-500/5' },
      { name: 'GitHub', icon: <FaGithub />, color: 'text-white border-white/20 bg-white/5' },
      { name: 'Postman', icon: <SiPostman />, color: 'text-orange-400 border-orange-500/30 bg-orange-500/5' },
      { name: 'Vercel', icon: <SiVercel />, color: 'text-white border-white/20 bg-white/5' },
      { name: 'Netlify', icon: <SiNetlify />, color: 'text-teal-400 border-teal-500/30 bg-teal-500/5' },
      { name: 'VS Code', icon: <VscCode />, color: 'text-blue-400 border-blue-500/30 bg-blue-500/5' },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-24 mesh-bg relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-pink-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-code text-indigo-400 text-sm tracking-widest uppercase">What I work with</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>

        {/* Skill Groups */}
        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${gi * 150}ms` }}
            >
              {/* Group label */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`h-px flex-1 bg-gradient-to-r ${group.color} opacity-30`} />
                <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                  {group.title}
                </span>
                <div className={`h-px flex-1 bg-gradient-to-l ${group.color} opacity-30`} />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 justify-center">
                {group.badges.map(badge => (
                  <span
                    key={badge.name}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold font-code transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default ${badge.color}`}
                  >
                    <span className="text-lg">{badge.icon}</span>
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
