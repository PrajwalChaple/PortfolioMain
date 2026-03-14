import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Instagram, Linkedin, Mail, Terminal, Code2, Cpu } from 'lucide-react';

const codeLines = [
  {
    line: 1,
    tokens: [
      { text: "const ", color: "text-pink-400" },
      { text: "developer ", color: "text-blue-400" },
      { text: "= ", color: "text-cyan-400" },
      { text: "{", color: "text-yellow-300" }
    ]
  },
  {
    line: 2,
    tokens: [
      { text: "  name", color: "text-zinc-50" },
      { text: ": ", color: "text-zinc-50" },
      { text: "'Prajwal Chaple'", color: "text-green-400" },
      { text: ",", color: "text-zinc-50" }
    ]
  },
  {
    line: 3,
    tokens: [
      { text: "  role", color: "text-zinc-50" },
      { text: ": ", color: "text-zinc-50" },
      { text: "'Full-Stack Web Dev'", color: "text-green-400" },
      { text: ",", color: "text-zinc-50" }
    ]
  },
  {
    line: 4,
    tokens: [
      { text: "  education", color: "text-zinc-50" },
      { text: ": ", color: "text-zinc-50" },
      { text: "'B.Tech IT'", color: "text-green-400" },
      { text: ",", color: "text-zinc-50" }
    ]
  },
  {
    line: 5,
    tokens: [
      { text: "  skills", color: "text-zinc-50" },
      { text: ": ", color: "text-zinc-50" },
      { text: "[", color: "text-purple-400" }
    ]
  },
  {
    line: 6,
    tokens: [
      { text: "    'React'", color: "text-green-400" },
      { text: ", ", color: "text-zinc-50" },
      { text: "'TypeScript'", color: "text-green-400" },
      { text: ",", color: "text-zinc-50" }
    ]
  },
  {
    line: 7,
    tokens: [
      { text: "    'Node.js'", color: "text-green-400" },
      { text: ", ", color: "text-zinc-50" },
      { text: "'Firebase'", color: "text-green-400" }
    ]
  },
  {
    line: 8,
    tokens: [
      { text: "  ]", color: "text-purple-400" },
      { text: ",", color: "text-zinc-50" }
    ]
  },
  {
    line: 9,
    tokens: [
      { text: "  isCoding", color: "text-zinc-50" },
      { text: ": ", color: "text-zinc-50" },
      { text: "true", color: "text-orange-400" }
    ]
  },
  {
    line: 10,
    tokens: [
      { text: "}", color: "text-yellow-300" },
      { text: ";", color: "text-zinc-50" }
    ]
  }
];

const totalChars = codeLines.reduce((acc, line) => acc + line.tokens.reduce((acc2, token) => acc2 + token.text.length, 0), 0);

interface HeroProps {
  hasLoaded?: boolean;
}

export default function Hero({ hasLoaded = true }: HeroProps) {
  const [displayedChars, setDisplayedChars] = useState<number>(0);

  useEffect(() => {
    // Only start typing once the loading screen is fully gone and section is revealed
    if (!hasLoaded) return;

    if (displayedChars < totalChars) {
      const timeout = setTimeout(() => {
        setDisplayedChars(prev => prev + 1);
      }, Math.random() * 10 + 5); // Random natural typing speed between 5-15ms per char

      return () => clearTimeout(timeout);
    }
  }, [displayedChars, hasLoaded]);

  return (
    <section id="home" className="py-8 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
      <div className="flex-1 space-y-6 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono mb-4">
          <Terminal size={14} />
          <span>Hello World</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-zinc-50 tracking-tight">
          Prajwal Chaple
        </h1>
        <h2 className="text-2xl md:text-3xl text-zinc-400 font-light flex items-center gap-3">
          <span className="text-cyan-400">&gt;</span> Full-Stack Developer
        </h2>
        <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed pt-4 font-mono">
          // B.Tech IT student turning coffee into code.
          <br />
          // Building scalable web apps & integrating AI.
        </p>
        
        <div className="pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="#portfolio" className="px-6 py-3 bg-cyan-400 text-zinc-950 font-medium rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-2">
            <Code2 size={18} />
            View Projects
          </a>
          <a href="https://github.com/PrajwalChaple" target="_blank" rel="noreferrer" className="px-6 py-3 bg-zinc-900 text-zinc-50 font-medium rounded-lg border border-zinc-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors flex items-center gap-2">
            <Github size={18} />
            GitHub
          </a>
        </div>

        {/* Mobile Social Links */}
        <div className="pt-4 flex gap-5 lg:hidden">
          <a href="https://github.com/PrajwalChaple" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/prajwalchaple" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/prajwal__14_" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
          <a href="https://mail.google.com/mail/?view=cm&to=prajwalchaple14@gmail.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center w-full max-w-md lg:max-w-none">
        {/* Tech Graphic Element */}
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
          
          {/* Background Glow */}
          <div className="absolute w-3/4 h-3/4 bg-cyan-400 rounded-full opacity-5 blur-[100px]"></div>
          
          {/* Code Editor Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-xl overflow-hidden shadow-2xl z-10"
          >
            {/* Editor Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-4 text-xs font-mono text-zinc-500 flex items-center gap-2">
                <Cpu size={12} /> developer.ts
              </div>
            </div>
            
            {/* Editor Content */}
            <div className="p-4 md:p-6 font-mono text-xs md:text-base leading-relaxed overflow-x-auto min-h-[280px] md:min-h-[340px]">
              {(() => {
                let charCount = 0;
                let isCursorRendered = false;

                return codeLines.map((lineDef) => {
                  let lineHasVisibleContent = false;
                  let lineFinished = true;
                  
                  const lineTokens = lineDef.tokens.map((token, i) => {
                    const tokenStart = charCount;
                    const tokenEnd = charCount + token.text.length;
                    charCount = tokenEnd;
                    
                    if (displayedChars >= tokenEnd) {
                      lineHasVisibleContent = true;
                      return <span key={i} className={token.color}>{token.text}</span>;
                    } else if (displayedChars > tokenStart) {
                      lineHasVisibleContent = true;
                      lineFinished = false;
                      return <span key={i} className={token.color}>{token.text.substring(0, displayedChars - tokenStart)}</span>;
                    } else {
                      lineFinished = false;
                      return null;
                    }
                  });

                  // We need to render the line if it has content, OR if it's the current line being typed.
                  const isCurrentLine = !lineFinished && !isCursorRendered;
                  if (isCurrentLine) isCursorRendered = true;

                  if (lineHasVisibleContent || isCurrentLine) {
                    return (
                      <div key={lineDef.line} className="flex">
                        <span className="text-zinc-600 select-none pr-4 text-right w-8">{lineDef.line}</span>
                        <span className="whitespace-pre">{lineTokens}</span>
                        {isCurrentLine && <span className="text-zinc-50 animate-pulse">_</span>}
                      </div>
                    );
                  }
                  return null;
                });
              })()}
              
              {/* If typing is completely done, put cursor at the end of the last line or on a new line */}
              {displayedChars >= totalChars && (
                <div className="flex mt-2">
                  <span className="text-zinc-600 select-none pr-4 text-right w-8">11</span>
                  <span className="text-zinc-50 animate-pulse">_</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Social Links - Vertical */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 translate-x-12">
          <a href="https://github.com/PrajwalChaple" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/prajwalchaple" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/prajwal__14_" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
          <a href="https://mail.google.com/mail/?view=cm&to=prajwalchaple14@gmail.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
          <div className="w-[1px] h-24 bg-zinc-800 mx-auto mt-4"></div>
        </div>
      </div>
    </section>
  );
}
