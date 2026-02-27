import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cpu, Globe, Database, Smartphone, Code, BarChart3, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Mobile App Development',
    desc: 'Cutting-edge iOS and Android applications built for performance and scale.',
    icon: Smartphone,
    color: 'bg-primary',
  },
  {
    title: 'Web Development',
    desc: 'Enterprise-grade web platforms with modern architectures and seamless UX.',
    icon: Globe,
    color: 'bg-secondary',
  },
  {
    title: 'Data Analytics',
    desc: 'Transforming raw data into actionable business intelligence and insights.',
    icon: BarChart3,
    color: 'bg-primary/80',
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centric design that drives engagement and simplifies complex workflows.',
    icon: Cpu,
    color: 'bg-secondary/80',
  },
  {
    title: 'API Integration',
    desc: 'Seamlessly connecting your ecosystem with robust and secure API solutions.',
    icon: Code,
    color: 'bg-primary/60',
  },
  {
    title: 'Custom Software',
    desc: 'Tailored software solutions designed to solve your unique business challenges.',
    icon: Database,
    color: 'bg-secondary/60',
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
            alt="Software Development Workspace"
            className="w-full h-full object-cover blur-sm"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight mb-8 tracking-tight">
                Premium IT Solutions for <span className="text-white">Global Enterprises</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl font-light tracking-wide">
                Maple Business & IT Solutions LLC delivers high-impact software engineering, AI-driven analytics, and strategic consulting to U.S. businesses and government entities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-2 group"
                >
                  Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance & Trust Section */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Verified U.S. Supplier</h2>
                <p className="text-slate-600">We are a registered supplier on SAM.gov and approved on Pennsylvania Supplier Portal and Jaggaer.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-8 opacity-40 grayscale">
              <span className="text-xl font-black tracking-tighter text-slate-900">SAM.GOV</span>
              <span className="text-xl font-bold tracking-tight text-slate-900">PA SUPPLIER</span>
              <span className="text-xl font-black italic tracking-tighter text-slate-900">JAGGAER</span>
            </div>
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

      {/* Expertise & Approach Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Expertise & Approach</h2>
            <p className="text-slate-200">We combine technical mastery with strategic thinking to deliver superior results for our clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Secure & Scalable Solutions', icon: ShieldCheck, desc: 'Built with industry-leading security protocols and designed to grow with your business.' },
              { title: 'Government & Enterprise Standards', icon: Building2, desc: 'Adhering to strict compliance requirements and enterprise-grade quality benchmarks.' },
              { title: 'Agile Development Process', icon: Code, desc: 'Iterative approach ensuring transparency, speed, and continuous alignment with goals.' },
              { title: 'Ongoing Support & Maintenance', icon: Users, desc: 'Dedicated technical partnership beyond deployment for long-term operational success.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <item.icon size={28} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
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
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-3xl -z-0"></div>
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
                  className="bg-accent text-slate-950 px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:brightness-110 transition-all w-full sm:w-auto text-center"
                >
                  Book a Consultation
                </Link>
                <Link
                  to="/portfolio"
                  className="bg-transparent text-white border border-white/20 px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all w-full sm:w-auto text-center"
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
