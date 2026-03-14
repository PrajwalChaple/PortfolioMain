import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/" className="text-cyan-400 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconWrapper = service.icon;

  return (
    <div className="py-12 md:py-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors mb-12 font-mono text-sm group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        cd .. / home
      </Link>
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-20 relative">
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 shadow-[0_0_50px_rgba(34,211,238,0.15)] text-cyan-400 relative z-10">
          <IconWrapper size={48} className="md:w-16 md:h-16" strokeWidth={1.5} />
        </div>
        <div className="z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-4">
            <span>&lt;service /&gt;</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-white">{service.title}</h1>
          <p className="text-base md:text-xl text-zinc-300 leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>
        {/* Glow behind text */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      </div>

      {/* Deliverables Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 border-b border-zinc-800 pb-4 text-zinc-100">
          What I Deliver
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-cyan-400/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-400/10 transition-all">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-100">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack & CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center bg-zinc-900/40 p-6 md:p-10 rounded-3xl border border-zinc-800">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-zinc-100">Technologies I Use</h2>
          <div className="flex flex-wrap gap-3">
            {service.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-zinc-950 text-zinc-300 text-sm rounded-lg font-mono border border-zinc-800 flex items-center gap-2"
              >
                <CheckCircle2 size={14} className="text-cyan-400" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
          <h3 className="text-2xl font-bold mb-4 text-zinc-100">Let's Build Together</h3>
          <p className="text-zinc-400 mb-8 max-w-sm mx-auto">
            Ready to bring your ideas to life? Send me an email and let's discuss how I can help you with your next project.
          </p>
          <a   
            href={`https://mail.google.com/mail/?view=cm&to=prajwalchaple14@gmail.com&su=${encodeURIComponent('Inquiry regarding ' + service.title)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 text-zinc-950 font-bold hover:bg-cyan-300 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
