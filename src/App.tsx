import { useState } from 'react';
import { ProjectCard } from './components/ProjectCard';
import { Github, Linkedin, Mail, Code2, Database, Wrench, Terminal, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: 'Sample Project 1',
      description: 'A scalable REST API built with Golang and PostgreSQL for managing user data and authentication.',
      techStack: ['Golang', 'PostgreSQL', 'Docker', 'REST API'],
      keyFeatures: [
        'JWT authentication and authorization',
        'CRUD operations with PostgreSQL',
        'Docker containerization for easy deployment',
        'Clean architecture pattern'
      ],
      githubLink: 'https://github.com/yourusername/project1',
      liveLink: ''
    },
  ];

  const techStack = {
    backend: ['Golang', 'REST API'],
    database: ['PostgreSQL', 'MySQL'],
    tools: ['Git', 'Docker', 'Linux'],
    other: ['JavaScript']
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              RMR
            </h1>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('tech')} className="hover:text-blue-400 transition-colors">Tech Stack</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('tech')} className="text-left hover:text-blue-400 transition-colors">Tech Stack</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-400 transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Raihan Muhammad Rafi
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-3">
              Backend Developer | Golang Enthusiast
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Building scalable backend systems and RESTful APIs with a focus on clean architecture and performance optimization.
            </p>
          </div>

          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg font-semibold transition-all hover:border-blue-500"
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 justify-center mt-12">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a Junior FullStack Developer based in Indonesia, specializing in backend development with Golang.
              I have hands-on experience building robust REST APIs, working with relational databases, and deploying
              applications using modern DevOps practices.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              My goal is to become a senior backend engineer who builds high-performance, scalable systems that solve
              real-world problems. I'm constantly learning new technologies and best practices to improve my craft.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              What sets me apart is my commitment to writing clean, maintainable code and my ability to quickly adapt
              to new technologies. I believe in continuous learning and always strive to deliver quality solutions that
              make an impact.
            </p>
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-blue-400" size={28} />
                <h3 className="text-2xl font-bold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.backend.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-blue-400" size={28} />
                <h3 className="text-2xl font-bold">Database</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.database.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="text-blue-400" size={28} />
                <h3 className="text-2xl font-bold">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.tools.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="text-blue-400" size={28} />
                <h3 className="text-2xl font-bold">Other</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.other.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              More projects coming soon. Check my{' '}
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                GitHub
              </a>{' '}
              for the latest work.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 text-center">
            <p className="text-slate-400 text-lg">
              Building projects and gaining experience. Open to opportunities!
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-8">
            <div className="flex flex-col gap-4">
              <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Mail size={24} />
                <span>your.email@example.com</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
                <span>linkedin.com/in/yourusername</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Github size={24} />
                <span>github.com/yourusername</span>
              </a>
            </div>
          </div>

          <form className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/50"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Raihan Muhammad Rafi. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
