import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Code2, AlertTriangle, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-cyan-400 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors mb-8 font-mono text-sm">
        <ArrowLeft size={16} />
        cd ..
      </Link>
      
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
      <p className="text-cyan-400 font-mono mb-8">{project.category}</p>
      
      <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-10 md:mb-16 shadow-2xl">
        <div className="aspect-video md:aspect-[21/9] relative">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-contain object-center bg-zinc-950/80 p-4"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-100">Overview</h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              {project.description || `Detailed case study for ${project.title} goes here. This project demonstrates advanced capabilities in building scalable, modern web applications.`}
            </p>
          </section>

          {project.features && (
            <section>
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="text-cyan-400" size={24} />
                <h2 className="text-2xl font-bold text-zinc-100">Key Features</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.challenges && (
            <section>
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="text-cyan-400" size={24} />
                <h2 className="text-2xl font-bold text-zinc-100">Challenges Faced</h2>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 border-l-4 border-l-cyan-400">
                <p className="text-zinc-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </section>
          )}
        </div>

        <div className="space-y-8">
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 sticky top-24">
            {project.technologies && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="text-cyan-400" size={20} />
                  <h3 className="text-lg font-bold text-zinc-100">Technologies Used</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm rounded-md font-mono border border-zinc-700 hover:border-cyan-400/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 text-zinc-950 font-semibold hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20"
              >
                <ExternalLink size={18} /> Visit Live Site
              </a>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-800 text-zinc-100 font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700"
                >
                  <Github size={18} /> View Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
