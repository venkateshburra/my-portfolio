import { useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaShoppingCart, FaChartBar, FaFilm, FaTwitter } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { HiCheckCircle } from 'react-icons/hi';

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

const projects = [
  {
    title: 'Kings Aura',
    subtitle: 'E-Commerce Web Application',
    description: 'Complete e-commerce frontend application built from scratch with modern state management, product listing, cart, wishlist, authentication flow, checkout, and order management.',
    tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs'],
    link: 'https://thekingsaura.com',
    color: 'from-indigo-500 to-purple-600',
    icon: <FaShoppingCart className="text-white text-2xl" />,
    features: [
      'Product listing & search',
      'Cart & wishlist management',
      'User authentication',
      'Checkout & order tracking',
      'Admin panel integration',
    ],
  },
  {
    title: 'BuildNivas',
    subtitle: 'Admin & Vendor Panel',
    description: 'Production-level Admin and Vendor Panel application with new feature implementation, UI fixes, and improved responsiveness. Integrated REST APIs and optimized frontend workflows.',
    tech: ['React.js', 'REST APIs', 'Responsive Design'],
    color: 'from-purple-500 to-pink-600',
    icon: <FaChartBar className="text-white text-2xl" />,
    features: [
      'Feature implementation',
      'UI bug fixes',
      'API integration',
      'Performance optimization',
      'Team collaboration',
    ],
  },
  {
    title: 'Namaha VFX',
    subtitle: 'Static Business Website',
    description: 'Modern responsive static website developed from scratch with clean, user-friendly interfaces optimized for multiple devices. Built with reusable components and maintainable code structure.',
    tech: ['React.js', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://namahavfx.com',
    color: 'from-pink-500 to-orange-500',
    icon: <FaFilm className="text-white text-2xl" />,
    features: [
      'Responsive design',
      'Reusable components',
      'Optimized layouts',
      'Clean UI/UX',
      'Fast loading',
    ],
  },
  {
    title: 'Twitter Clone',
    subtitle: 'Full Stack Web Application',
    description: 'Full-stack Twitter clone with JWT authentication, user registration/login, tweet creation, and feed display. Built with responsive UI and efficient data loading.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'React Query'],
    link: 'https://twitter-clone-ocp4.onrender.com',
    color: 'from-blue-500 to-cyan-500',
    icon: <FaTwitter className="text-white text-2xl" />,
    features: [
      'JWT authentication',
      'Tweet CRUD operations',
      'User profiles',
      'Real-time feed',
      'Responsive UI',
    ],
  },
];

function ProjectCard({ project, index, inView }) {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div
      className={`gradient-border rounded-2xl glass overflow-hidden card-hover transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Header */}
      <div className={`p-6 bg-gradient-to-r ${project.color}`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              {project.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-white/80 text-sm">{project.subtitle}</p>
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              title="View Live"
            >
              <FaExternalLinkAlt className="text-sm" />
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(tech => (
            <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-semibold">
              {tech}
            </span>
          ))}
        </div>

        {/* Features Toggle */}
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="flex items-center gap-1 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
        >
          {showFeatures ? <MdExpandLess className="text-lg" /> : <MdExpandMore className="text-lg" />}
          {showFeatures ? 'Hide' : 'Show'} Features
        </button>

        {/* Features List */}
        <div className={`overflow-hidden transition-all duration-300 ${showFeatures ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                <HiCheckCircle className="text-indigo-400 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="py-24 bg-[#0d0d18] relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-code text-indigo-400 text-sm tracking-widest uppercase">What I've built</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-slate-400 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/burravenkatesh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-border text-white font-semibold hover:bg-white/5 transition-all duration-300"
          >
            <FaGithub className="text-lg" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
