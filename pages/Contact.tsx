
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you shortly.');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero Header */}
      <header className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070"
            alt="Construction skyline"
            className="w-full h-full object-cover opacity-40 brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter mb-4 animate-in slide-in-from-left duration-700">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-xl font-light leading-relaxed">
            Ready to start your next heavy-civil construction project? Reach out to our team in Corpus Christi for a consultation.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Column */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-display font-bold text-secondary dark:text-white uppercase tracking-widest">Send Us a Message</h2>
              <p className="text-gray-500 dark:text-gray-400">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-3xl shadow-2xl space-y-6 border border-gray-100 dark:border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="(361) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Project Type</label>
                <select
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option>General Inquiry</option>
                  <option>Heavy Civil</option>
                  <option>Industrial Maintenance</option>
                  <option>Roadwork / Paving</option>
                  <option>Quote Request</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-background-dark focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
                  placeholder="Describe your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-secondary py-5 rounded-xl font-display font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-xl shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-display font-bold text-secondary dark:text-white uppercase tracking-widest">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-6 group">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary">location_on</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Our Office</span>
                    <p className="text-secondary dark:text-gray-200 font-medium leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary">call</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Phone</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-secondary dark:text-gray-200 font-medium hover:text-primary transition-colors">{COMPANY_INFO.phone}</a>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest font-bold">Mon-Fri: 8AM - 5PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary">mail</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-secondary dark:text-gray-200 font-medium hover:text-primary transition-colors">{COMPANY_INFO.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-secondary dark:text-white uppercase tracking-widest">Find Us</h3>
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-80 group cursor-pointer">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMD3mppq-UpB-dU1-M_fwL9UxK0E5AtuauwpWUrDeg5IzoZnYIlMAfnn11FOORMdBoF6vG85K56BGeVOxRUtd0mTOAHPhiApXV-aJOlINnZEMeHYiYVJHYdo2ySSWm1odZGO01b5cMvlydd4pDAdF9ZbBom3Y7vJ2WgF5o02QpknVbNAMDUl3Ho6SKBVwIo8jb84csCoS7WkQh0-XABue_I7I3dl0Qz1gCi8qZLfTvXEBYKYxOIrTD6ari36O_1zBEUGvRWVPEQjc" 
                  alt="Office Map" 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="https://maps.google.com" target="_blank" className="bg-white text-secondary px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                    <span className="material-symbols-outlined text-primary">map</span> Open Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
