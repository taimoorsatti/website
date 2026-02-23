import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cpu, Globe, Database, Smartphone, Code, BarChart3, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Mobile App Development',
    desc: 'Cutting-edge iOS and Android applications built for performance and scale.',
    icon: Smartphone,
    color: 'bg-blue-500',
  },
  {
    title: 'Web Development',
    desc: 'Enterprise-grade web platforms with modern architectures and seamless UX.',
    icon: Globe,
    color: 'bg-indigo-500',
  },
  {
    title: 'Data Analytics',
    desc: 'Transforming raw data into actionable business intelligence and insights.',
    icon: BarChart3,
    color: 'bg-cyan-500',
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centric design that drives engagement and simplifies complex workflows.',
    icon: Cpu,
    color: 'bg-violet-500',
  },
  {
    title: 'API Integration',
    desc: 'Seamlessly connecting your ecosystem with robust and secure API solutions.',
    icon: Code,
    color: 'bg-emerald-500',
  },
  {
    title: 'Custom Software',
    desc: 'Tailored software solutions designed to solve your unique business challenges.',
    icon: Database,
    color: 'bg-blue-600',
  },
];

const stats = [
  { label: 'Projects Delivered', value: '250+' },
  { label: 'Corporate Clients', value: '150+' },
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Years Experience', value: '12+' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
            alt="Technology background"
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                Empowering <span className="text-primary">Corporate</span> Digital Transformation
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                Maple Business & IT Solutions LLC delivers premium software development, data analytics, and IT consulting services to enterprises across the United States.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                >
                  Get a Quote <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Trusted by Global Enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold text-xl text-slate-700"><Building2 className="text-primary" /> Enterprise</div>
            <div className="flex items-center gap-2 font-bold text-xl text-slate-700"><ShieldCheck className="text-primary" /> Certified</div>
            <div className="flex items-center gap-2 font-bold text-xl text-slate-700"><Users className="text-primary" /> Professional</div>
            <div className="flex items-center gap-2 font-bold text-xl text-slate-700"><Globe className="text-primary" /> Global</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive IT Solutions for the Modern Era</h3>
            <p className="text-lg text-slate-600">We provide end-to-end technology services designed to optimize operations, enhance security, and drive innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-primary-foreground/70 font-medium uppercase tracking-widest text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                  alt="Team working"
                  className="rounded-[2rem] shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-3xl -z-0"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Why Maple Solutions</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">A Partner You Can Trust for Mission-Critical Projects</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Compliance & Security First</h4>
                    <p className="text-slate-600">We adhere to the highest standards of data protection and regulatory compliance, ensuring your business data is always safe.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Expert Multi-Disciplinary Team</h4>
                    <p className="text-slate-600">Our consultants bring decades of combined experience in software engineering, cybersecurity, and data science.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary shrink-0">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Proven Track Record</h4>
                    <p className="text-slate-600">From startups to Fortune 500 companies, we have a history of delivering projects on time, within budget, and beyond expectations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
                alt="Tech background"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Modernize Your Infrastructure?</h2>
              <p className="text-xl text-slate-400 mb-10">Join the ranks of high-performing companies that trust Maple Business & IT Solutions LLC.</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all"
                >
                  Book a Consultation
                </Link>
                <Link
                  to="/portfolio"
                  className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
