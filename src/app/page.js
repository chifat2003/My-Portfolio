'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const skills = [
    'React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git'
  ];

  const projects = [
    {
      title: 'Kin Keeper',
      description: 'A family relationship management app to track and organize family connections.',
      fullDescription: 'Kin Keeper is a comprehensive family relationship management application designed to help users organize, track, and maintain their family connections. The app provides an intuitive interface for managing family trees and relationships.',
      image: '/kin-keeper.png',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB'],
      features: ['Family tree visualization', 'Relationship tracking', 'Photo gallery', 'Event management'],
      link: 'https://kin-keeper.vercel.app',
      github: 'https://github.com/chifat2003/kin-keeper'
    },
    {
      title: 'Qurbanihat',
      description: 'An Islamic charity platform for managing Qurbani donations and distributions.',
      fullDescription: 'Qurbanihat is a specialized platform designed to streamline the process of Qurbani (animal sacrifice) donations during Islamic holidays. It connects donors with recipients and manages the entire donation lifecycle.',
      image: '/qurbanihat.png',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      features: ['Donation management', 'Recipient tracking', 'Payment integration', 'Distribution logistics'],
      link: 'https://qurbanihat.vercel.app',
      github: 'https://github.com/chifat2003/qurbanihat'
    },
    {
      title: 'GitHub Issue Tracker',
      description: 'A powerful issue tracking system for managing GitHub repositories and issues.',
      fullDescription: 'GitHub Issue Tracker is a comprehensive tool for tracking, organizing, and managing GitHub issues. It provides advanced filtering, sorting, and reporting capabilities to help teams stay organized.',
      image: '/github-issue-tracker.png',
      tech: ['React', 'GitHub API', 'Tailwind CSS', 'TypeScript'],
      features: ['Issue filtering', 'Real-time updates', 'Advanced search', 'Analytics dashboard'],
      link: 'https://github-issue-tracker.vercel.app',
      github: 'https://github.com/chifat2003/github-issue-tracker'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md z-50 border-b border-purple-200/50 dark:border-purple-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Nadim Mahmud Chifat
          </h1>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium">About</a>
            <a href="#skills" className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium">Skills</a>
            <a href="#projects" className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium">Projects</a>
            <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold shadow-lg">
                Open to Work
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Full Stack Web Developer
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed">
              Crafting beautiful, performant web experiences with <span className="font-semibold text-purple-600 dark:text-purple-400">React</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">Next.js</span>, and modern technologies
            </p>
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <a href="/cv.pdf" download className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold">
                Download CV
                <span className="inline-block ml-2 group-hover:translate-y-1 transition-transform">↓</span>
              </a>
              <a href="#contact" className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-xl hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-slate-900 transition-all duration-300 font-semibold">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative">
                <img
                  src="/profile.png"
                  alt="Nadim Mahmud Chifat"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mt-2">Who I Am</h2>
          </div>
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-200/50 dark:border-purple-800/50">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a passionate full-stack web developer with expertise in building scalable and performant web applications.
              I specialize in modern JavaScript frameworks and love creating seamless user experiences.
              With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean,
              maintainable code. Let's build something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 dark:from-purple-950 dark:via-indigo-950 dark:to-purple-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-300 font-semibold text-sm uppercase tracking-widest">My Expertise</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-3">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:bg-slate-800/70 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill === 'React' && '⚛️'}
                    {skill === 'Next.js' && '▲'}
                    {skill === 'JavaScript' && '🟨'}
                    {skill === 'TypeScript' && '🔷'}
                    {skill === 'Tailwind CSS' && '🎨'}
                    {skill === 'Node.js' && '🟢'}
                    {skill === 'Express' && '🚂'}
                    {skill === 'MongoDB' && '🍃'}
                    {skill === 'PostgreSQL' && '🐘'}
                    {skill === 'Git' && '📦'}
                  </div>
                  <h3 className="text-white font-bold text-base md:text-lg">{skill}</h3>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mt-2">Featured Projects</h2>
          </div>

          {projects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="text-8xl mb-6">📂</div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">No Projects Available</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md text-center">
                Projects are currently being developed. Check back soon for exciting new work!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  style={{ animationDelay: `${index * 150}ms` }}
                  className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-200/50 dark:border-purple-800/50 hover:scale-105 hover:-translate-y-2 animate-fade-in"
                >
                  <div className="h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-6xl">🚀</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:gap-2 transition-all group"
                  >
                    View Details
                    <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedProject(null)}>
          <div className="relative bg-white dark:bg-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              <span className="text-2xl text-slate-600 dark:text-slate-300">×</span>
            </button>

            <div className="p-8">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                {selectedProject.image ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-8xl">🚀</span>
                )}
              </div>

              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{selectedProject.title}</h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Key Features</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-600 dark:text-slate-300">
                      <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-5xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-purple-100 mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a href="mailto:nmchifat2004@gmail.com" className="px-6 py-3 bg-white text-purple-600 rounded-xl hover:scale-110 transition-all duration-300 font-semibold shadow-lg">
                📧 Email
              </a>
              <a href="https://wa.me/8801518918681" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-purple-600 rounded-xl hover:scale-110 transition-all duration-300 font-semibold shadow-lg">
                �  WhatsApp
              </a>
              <a href="https://github.com/chifat2003" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-purple-600 rounded-xl hover:scale-110 transition-all duration-300 font-semibold shadow-lg">
                � GitHub
              </a>
              <a href="https://www.linkedin.com/in/nadim-mahmud-chifat/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-purple-600 rounded-xl hover:scale-110 transition-all duration-300 font-semibold shadow-lg">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-purple-200/50 dark:border-purple-800/50">
        <p className="text-center text-slate-600 dark:text-slate-400">
          © 2026 Nadim Mahmud Chifat. Built with 💜 using Next.js & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
