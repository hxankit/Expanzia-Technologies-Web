import React from 'react';

const Contact = ({ 
  containerClassName = "py-24 px-4 bg-gray-950 border-t border-b border-gray-800",
  title = "What's On Your Mind?",
  subtitle = "Ready to build something amazing? Whether it's a mobile app, a web platform, or just a spark of an idea, tell us about your vision. We'll respond within 24 hours.",
  isPopup = false
}) => {
  // State to hold form data (best practice for form handling in React)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    projectType: 'App Development',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Project Inquiry:", formData);
    // In a real application, you would send this data to a backend API here.
    alert("Thank you for sharing your vision! We'll review your project inquiry and get back to you shortly.");
    
    // Clear the form after submission (optional)
    setFormData({
      name: '',
      email: '',
      projectType: 'App Development',
      message: '',
    });
  };

  return (
    <section id={!isPopup ? "project-inquiry" : undefined} className={containerClassName}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">{title}</h2>
        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">{subtitle}</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-900 rounded-xl shadow-2xl border border-gray-800">
          
          {/* Name Field */}
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150" 
          />
          
          {/* Email Field */}
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150" 
          />
          
          {/* Project Type Dropdown */}
          <div className="md:col-span-2 relative">
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full appearance-none p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150 cursor-pointer"
            >
              <option value="App Development">Mobile App Development</option>
              <option value="Web Platform">Website / Web Platform</option>
              <option value="Design">UI/UX Design Only</option>
              <option value="Idea">Just an Idea / General Inquiry</option>
              <option value="Other">Other Project</option>
            </select>
            {/* Custom arrow for select box */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          
          {/* Message / Idea Field */}
          <textarea 
            name="message"
            placeholder="Tell us about your project or idea, goals, budget, and timeline..." 
            value={formData.message}
            onChange={handleChange}
            required
            className="md:col-span-2 p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 h-48 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
          ></textarea>
          
          {/* Submit Button */}
          <div className="md:col-span-2 pt-4">
            <button 
              type="submit" 
              className="w-full max-w-sm mx-auto bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-lg shadow-cyan-600/50 transform hover:scale-[1.02]"
            >
              Start the Conversation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;