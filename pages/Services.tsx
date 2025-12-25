
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-secondary py-20 md:py-32 relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070"
            alt="Excavator panorama"
            className="w-full h-full object-cover opacity-40 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white uppercase tracking-wider mb-6">Our Expertise</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Delivering heavy civil, industrial, and commercial construction solutions with precision and integrity.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-3xl font-display font-bold text-secondary dark:text-white uppercase tracking-widest">Comprehensive Solutions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              JE Construction Services is a versatile multi-disciplinary contractor. Our experienced team and fleet of heavy machinery ensure every job, regardless of complexity, is completed to the highest standard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white dark:bg-surface-dark rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
                <div className="h-64 overflow-hidden relative">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-4 right-4 bg-primary h-12 w-12 rounded-full flex items-center justify-center text-secondary shadow-lg transform group-hover:scale-125 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500 z-10">
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-display font-bold text-secondary dark:text-white mb-4 uppercase group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {['Qualified Personnel', 'Modern Fleet', 'Budget Focus'].map(item => (
                      <li key={item} className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span className="h-1.5 w-1.5 bg-primary rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                    Request Info <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
