import { GraduationCap, BookOpen, MapPin, User, ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono mb-6">
            <User size={14} />
            <span>&lt;about_me /&gt;</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Who I Am
          </h2>
          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            I am a passionate Full-Stack Web Developer and an IT student currently deeply immersed in building scalable applications and exploring AI integrations. I love turning complex problems into elegant, user-friendly solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-400/50 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-400/10 transition-all">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-zinc-50">Education</h3>
            <p className="text-zinc-400 leading-relaxed">
              Yeshwantrao Chavan College of Engineering (YCCE)
            </p>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-400/50 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-400/10 transition-all">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-zinc-50">Study</h3>
            <p className="text-zinc-400 leading-relaxed">
              2nd Year, Information Technology Branch
            </p>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-400/50 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-400/10 transition-all">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-zinc-50">Location</h3>
            <p className="text-zinc-400 leading-relaxed">
              Nagpur, Maharashtra, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
