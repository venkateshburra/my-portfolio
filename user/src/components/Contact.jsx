import { useEffect, useRef, useState } from 'react';
import { MdEmail, MdSend, MdCheckCircle } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiChevronRight } from 'react-icons/hi';
import { RiMapPinLine } from 'react-icons/ri';

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

const contactInfo = [
  {
    icon: <MdEmail className="text-white text-xl" />,
    label: 'Email',
    value: 'burravenkatesh284@gmail.com',
    href: 'mailto:burravenkatesh284@gmail.com',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: <BsTelephoneFill className="text-white text-lg" />,
    label: 'Phone',
    value: '+91 9676007156',
    href: 'tel:9676007156',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: <FaLinkedin className="text-white text-xl" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/burravenkatesh',
    href: 'https://linkedin.com/in/burravenkatesh',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: <FaGithub className="text-white text-xl" />,
    label: 'GitHub',
    value: 'github.com/burravenkatesh',
    href: 'https://github.com/burravenkatesh',
    color: 'from-slate-600 to-slate-800',
  },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:burravenkatesh284@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d18] relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-code text-indigo-400 text-sm tracking-widest uppercase">Let's work together</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="text-2xl font-bold text-white mb-8">
              Let's <span className="gradient-text">connect</span>
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group card-hover"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">{info.label}</div>
                    <div className="text-white font-medium mt-0.5 group-hover:text-indigo-400 transition-colors text-sm truncate">
                      {info.value}
                    </div>
                  </div>
                  <HiChevronRight className="text-slate-600 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="mt-8 p-4 glass rounded-xl border border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 pulse-glow flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold text-sm">Available for Work</div>
                  <div className="text-slate-500 text-xs mt-0.5">Open to full-time, freelance & contract roles</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <form onSubmit={handleSubmit} className="gradient-border rounded-2xl p-8 glass">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MdEmail className="text-indigo-400" />
                Send a Message
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all duration-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all duration-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all duration-300 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    submitted
                      ? 'bg-green-500 scale-95'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-indigo-500/25'
                  }`}
                >
                  {submitted ? (
                    <><MdCheckCircle className="text-lg" /> Message Sent!</>
                  ) : (
                    <><MdSend className="text-lg" /> Send Message</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
