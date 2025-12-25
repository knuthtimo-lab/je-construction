
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PROJECTS, STATS } from '../constants';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured || true).slice(0, 5);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-secondary dark:bg-black pt-16 pb-24 md:pt-32 md:pb-40 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-block px-4 py-1.5 border border-primary/30 rounded-full bg-white/5 backdrop-blur-sm">
                <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.4em]">Excellence in Engineering</span>
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-bold text-white uppercase tracking-tight leading-[0.9]">
                Building the <br /> <span className="text-primary italic">Future</span> of Texas
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                JE Construction Services delivers heavy-civil, industrial, and municipal landmarks with unmatched precision and a safety-first culture.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                <Link to="/contact" className="px-10 py-4 bg-primary text-secondary font-display font-bold text-lg tracking-widest rounded-lg shadow-xl hover:bg-white transition-all transform hover:-translate-y-1">
                  GET A QUOTE
                </Link>
                <Link to="/projects" className="px-10 py-4 border-2 border-white/20 text-white font-display font-bold text-lg tracking-widest rounded-lg hover:bg-white hover:text-secondary hover:border-white transition-all">
                  OUR WORK
                </Link>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="relative group animate-in fade-in slide-in-from-right duration-1000 delay-300">
              <div className="relative aspect-[4/3] md:aspect-video lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-surface-dark border border-white/10">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">{project.category}</span>
                      <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-wider">{project.title}</h3>
                      <p className="text-gray-400 text-xs md:text-sm mt-2 font-light italic">{project.location}</p>
                    </div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/30 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all opacity-0 group-hover:opacity-100"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/30 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all opacity-0 group-hover:opacity-100"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-6 gap-3">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      index === currentSlide ? 'w-10 bg-primary' : 'w-4 bg-gray-700 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3">
                <div className="h-0.5 w-16 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Excellence Since 2012</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-secondary dark:text-white uppercase leading-none">
                Committed to <span className="text-primary">Safety</span> & Quality
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
                JE Construction Services, LLC is a premier heavy-civil construction company dedicated to delivering exceptional results. Our team brings decades of experience to every job site, ensuring structural integrity and client success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
                {SERVICES.slice(0, 4).map((service) => (
                  <div key={service.id} className="flex items-center space-x-4">
                    <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                    <span className="text-sm font-bold text-secondary dark:text-gray-200 uppercase tracking-widest">{service.title}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link to="/about" className="group inline-flex items-center text-secondary dark:text-white font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-primary pb-1 hover:text-primary transition-all">
                  Read Our Story 
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdcqUIO69Ar4-tzOJyfhEsz2y9R9SVYFnnsFM77LeEzo-RRvvkh0jVXUJzsgsBP0j7-i6qA1k6BXfDGPN4rdF8BUaD0gM4fC_DEVoaMcBUfjr-i2IG0e4k8KfCHBvN3R8O64I3rGXq4f36C4jzT25x-zwbRtyGszxesBiQHb9xDY9NXQNPSoX7Kiyn-FkpbjSbpLA_lrKVklnkNsdMjuUf1hpVwAM4W-P9WR7snuKwJ4pXqeOmV2PIbckhKPP_74LBuejiYnt9d_w" 
                  alt="Construction team at sunset" 
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-secondary/90 to-transparent">
                   <div className="flex items-center justify-between text-white">
                     <div>
                       <p className="font-display font-bold text-2xl tracking-widest uppercase">Trusted in Texas</p>
                       <p className="text-gray-400 text-sm uppercase tracking-widest font-light">SBE Certified Contractor</p>
                     </div>
                     <span className="material-symbols-outlined text-4xl text-primary">engineering</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Grid */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h3 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Our Expertise</h3>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-secondary dark:text-white uppercase leading-none">Core Capabilities</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group bg-white dark:bg-surface-dark rounded-[2rem] overflow-hidden shadow-xl border border-transparent hover:border-primary/20 transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-10 relative">
                  <div className="absolute -top-12 right-10 h-20 w-20 bg-primary flex items-center justify-center rounded-2xl shadow-xl text-secondary">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-secondary dark:text-white mb-4 uppercase tracking-wider group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-light text-sm">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">
                    Learn More <span className="material-symbols-outlined text-sm ml-2">east</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <span className="block text-6xl md:text-8xl font-display font-bold mb-2">{stat.value}</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] opacity-60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary dark:bg-black rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 bg-primary opacity-5 rounded-full blur-[120px]"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left space-y-8">
                <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase leading-none">Ready to start <br /> your project?</h2>
                <p className="text-gray-400 text-xl max-w-xl font-light">Get a professional consultation and accurate estimate from our expert team today.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
                <Link to="/contact" className="px-12 py-6 bg-primary text-secondary font-display font-bold text-xl tracking-widest rounded-2xl hover:bg-white transition-all text-center">
                  GET A QUOTE
                </Link>
                <Link to="/contact" className="px-12 py-6 border-2 border-white text-white font-display font-bold text-xl tracking-widest rounded-2xl hover:bg-white hover:text-secondary transition-all text-center">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
