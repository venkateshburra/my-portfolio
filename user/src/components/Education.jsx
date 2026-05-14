import { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaBook, FaSchool } from 'react-icons/fa';
import { MdLocationOn, MdStar } from 'react-icons/md';

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

const education = [
  {
    degree: 'B.Sc (MPCS)',
    institution: 'Kakatiya University',
    location: 'Telangana',
    score: 'CGPA: 7.2',
    icon: <FaGraduationCap className="text-white text-2xl" />,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Srivedha College',
    location: 'Hanamkonda',
    score: 'Aggregate: 85.6%',
    icon: <FaBook className="text-white text-2xl" />,
    color: 'from-purple-500 to-pink-600',
  },
  {
    degree: 'SSC',
    institution: 'SAVM',
    location: 'Mulugu',
    score: 'CGPA: 8.5',
    icon: <FaSchool className="text-white text-2xl" />,
    color: 'from-pink-500 to-orange-500',
  },
];

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="py-24 mesh-bg relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-code text-indigo-400 text-sm tracking-widest uppercase">Academic background</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden sm:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`flex gap-6 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg`}>
                    {edu.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 gradient-border rounded-2xl p-6 glass card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-indigo-400 font-semibold mt-1">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${edu.color} text-white`}>
                        <MdStar />
                        {edu.score}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500 text-sm">
                        <MdLocationOn className="text-indigo-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
