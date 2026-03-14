/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import ServiceDetails from './pages/ServiceDetails';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // When there's a hash, the browser might try to scroll there immediately.
    // Force top scroll while loading.
    
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      // Reset scroll position to top while loading so it starts fresh
      window.scrollTo(0, 0);
      
      // Prevent browser's default hash scroll jumping
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    } else {
      document.body.style.overflow = 'unset';
      
      // Delay the hasLoaded state to wait for the framer-motion reveal animation (0.4s delay + 0.8s duration)
      setTimeout(() => {
        setHasLoaded(true);
      }, 1200);
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div 
        className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-cyan-400 selection:text-zinc-950 relative"
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          scale: isLoading ? 0.95 : 1,
          filter: isLoading ? "blur(10px)" : "blur(0px)"
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: isLoading ? 0 : 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home hasLoaded={hasLoaded} />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
          </Routes>
        </div>
        <Footer />
      </motion.div>
      <Chatbot />
    </>
  );
}

