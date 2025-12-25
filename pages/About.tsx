
import React from 'react';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070"
            alt="Construction silhouette"
            className="w-full h-full object-cover opacity-30 brightness-50"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white uppercase tracking-wider mb-4 animate-in slide-in-from-top duration-700">
            Building Texas Since <span className="text-primary">2012</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light italic">
            Quality, Integrity, and Operational Excellence from Corpus Christi to across the state.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex flex-col">
                <h3 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-2">Our Story</h3>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary dark:text-white uppercase leading-tight">
                  JE Construction Services
                </h2>
                <div className="h-1 w-24 bg-primary mt-4"></div>
              </div>
              <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2012, JE Construction Services has established itself as a cornerstone in the Texas heavy-civil construction industry. Headquartered in <strong>Corpus Christi, Texas</strong>, we have grown from a local operation into a robust enterprise capable of handling complex infrastructure projects.
                </p>
                <p>
                  We pride ourselves on being more than just contractors; we are partners in development. Our commitment to quality, customer satisfaction, and timely completion sets the standard for every project we undertake.
                </p>
                <p>
                  As a certified <strong>SBE General Contractor</strong>, we combine the agility of a specialized firm with the capacity of a large-scale operator, currently employing a dedicated team of professionals focused on building the future of our communities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Established', value: '2012', icon: 'foundation' },
                { label: 'Headquarters', value: 'Corpus Christi', icon: 'location_on' },
                { label: 'Team Size', value: '50-200', icon: 'groups' },
                { label: 'Certified', value: 'SBE Contractor', icon: 'verified' }
              ].map((box) => (
                <div key={box.label} className="bg-background-light dark:bg-surface-dark p-8 rounded-xl border-l-4 border-primary shadow-lg group hover:bg-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl text-primary group-hover:text-secondary mb-4 transition-colors">{box.icon}</span>
                  <div className="text-2xl font-display font-bold text-secondary dark:text-white group-hover:text-secondary mb-1">{box.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-secondary/80">{box.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Foundation</h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: 'Unmatched Quality', icon: 'star', text: 'We adhere to the highest industry standards, ensuring longevity in every heavy-civil project.' },
              { title: 'Customer Satisfaction', icon: 'sentiment_satisfied', text: 'Our clients are our partners. We maintain transparent communication throughout.' },
              { title: 'Timely Completion', icon: 'schedule', text: 'We respect deadlines. Our management ensures milestones are hit without compromise.' },
              { title: 'Budget Integrity', icon: 'attach_money', text: 'We deliver value engineering and accurate estimations to keep projects within scope.' }
            ].map((value) => (
              <div key={value.title} className="bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:border-primary transition-all group">
                <div className="bg-primary/20 h-16 w-16 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary text-3xl">{value.icon}</span>
                </div>
                <h4 className="text-xl font-display font-bold mb-4 uppercase group-hover:text-primary">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
