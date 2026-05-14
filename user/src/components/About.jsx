import { useEffect, useRef, useState } from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill, BsLightningChargeFill } from 'react-icons/bs';
import { FaLinkedin, FaRocket, FaUsers, FaBrain } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';

function useInView(threshold = 0.2) {
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

const highlights = [
  { icon: <BsLightningChargeFill className="text-yellow-400" />, label: 'Fast Learner' },
  { icon: <HiCode className="text-indigo-400 text-lg" />, label: 'Detail Oriented' },
  { icon: <FaUsers className="text-purple-400" />, label: 'Team Player' },
  { icon: <FaBrain className="text-pink-400" />, label: 'Problem Solver' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-24 mesh-bg relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-code text-indigo-400 text-sm tracking-widest uppercase">Get to know me</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Code Card */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <div className="gradient-border rounded-2xl p-8 glass">
                {/* Window dots */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 font-code text-xs text-slate-500">about_me.js</span>
                </div>
                <div className="space-y-3 font-code text-sm">
                  <div><span className="text-purple-400">const</span> <span className="text-indigo-300">developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{'{'}</span></div>
                  <div className="pl-6"><span className="text-green-400">name</span><span className="text-white">:</span> <span className="text-orange-300">"Burra Venkatesh"</span><span className="text-white">,</span></div>
                  <div className="pl-6"><span className="text-green-400">role</span><span className="text-white">:</span> <span className="text-orange-300">"Full-Stack Developer"</span><span className="text-white">,</span></div>
                  <div className="pl-6"><span className="text-green-400">experience</span><span className="text-white">:</span> <span className="text-orange-300">"1+ year"</span><span className="text-white">,</span></div>
                  <div className="pl-6"><span className="text-green-400">stack</span><span className="text-white">:</span> <span className="text-yellow-300">["MERN", "Next.js", "PostgreSQL"]</span><span className="text-white">,</span></div>
                  <div className="pl-6"><span className="text-green-400">passion</span><span className="text-white">:</span> <span className="text-orange-300">"Building scalable apps"</span><span className="text-white">,</span></div>
                  <div className="pl-6"><span className="text-green-400">available</span><span className="text-white">:</span> <span className="text-green-400">true</span></div>
                  <div><span className="text-yellow-300">{'}'}</span></div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 border border-indigo-500/20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <FaRocket className="text-indigo-400 text-lg" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">3 Companies</div>
                    <div className="text-slate-500 text-xs">Real-world experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Crafting digital experiences with{' '}
              <span className="gradient-text">clean code</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              I'm a Full-Stack Developer with <span className="text-indigo-400 font-semibold">1+ year of hands-on experience</span> building
              responsive web applications and scalable backend APIs using the MERN stack.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I've worked across <span className="text-purple-400 font-semibold">3 companies</span> — from building complete e-commerce platforms
              to developing production-level admin panels and static business websites. I'm passionate about
              writing clean, maintainable code and delivering pixel-perfect interfaces.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map(item => (
                <div key={item.label} className="flex items-center gap-3 glass rounded-lg p-3 border border-white/5">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4">
              <a href="mailto:burravenkatesh284@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                <MdEmail className="text-indigo-400 text-base" />
                burravenkatesh284@gmail.com
              </a>
              <a href="tel:9676007156"
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                <BsTelephoneFill className="text-indigo-400 text-sm" />
                9676007156
              </a>
              <a href="https://linkedin.com/in/burravenkatesh" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                <FaLinkedin className="text-blue-400 text-base" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
