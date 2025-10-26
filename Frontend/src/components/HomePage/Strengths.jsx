/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageSquare, Server, Briefcase } from 'lucide-react';
import ServiceCard from './ServiceCard';


const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Strengths = () => (
  <motion.section id="strengths" className="py-24 px-4" initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true, amount: 0.2 }}>
    <motion.h2 className="text-4xl font-extrabold text-center text-white mb-16" variants={textRevealVariants}>Why Techexpanzia?</motion.h2>
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto" variants={containerVariants}>
      <ServiceCard icon={Clock} title="On-time Delivery" description="We prioritize efficiency and use Agile methods to ensure deadlines are consistently met." />
      <ServiceCard icon={MessageSquare} title="Transparent Communication" description="Open lines of communication throughout the project life cycle—no hidden costs or delays." />
      <ServiceCard icon={Server} title="Scalable Architecture" description="Future-proof solutions built on flexible, cloud-native architecture ready for growth." />
      <ServiceCard icon={Briefcase} title="Post-Launch Support" description="Comprehensive support and maintenance packages long after deployment is complete." />
    </motion.div>
  </motion.section>
);

export default Strengths;
