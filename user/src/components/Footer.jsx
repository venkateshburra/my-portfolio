import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiReact, SiTailwindcss } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080810] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
              BV
            </div>
            <div>
              <div className="text-white font-bold text-sm">Burra Venkatesh</div>
              <div className="text-slate-500 text-xs">Full-Stack Developer</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 justify-center">
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-500 hover:text-indigo-400 text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/burravenkatesh"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/burravenkatesh"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:burravenkatesh284@gmail.com"
              className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300"
              aria-label="Email"
            >
              <MdEmail className="text-lg" />
            </a>
          </div>
        </div>

        <div className="section-divider mt-8 mb-6" />

        <div className="text-center text-slate-600 text-sm flex items-center justify-center gap-1.5 flex-wrap">
          <span>© {year} Burra Venkatesh. Built with</span>
          <SiReact className="text-cyan-400" />
          <span className="text-cyan-400">React.js</span>
          <span>&</span>
          <SiTailwindcss className="text-teal-400" />
          <span className="text-teal-400">Tailwind CSS</span>
          <span>— Designed with</span>
          <FaHeart className="text-pink-500" />
        </div>
      </div>
    </footer>
  );
}
