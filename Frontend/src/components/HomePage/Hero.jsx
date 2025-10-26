/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import useParallax from '../../hooks/useParallax';

const textRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => {
  const parallaxOffset = useParallax(30);

  const contentContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  return (
    <section id="hero" className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-gray-800 bg-gray-950">
      <style>{`
        @keyframes pulse-ring { 0% { transform: scale(0.7); opacity: 0.8; } 50% { transform: scale(1.0); opacity: 0.4; } 100% { transform: scale(0.7); opacity: 0.8; } }
        .animate-pulse-ring { animation: pulse-ring 6s infinite ease-in-out; }
        @keyframes scanline { 0% { background-position: 0 0; } 100% { background-position: 0 100%; } }
        .scanline-overlay { background-image: linear-gradient(rgba(17, 24, 39, 0.1) 50%, rgba(59, 130, 246, 0.25) 50%); background-size: 100% 4px; animation: scanline 10s linear infinite; }
        @keyframes particle-drift { 0% { transform: translate(0, 0) rotate(0deg); opacity: 0.1; } 33% { transform: translate(100px, 50px) rotate(10deg); opacity: 0.2; } 66% { transform: translate(-50px, -70px) rotate(-5deg); opacity: 0.15; } 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.1; } }
        .animate-particle-drift { animation: particle-drift 45s infinite ease-in-out; }
      `}</style>

      <motion.div className="absolute inset-0 pointer-events-none z-0 animate-particle-drift" style={{ backgroundImage: `radial-gradient(circle, #5b21b6 1px, transparent 1px), radial-gradient(circle, #06b6d4 1px, transparent 1px)`, backgroundSize: '40px 40px' }} animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="absolute inset-0 scanline-overlay opacity-20 pointer-events-none" />

      <motion.div className="absolute -top-10 -right-10 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-40" animate={{ y: [0, -70, 0], x: [0, 70, 0], scale: [1, 1.1, 1] }} transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }} style={{ translateX: parallaxOffset.x * 2, translateY: parallaxOffset.y * 2 }} />
      <motion.div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-violet-500/20 rounded-full filter blur-3xl opacity-30" animate={{ y: [0, 100, 0], x: [0, -100, 0], scale: [1, 0.9, 1] }} transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }} style={{ translateX: -parallaxOffset.x * 1.5, translateY: -parallaxOffset.y * 1.5 }} />

      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[800px] h-[800px] rounded-full border border-cyan-500/20 absolute animate-pulse-ring" />
        <div className="w-[600px] h-[600px] rounded-full border border-blue-500/10 absolute animate-pulse-ring" style={{ animationDelay: '2s' }} />
        <div className="w-[400px] h-[400px] rounded-full border border-violet-500/10 absolute animate-pulse-ring" style={{ animationDelay: '4s' }} />
      </div>

      <motion.div className="z-10 text-center max-w-4xl px-4" initial="hidden" animate="show" variants={contentContainerVariants}>
        <motion.h1 className="text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tighter" variants={textRevealVariants} style={{ translateX: -parallaxOffset.x * 0.5, translateY: -parallaxOffset.y * 0.5 }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Building Scalable Tech</span>
          <span className="text-white"> for a Smarter Tomorrow.</span>
        </motion.h1>
        <motion.p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light" variants={textRevealVariants}>
          From web apps to automation — we deliver end-to-end digital solutions that define the next generation of business efficiency.
        </motion.p>

        <motion.div className="flex justify-center space-x-4" variants={textRevealVariants}>
          <motion.a href="#services" className="group relative bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-xl transition-all duration-300 transform overflow-hidden border border-cyan-500/50" whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 180, 255, 0.7)' }} whileTap={{ scale: 0.95 }}>
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            Explore Services
          </motion.a>
          <motion.a href="#contact" className="border border-cyan-500 text-cyan-400 font-bold py-3 px-10 rounded-full transition duration-300 transform hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;