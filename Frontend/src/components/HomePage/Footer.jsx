import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-950 border-t border-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-8 mb-8">
        <div className="col-span-2 md:col-span-2">
          <a href="#hero" className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Techexpanzia
          </a>
          <p className="mt-4 text-gray-500 text-sm max-w-xs">
            We innovate, automate, and scale businesses with smart technology solutions.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#about" className="text-gray-400 hover:text-cyan-400 text-sm transition duration-200">About</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-cyan-400 text-sm transition duration-200">Services</a></li>
            <li><a href="#portfolio" className="text-gray-400 hover:text-cyan-400 text-sm transition duration-200">Portfolio</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 text-sm transition duration-200">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
          <ul className="space-y-3">
            <li><a href="#strengths" className="text-gray-400 hover:text-cyan-400 text-sm transition duration-200">Why Choose Us</a></li>
            <li><a href="#tech-stack" className="text-gray-400 hover:text-cyan-400 text-sm transition duration-200">Tech Stack</a></li>
            <li><a href="#careers" className="text-gray-400 hover:text-cyan-400 text-sm transition duration-200">Careers</a></li>
            <li><a href="#blog" className="text-gray-400 hover:text-cyan-400 text-sm transition duration-200">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
          <ul className="space-y-3">
            <li><a href="#terms" className="text-gray-400 hover:text-cyan-400 text-sm transition duration-200">Terms of Service</a></li>
            <li><a href="#privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition duration-200">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-4">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Techexpanzia. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-cyan-400 transition duration-200"><Twitter className="w-5 h-5" /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-cyan-400 transition duration-200"><Linkedin className="w-5 h-5" /></a>
          <a href="https://github.com" aria-label="GitHub" className="text-gray-400 hover:text-cyan-400 transition duration-200"><Github className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
