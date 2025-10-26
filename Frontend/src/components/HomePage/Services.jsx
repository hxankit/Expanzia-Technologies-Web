/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Smartphone, Cpu, Layout, Cloud, Zap } from 'lucide-react';
import ServiceCard from './ServiceCard';


const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => (
  <motion.section id="services" className="py-24 px-4" initial="hidden" whileInView="show" variants={{ hidden: {}, show: {} }} viewport={{ once: true, amount: 0.2 }}>
    <motion.h2 className="text-4xl font-extrabold text-center text-white mb-16" variants={textRevealVariants}>Expertise: What We Do</motion.h2>
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" variants={containerVariants}>
      <ServiceCard icon={Server} title="Web Development" description="Full-stack scalable web applications using modern frameworks and robust backend services." />
      <ServiceCard icon={Smartphone} title="Mobile Solutions" description="Native and cross-platform applications focusing on performance and user-centered design." />
      <ServiceCard icon={Cpu} title="AI & Automation" description="Workflow intelligence, machine learning integration, and robotic process automation (RPA)." />
      <ServiceCard icon={Layout} title="UI/UX Design" description="Modern, responsive, and user-centered design for intuitive digital experiences." />
      <ServiceCard icon={Cloud} title="Cloud Deployment" description="Managed infrastructure setup on AWS, Render, Vercel, or Dockerized environments." />
      <ServiceCard icon={Zap} title="Scalable Architecture" description="Designing microservices and serverless infrastructure for unlimited scalability and resilience." />
    </motion.div>
  </motion.section>
);

export default Services;
