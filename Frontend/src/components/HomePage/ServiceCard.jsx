/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

export const GlowCard = ({ children, className = '' }) => (
  <motion.div className={`relative p-px rounded-xl overflow-hidden group ${className}`} whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} style={{ perspective: 1000 }}>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-0 group-hover:opacity-70 transition-opacity duration-500 animate-spin-slow">
      <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,_transparent,_rgba(59,130,246,0.8),_transparent)]"></div>
    </div>
    <div className="relative p-6 rounded-[11px] backdrop-blur-lg bg-gray-900/90 border border-blue-900/50 group-hover:border-cyan-500/70 h-full transition duration-500">
      {children}
    </div>
  </motion.div>
);

const ICON_CLASSES = 'w-8 h-8 text-cyan-400 mb-3';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <GlowCard className="h-full">
    <div>
      {Icon ? <Icon className={ICON_CLASSES} /> : null}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </GlowCard>
);

export default ServiceCard;
