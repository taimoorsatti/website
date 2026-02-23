import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Global Health Data Portal',
    client: 'International Health Organization',
    category: 'Data Analytics',
    desc: 'Developed a secure, high-performance data visualization portal for tracking global health metrics. Integrated multiple legacy databases into a unified dashboard.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070',
    tags: ['React', 'D3.js', 'Python', 'AWS'],
  },
  {
    title: 'Metropolitan Transit Mobile App',
    client: 'Metropolitan Transit Authority',
    category: 'Mobile Development',
    desc: 'A real-time transit tracking and ticketing application used by over 500,000 commuters daily. Reduced ticket processing time by 40%.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Google Maps API'],
  },
  {
    title: 'Enterprise ERP Modernization',
    client: 'Global Logistics Corp',
    category: 'Custom Software',
    desc: 'Modernized a legacy ERP system into a cloud-native platform, improving operational efficiency by 25% and reducing maintenance costs.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    tags: ['Java Spring Boot', 'Angular', 'Docker', 'Azure'],
  },
  {
    title: 'Cybersecurity Audit Platform',
    client: 'Financial Services Firm',
    category: 'API Integration',
    desc: 'Built an automated compliance auditing tool that integrates with various security scanners to provide real-time risk assessments.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
    tags: ['Go', 'Kubernetes', 'Elasticsearch', 'Terraform'],
  },
];

export default function Portfolio() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Portfolio</h1>
          <p className="text-xl text-slate-600">
            Explore our track record of delivering high-impact technology solutions for enterprise clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-8 shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-bold flex items-center gap-2">
                    View Case Study <ExternalLink size={18} />
                  </span>
                </div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-widest">
                  {project.category}
                </div>
              </div>
              <div className="px-2">
                <p className="text-primary font-bold text-sm mb-2 uppercase tracking-widest">{project.client}</p>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{project.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-semibold rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Have a similar project in mind?</h2>
          <Link to="/contact" className="bg-accent text-primary px-10 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-accent/20 inline-flex items-center gap-2 mx-auto">
            Let's Discuss Your Project <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
