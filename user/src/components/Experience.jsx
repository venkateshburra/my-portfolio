import { useEffect, useRef, useState } from 'react';
import { MdWork, MdCalendarToday, MdCircle } from 'react-icons/md';
import { FaRocket, FaLaptopCode, FaBolt } from 'react-icons/fa';

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

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Techpixe',
    period: '01/2026 – 05/2026',
    color: 'from-indigo-500 to-purple-600',
    icon: <FaRocket className="text-white text-lg" />,
    points: [
      'Developed scalable and responsive web applications using React.js, Next.js, JavaScript, and Tailwind CSS.',
      'Built and maintained e-commerce platforms with authentication, product management, cart, checkout, and order workflows.',
      'Integrated REST APIs and implemented dynamic frontend-backend communication.',
      'Collaborated with designers and backend teams to convert Figma designs into pixel-perfect interfaces.',
      'Implemented Redux state management and modern frontend best practices for scalable applications.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Prosper Overseas',
    period: '07/2025 – 12/2025',
    color: 'from-purple-500 to-pink-600',
    icon: <FaLaptopCode className="text-white text-lg" />,
    points: [
      'Developed responsive React.js interfaces with reusable components and efficient state management using React Hooks.',
      'Integrated frontend applications with REST APIs to deliver seamless end-to-end full-stack functionality.',
      'Developed scalable backend services using Node.js and Express.js following REST API best practices.',
      'Implemented secure JWT authentication and authorization to protect APIs and manage user access.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'SpriteEra IT Solutions',
    period: '10/2024 – 01/2025',
    color: 'from-pink-500 to-orange-500',
    icon: <FaBolt className="text-white text-lg" />,
    points: [
      'Developed dynamic UIs using React, Hooks, and Tailwind CSS.',
      'Built REST APIs using Node.js + Express.js for application features.',
      'Worked with MongoDB for CRUD operations and data modeling.',
      'Converted Figma designs into responsive, pixel-perfect user interfaces.',
      'Debugged UI issues and optimized rendering performance across browsers.',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView();
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="py-24 bg-[#0d0d18] relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-code text-indigo-400 text-sm tracking-widest uppercase">Where I've worked</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Tabs */}
          <div className={`flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActiveExp(i)}
                className={`flex-shrink-0 lg:flex-shrink text-left px-5 py-4 rounded-xl border transition-all duration-300 ${
                  activeExp === i
                    ? 'bg-indigo-500/10 border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                    : 'glass border-white/5 hover:border-white/10 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                    {exp.icon}
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${activeExp === i ? 'text-indigo-400' : 'text-white'}`}>
                      {exp.company}
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5 flex items-center gap-1">
                      <MdCalendarToday className="text-xs" />
                      {exp.period}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Experience Detail */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {experiences.map((exp, i) => (
              <div key={i} className={`transition-all duration-500 ${activeExp === i ? 'block' : 'hidden'}`}>
                <div className="gradient-border rounded-2xl p-8 glass h-full">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <MdWork className="text-indigo-400" />
                        {exp.role}
                      </h3>
                      <div className={`inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                        @ {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg border border-white/10 text-slate-400 text-sm">
                      <MdCalendarToday className="text-indigo-400" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                        <MdCircle className="mt-1.5 flex-shrink-0 text-indigo-400 text-xs" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
