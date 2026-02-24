import React from 'react';
import { ExternalLink, ArrowRight, Smartphone, Globe, Monitor, Shield, Zap, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'Federal Health Data Analytics Platform',
    client: 'U.S. Department of Health',
    category: 'Data Analytics & Government',
    desc: 'A high-scale data visualization and predictive analytics portal for tracking national health metrics. Built with secure, scalable architecture to handle billions of records.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    platforms: ['Web', 'Cloud'],
    tags: ['React', 'D3.js', 'Python', 'AWS GovCloud'],
    features: ['Real-time Analytics', 'HIPAA Compliant', 'Scalable Architecture']
  },
  {
    title: 'Secure Mobile Banking & Payment Gateway',
    client: 'FinTech Global Solutions',
    category: 'Mobile Apps & SaaS',
    desc: 'A robust mobile banking application with integrated biometric authentication and a high-performance payment gateway. Optimized for security and user engagement.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070',
    platforms: ['iOS', 'Android'],
    tags: ['React Native', 'Node.js', 'PCI-DSS', 'Stripe API'],
    features: ['Biometric Auth', 'Instant Payments', 'Fraud Detection']
  },
  {
    title: 'State Transit Management System',
    client: 'Metropolitan Transit Authority',
    category: 'Enterprise & Government',
    desc: 'Modernizing legacy transit infrastructure with a cloud-native management system. Real-time fleet tracking and automated ticketing for millions of daily commuters.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
    platforms: ['Web', 'Mobile'],
    tags: ['Angular', 'Go', 'PostgreSQL', 'Google Cloud'],
    features: ['Real-time Tracking', 'Automated Billing', 'Legacy Integration']
  },
  {
    title: 'AI-Powered Cybersecurity Auditor',
    client: 'Defense Systems Inc.',
    category: 'SaaS & Security',
    desc: 'An automated compliance auditing tool that leverages AI to identify vulnerabilities and ensure real-time risk assessment across enterprise networks.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2068',
    platforms: ['Web', 'API'],
    tags: ['Python', 'TensorFlow', 'Kubernetes', 'Terraform'],
    features: ['AI Vulnerability Scan', 'NIST Compliance', 'Auto-Remediation']
  },
  {
    title: 'Global Supply Chain CRM & Logistics',
    client: 'Logistics Corp International',
    category: 'CRM & Enterprise',
    desc: 'A custom enterprise CRM designed for global logistics, featuring real-time inventory management, route optimization, and partner portal integrations.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070',
    platforms: ['Web', 'Tablet'],
    tags: ['Java Spring Boot', 'React', 'Azure', 'Docker'],
    features: ['Route Optimization', 'Inventory Sync', 'Partner Portal']
  },
  {
    title: 'Real-time Video Streaming Infrastructure',
    client: 'MediaStream Networks',
    category: 'Streaming & Scalable Architecture',
    desc: 'Building a low-latency video streaming infrastructure capable of handling millions of concurrent viewers with adaptive bitrate streaming.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
    platforms: ['Web', 'Mobile', 'TV'],
    tags: ['WebRTC', 'FFmpeg', 'Redis', 'Elixir'],
    features: ['Low Latency', 'Multi-platform', 'Auto-scaling']
  },
];

export default function Portfolio() {
  return (
    <div className="pt-32 pb-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Success Stories</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Delivering Enterprise-Grade <span className="text-primary">IT Excellence</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We partner with government agencies and global enterprises to build scalable, secure, and high-performance digital solutions.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <div className="flex gap-4">
                    {project.platforms.map(platform => (
                      <span key={platform} className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-8 left-8">
                  <span className="bg-primary text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex-grow flex flex-col">
                <div className="mb-6">
                  <p className="text-primary font-bold text-xs mb-2 uppercase tracking-[0.2em]">{project.client}</p>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {project.desc}
                  </p>
                </div>

                {/* Features/Tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-500 text-xs font-bold rounded-xl border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Shield size={20} />
                    <Zap size={20} />
                    <BarChart size={20} />
                  </div>
                  <Link
                    to="/contact"
                    className="bg-primary/10 text-primary px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-32 bg-primary text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready to Build Your Next Enterprise Solution?</h2>
              <p className="text-xl text-white/80 leading-relaxed mb-0">
                Our team of senior architects and engineers is ready to help you navigate complex technology challenges and deliver high-impact results.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-white text-primary px-12 py-6 rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-black/20 whitespace-nowrap"
            >
              Let's Discuss <ArrowRight className="inline ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
