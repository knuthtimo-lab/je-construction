
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Heavy Civil' | 'Industrial' | 'Municipal' | 'Petrochemical'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories: ('All' | 'Heavy Civil' | 'Industrial' | 'Municipal' | 'Petrochemical')[] = [
    'All', 'Heavy Civil', 'Industrial', 'Municipal', 'Petrochemical'
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[480px] flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070"
            alt="Project header"
            className="w-full h-full object-cover opacity-50 brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 font-light italic max-w-2xl mx-auto">
            Explore our portfolio of heavy-civil, industrial, and municipal landmarks across South Texas.
          </p>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 sticky top-20 z-40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full font-display font-bold text-xs uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-primary text-secondary shadow-lg transform scale-105' 
                    : 'bg-gray-100 dark:bg-surface-dark text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group flex flex-col bg-white dark:bg-background-dark rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800">
                <div className="relative aspect-video overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 px-4 py-1 bg-white/90 dark:bg-black/80 rounded text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                    {project.status}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-4">
                    <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-display font-bold text-secondary dark:text-white uppercase group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs font-medium mb-6">
                    <span className="material-symbols-outlined text-sm mr-2 text-primary">location_on</span>
                    {project.location}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-10 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-50 dark:border-gray-800 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {project.completionYear || 'Est. 2024'}
                    </span>
                    <a href="#" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform">
                      View Details <span className="material-symbols-outlined text-sm ml-2">north_east</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-gray-200">search_off</span>
              <p className="text-gray-400 italic">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
