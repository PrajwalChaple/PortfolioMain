export default function ServicesList() {
  return (
    <section id="services-intro" className="py-20 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl space-y-8 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono">
          <span>&lt;quality_guaranteed /&gt;</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          What Can I Do For<br />Your Needs
        </h2>
        <p className="text-zinc-400 md:text-lg max-w-md leading-relaxed font-mono mt-4">
          // It is easier to entrust the work to the experts because they are able to provide the best results with reliable quality.
        </p>
        
        <div className="flex gap-12 pt-8 justify-center w-full">
          <div className="border-l-2 border-cyan-400 pl-4 text-left">
            <h3 className="text-zinc-50 text-3xl font-bold mb-1 font-mono">10+</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">Projects<br/>Completed</p>
          </div>
          <div className="border-l-2 border-cyan-400 pl-4 text-left">
            <h3 className="text-zinc-50 text-3xl font-bold mb-1 font-mono">5+</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">AI Tools<br/>Leveraged</p>
          </div>
        </div>
      </div>
    </section>
  );
}
