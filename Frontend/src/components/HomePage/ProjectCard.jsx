import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GlowCard } from './ServiceCard';

const ProjectCard = ({ title, industry, description }) => (
  <GlowCard className="h-full">
    <div>
      <div className="w-full h-32 bg-gray-800/50 mb-4 flex items-center justify-center rounded-lg border border-cyan-500/30">
        <span className="text-gray-500 text-sm">Project Mockup</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-bold text-white">{title}</h4>
        <span className="text-xs font-medium text-blue-400 bg-blue-900/50 px-2 py-0.5 rounded-full">{industry}</span>
      </div>
      <p className="text-gray-400 text-sm mb-3">{description}</p>
      <a href="#contact" className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 font-medium group">
        View Case Study
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  </GlowCard>
);

export default ProjectCard;
