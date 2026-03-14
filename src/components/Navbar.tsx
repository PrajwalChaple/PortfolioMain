import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { createPortal } from 'react-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="flex items-center justify-between py-6 md:py-8 relative">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center text-zinc-950 font-mono font-bold text-sm">
          P_
        </div>
        <span className="font-mono font-semibold text-xl tracking-tight text-zinc-50">Prajwal<span className="text-cyan-400">.dev</span></span>
      </div>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-sm font-mono text-zinc-400">
        <a href="#about" className="hover:text-cyan-400 transition-colors">~/about</a>
        <a href="#services-intro" className="hover:text-cyan-400 transition-colors">~/expertise</a>
        <a href="#portfolio" className="hover:text-cyan-400 transition-colors">~/projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">~/contact</a>
      </div>

      {/* Mobile Hamburger */}
      <button 
        className="text-zinc-50 md:hidden z-50 relative" 
        onClick={() => setIsOpen(true)}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && createPortal(
        <div className="fixed inset-0 bg-zinc-950/95 backdrop-blur-md z-[100] flex flex-col md:hidden animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <nav className="flex items-center justify-between py-6 relative">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center text-zinc-950 font-mono font-bold text-sm">
                  P_
                </div>
                <span className="font-mono font-semibold text-xl tracking-tight text-zinc-50">Prajwal<span className="text-cyan-400">.dev</span></span>
              </div>
              <button 
                className="text-zinc-50 md:hidden z-[101] relative" 
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </nav>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-24">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-mono text-zinc-200 hover:text-cyan-400 transition-colors">~/about</a>
            <a href="#services-intro" onClick={() => setIsOpen(false)} className="text-2xl font-mono text-zinc-200 hover:text-cyan-400 transition-colors">~/expertise</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-2xl font-mono text-zinc-200 hover:text-cyan-400 transition-colors">~/projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-mono text-zinc-200 hover:text-cyan-400 transition-colors">~/contact</a>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}
