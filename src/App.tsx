import { useState } from 'react';
import { ProjectCard } from './components/ProjectCard';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Badge } from './components/ui/badge';
import { Github, Linkedin, Mail, Code2, Database, Wrench, Terminal, Menu, X, Trophy, Award, Star, Cloud, Cpu } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: 'Classy Branded Crew Backend',
      description: 'A comprehensive backend API system for managing branded crew members, roles, and organizational structure with secure authentication and scalable database architecture.',
      techStack: ['Node.js', 'JavaScript', 'PostgreSQL', 'MongoDB', 'REST API', 'JWT Auth'],
      keyFeatures: [
        'User authentication and authorization with JWT',
        'Crew member management and role-based access control',
        'RESTful API endpoints for crew operations',
        'Secure data storage with PostgreSQL/MongoDB',
        'Scalable architecture for enterprise use',
        'Comprehensive error handling and validation'
      ],
      githubLink: 'https://github.com/rafiraihan09/classy-branded-crew-backend',
      liveLink: ''
    },
    {
      title: 'Chatbot RAG System',
      description: 'An advanced conversational AI system utilizing Retrieval-Augmented Generation to provide intelligent responses based on a knowledge base with context-aware interactions.',
      techStack: ['Python', 'LangChain', 'OpenAI', 'Vector Database', 'FastAPI', 'RAG'],
      keyFeatures: [
        'Retrieval-Augmented Generation for accurate responses',
        'Integration with large language models',
        'Vector database for semantic search',
        'Context-aware conversation management',
        'Fast and scalable API endpoints',
        'Knowledge base management system'
      ],
      githubLink: 'https://github.com/rafiraihan09/chatbot-rag-system',
      liveLink: ''
    },
    {
      title: 'Cypheria',
      description: 'A comprehensive cryptography and security toolkit providing secure encryption, decryption, and data protection mechanisms with modern cryptographic algorithms.',
      techStack: ['Python', 'Cryptography', 'Security', 'Encryption', 'APIs', 'DevOps'],
      keyFeatures: [
        'Advanced encryption and decryption algorithms',
        'Secure key management system',
        'Data integrity verification',
        'Multi-layer security protocols',
        'Performance-optimized cryptographic operations',
        'Comprehensive security documentation'
      ],
      githubLink: 'https://github.com/rafiraihan09/Cypheria',
      liveLink: ''
    },
    {
      title: 'Team Destalista Dev',
      description: 'A collaborative development platform for team-based projects, featuring project management, code collaboration, and team communication tools for seamless teamwork.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'REST API', 'Git Integration'],
      keyFeatures: [
        'Real-time collaboration and chat',
        'Project management and task tracking',
        'Git repository integration',
        'Team member management',
        'Code review and feedback system',
        'Activity logging and analytics'
      ],
      githubLink: 'https://github.com/rafiraihan09/destalistiva_dev',
      liveLink: ''
    },
  ];

  const techStack = {
    backend: ['Python', 'Java', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'NodeJS', 'Golang', 'FastAPI'],
    database: ['PostgreSQL', 'MongoDB', 'Kafka', 'MQTT', 'Supabase'],
    tools: ['Git', 'VSCode', 'Docker', 'CI/CD Pipeline', 'OpenDSS', 'IEC61860'],
    other: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'Hugging Face', 'LangChain', 'NumPy', 'Pandas', 'ShadcnUI']
  };

  const awards = [
    {
      title: 'Hackathon Completion',
      organization: 'Alibaba Cloud',
      year: 2025,
      icon: Trophy
    },
    {
      title: 'Hackathon Completion',
      organization: 'Grab x AngelHack',
      year: 2024,
      icon: Trophy
    },
    {
      title: 'Academic Achievement',
      organization: '1st Place Game Project',
      year: 2024,
      icon: Award
    },
    {
      title: 'International Scholarship Awardee',
      organization: 'Pusat Kebudayaan Rusia',
      year: 2019,
      icon: Star
    },
    {
      title: 'Project Completion Certification',
      organization: 'Google Cloud',
      year: 2019,
      icon: Cloud
    },
    {
      title: 'Arduino Project',
      organization: 'Raspberry Pi System Development',
      year: 2018,
      icon: Cpu
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Rafi porfolio
            </h1>

            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              size="icon"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            <div className="hidden md:flex gap-1">
              <Button onClick={() => scrollToSection('about')} variant="ghost" className="text-slate-300 hover:text-blue-400">About</Button>
              <Button onClick={() => scrollToSection('tech')} variant="ghost" className="text-slate-300 hover:text-blue-400">Tech Stack</Button>
              <Button onClick={() => scrollToSection('awards')} variant="ghost" className="text-slate-300 hover:text-blue-400">Awards</Button>
              <Button onClick={() => scrollToSection('projects')} variant="ghost" className="text-slate-300 hover:text-blue-400">Projects</Button>
              <Button onClick={() => scrollToSection('contact')} variant="ghost" className="text-slate-300 hover:text-blue-400">Contact</Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-2 pb-4 border-t border-slate-700 pt-4">
              <Button onClick={() => scrollToSection('about')} variant="ghost" className="text-left justify-start text-slate-300">About</Button>
              <Button onClick={() => scrollToSection('tech')} variant="ghost" className="text-left justify-start text-slate-300">Tech Stack</Button>
              <Button onClick={() => scrollToSection('awards')} variant="ghost" className="text-left justify-start text-slate-300">Awards</Button>
              <Button onClick={() => scrollToSection('projects')} variant="ghost" className="text-left justify-start text-slate-300">Projects</Button>
              <Button onClick={() => scrollToSection('contact')} variant="ghost" className="text-left justify-start text-slate-300">Contact</Button>
            </div>
          )}
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 space-y-6">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
                Raihan Muhammad Rafi
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-slate-300">
              Software Developer & Golang Enthusiast
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Crafting scalable, high-performance backend systems and RESTful APIs with meticulous attention to clean architecture, maintainability, and elegant code design.
            </p>
          </div>

          <div className="flex gap-3 justify-center mt-10 flex-wrap">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="px-8 py-6 text-base font-semibold"
            >
              Explore My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-semibold"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-8 justify-center mt-16">
            <a href="https://github.com/rafiraihan09" target="_blank" rel="noopener noreferrer" className="group text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-blue-500/10 border border-slate-700/50 group-hover:border-blue-500/30">
                <Github size={32} />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/raihan-muhammad-rafi-09a785284/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="group text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-blue-500/10 border border-slate-700/50 group-hover:border-blue-500/30">
                <Linkedin size={32} />
              </div>
            </a>
            <a href="mailto:raihanrafi065@gmail.com" className="group text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-blue-500/10 border border-slate-700/50 group-hover:border-blue-500/30">
                <Mail size={32} />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>
          <Card className="bg-slate-800/80 border-slate-700/50">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-75"></div>
                    <img
                      src="/rafi.jpeg"
                      alt="Raihan Muhammad Rafi"
                      className="relative w-64 h-64 rounded-xl object-cover shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-6">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    I’m a Junior FullStack Developer from Indonesia with a strong focus on backend engineering using Golang. I enjoy building reliable RESTful services, structuring scalable databases, and implementing clean architecture principles that support long term growth.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                   My ambition is to grow into a backend engineer who designs systems that are not only efficient but also resilient and scalable under heavy workloads. I’m passionate about understanding how systems work under the hood and continuously improving performance and reliability.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    I take pride in writing readable, well structured code and adapting quickly to new tools and technologies to deliver meaningful, production-ready solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="tech" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/60 border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Code2 className="text-blue-400" size={24} />
                  </div>
                  <CardTitle>Backend</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Database className="text-blue-400" size={24} />
                  </div>
                  <CardTitle>Database</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.database.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Wrench className="text-blue-400" size={24} />
                  </div>
                  <CardTitle>Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.tools.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Terminal className="text-blue-400" size={24} />
                  </div>
                  <CardTitle>Other</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.other.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="awards" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Honors & Awards</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <Card key={index} className="bg-slate-800/60 border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-500/10 flex-shrink-0">
                        <IconComponent className="text-blue-400" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{award.title}</h3>
                        <p className="text-slate-300 font-medium mb-2">{award.organization}</p>
                        <p className="text-sm text-slate-400 font-semibold bg-slate-700/30 w-fit px-3 py-1 rounded-full">
                          {award.year}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>  
      </section>

      <section id="experience" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>

          <Card className="bg-slate-800/60 border-slate-700/50">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-4 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-40"></div>
                    <img
                      src="/pln.jpg"
                      alt="PLN Icon Plus"
                      className="relative w-48 h-48 rounded-xl object-cover shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">PLN Icon Plus</h3>
                    <p className="text-lg font-semibold text-blue-400 mb-1">SCADA Project</p>
                    <p className="text-slate-400 text-sm">Power & Energy Systems Division</p>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed">
                    Worked on a critical SCADA (Supervisory Control and Data Acquisition) project at PLN Icon Plus, focusing on real-time monitoring and control systems for power distribution networks. Collaborated with engineering teams to develop and optimize system performance, ensuring reliable and efficient power grid operations.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="secondary">SCADA</Badge>
                    <Badge variant="secondary">Power Systems</Badge>
                    <Badge variant="secondary">Control Systems</Badge>
                    <Badge variant="secondary">Real-time Monitoring</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            <p className="text-slate-400 text-lg">
              Have a question or want to collaborate? I'd love to hear from you. Reach out through any of these channels.
            </p>
          </div>

          <Card className="bg-slate-800/60 border-slate-700/50 mb-8">
            <CardContent className="pt-8">
              <div className="space-y-4">
                <a href="mailto:your.email@example.com" className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/30 transition-colors group">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-slate-300 font-medium group-hover:text-blue-400 transition-colors">your.email@example.com</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/30 transition-colors group">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20">
                    <Linkedin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">LinkedIn</p>
                    <p className="text-slate-300 font-medium group-hover:text-blue-400 transition-colors">linkedin.com/in/yourusername</p>
                  </div>
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/30 transition-colors group">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20">
                    <Github size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">GitHub</p>
                    <p className="text-slate-300 font-medium group-hover:text-blue-400 transition-colors">github.com/yourusername</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/60 border-slate-700/50">
            <CardContent className="pt-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="bg-slate-900/50 border-slate-700/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="bg-slate-900/50 border-slate-700/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me more about your project or inquiry..."
                    className="bg-slate-900/50 border-slate-700/50 min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-semibold">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-800/50 bg-slate-950/50">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Raihan Muhammad Rafi. All rights reserved.</p>
          <p className="mt-2">Designed with passion. Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
