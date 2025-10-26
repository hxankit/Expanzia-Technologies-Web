import React from 'react';

const TechStack = () => (
  <section id="tech-stack" className="py-24 px-4">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-extrabold text-white">Tech Stack</h2>
      <p className="text-gray-400 mt-4">We work with modern tools and platforms to build scalable products.</p>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
      <div className="p-6 rounded-lg bg-gray-800/50">React</div>
      <div className="p-6 rounded-lg bg-gray-800/50">Node.js</div>
      <div className="p-6 rounded-lg bg-gray-800/50">AWS</div>
      <div className="p-6 rounded-lg bg-gray-800/50">Docker</div>
      <div className="p-6 rounded-lg bg-gray-800/50">Tailwind CSS</div>
      <div className="p-6 rounded-lg bg-gray-800/50">TypeScript</div>
      <div className="p-6 rounded-lg bg-gray-800/50">Postgres</div>
      <div className="p-6 rounded-lg bg-gray-800/50">Framer Motion</div>
    </div>
  </section>
);

export default TechStack;
