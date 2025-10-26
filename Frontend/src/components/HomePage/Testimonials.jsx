import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  { quote: 'Techexpanzia transformed our backend and accelerated delivery.', author: 'S. Kumar', title: 'CTO, Logistics Co' },
  { quote: 'Their team shipped a beautiful mobile app on time and on budget.', author: 'A. Patel', title: 'Product Lead, FinTech' },
  { quote: 'Reliable, communicative, and technically excellent.', author: 'M. Singh', title: 'CEO, SaaS Platform' },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 px-4 bg-gray-950 border-t border-b border-gray-800">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-extrabold text-white">Client Testimonials</h2>
      <p className="text-gray-400 mt-4">Real feedback from teams we've partnered with.</p>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} quote={t.quote} author={t.author} title={t.title} />
      ))}
    </div>
  </section>
);

export default Testimonials;
