import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { HiArrowDown } from 'react-icons/hi';

const roles = [
  'Full-Stack Developer',
  'React.js Developer',
  'MERN Stack Developer',
  'Node.js Developer',
];

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 10 + 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-indigo-500/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: '-10px',
            animation: `moveParticle ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center mesh-bg overflow-hidden"
    >
      <Particles />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-glow" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 animate-slide-up delay-100">
            Hi, I'm{' '}
            <span className="gradient-text block sm:inline">
              Burra Venkatesh
            </span>
          </h1>

          {/* Typing role */}
          <div className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6 h-10 animate-slide-up delay-200">
            <span className="text-indigo-400">&lt;</span>
            <span className="font-code">{displayed}</span>
            <span className="cursor-blink text-indigo-400">|</span>
            <span className="text-indigo-400">/&gt;</span>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-slide-up delay-300">
            Full-Stack Developer with <span className="text-indigo-400 font-semibold">1+ year</span> of experience
            building responsive web apps and scalable backend APIs using the{' '}
            <span className="text-purple-400 font-semibold">MERN stack</span>.
            Passionate about crafting high-performance, user-friendly solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up delay-400">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/30"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl gradient-border text-white font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-slide-up delay-500">
            <a href="https://github.com/burravenkatesh" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all duration-300 text-lg">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/burravenkatesh" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-300 text-lg">
              <FaLinkedin />
            </a>
            <a href="mailto:burravenkatesh284@gmail.com"
              className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all duration-300 text-lg">
              <MdEmail />
            </a>
            <a href="tel:9676007156"
              className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-500/40 transition-all duration-300 text-base">
              <BsTelephoneFill />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 justify-center lg:justify-start animate-slide-up delay-500">
            {[
              { value: '1+', label: 'Years Exp.' },
              { value: '3+', label: 'Companies' },
              { value: '4+', label: 'Projects' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black gradient-text">{stat.value}</div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Avatar Card */}
        <div className="flex-shrink-0 animate-slide-right delay-200">
          <div className="relative float-animation">
            {/* Outer ring */}
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pulse-glow">
              <div className="w-full h-full rounded-full bg-[#0f0f1a] flex items-center justify-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-indigo-900/60 to-purple-900/60 flex flex-col items-center justify-center border border-indigo-500/20">
                  <div className="text-7xl font-black gradient-text">BV</div>
                  <div className="text-slate-400 text-sm mt-2 font-code">Full-Stack Dev</div>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <div className="absolute -top-4 -right-4 px-3 py-1.5 glass rounded-lg text-xs font-semibold text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5 animate-fade-in delay-600">
              <FaReact className="text-cyan-400 text-sm" /> React.js
            </div>
            <div className="absolute -bottom-4 -left-4 px-3 py-1.5 glass rounded-lg text-xs font-semibold text-green-300 border border-green-500/20 flex items-center gap-1.5 animate-fade-in delay-500">
              <FaNodeJs className="text-green-400 text-sm" /> Node.js
            </div>
            <div className="absolute top-1/2 -right-8 px-3 py-1.5 glass rounded-lg text-xs font-semibold text-green-300 border border-green-500/20 flex items-center gap-1.5 animate-fade-in delay-400">
              <SiMongodb className="text-green-400 text-sm" /> MongoDB
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs animate-fade-in delay-600">
        <span>Scroll down</span>
        <HiArrowDown className="text-indigo-400 text-lg" style={{ animation: 'float 1.5s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
