import React from 'react';
import { Users } from 'lucide-react';

const TestimonialCard = ({ quote, author, title }) => (
  <div className="p-6 rounded-xl shadow-lg border-l-4 border-cyan-500 bg-white/5 backdrop-blur-sm h-full hover:-translate-y-1 transition-transform">
    <Users className="w-6 h-6 text-cyan-400 mb-3" />
    <p className="text-white text-base italic mb-4 leading-relaxed">"{quote}"</p>
    <div className="text-xs">
      <p className="font-semibold text-white">{author}</p>
      <p className="text-gray-400">{title}</p>
    </div>
  </div>
);

export default TestimonialCard;
