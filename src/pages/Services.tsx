import React from 'react';
import { Smartphone, Globe, BarChart3, Cpu, Code, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: Smartphone,
    desc: 'We build high-performance, feature-rich mobile applications for iOS and Android platforms. Our mobile solutions are designed to provide seamless user experiences while maintaining robust backend connectivity.',
    features: [
      'Native iOS & Android Development',
      'Cross-Platform Solutions (React Native, Flutter)',
      'Mobile UI/UX Design',
      'App Store Optimization (ASO)',
      'Backend Integration & APIs',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070',
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: Globe,
    desc: 'From corporate websites to complex web applications, we deliver scalable and secure web solutions using the latest technologies. Our focus is on speed, security, and responsive design.',
    features: [
      'Custom Web Applications',
      'Enterprise Portals',
      'E-commerce Solutions',
      'Progressive Web Apps (PWAs)',
      'CMS Integration & Customization',
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
  },
  {
    id: 'data',
    title: 'Data Analytics',
    icon: BarChart3,
    desc: 'Unlock the power of your data with our advanced analytics services. We help organizations make data-driven decisions through sophisticated modeling, visualization, and predictive analytics.',
    features: [
      'Business Intelligence (BI)',
      'Data Visualization & Dashboards',
      'Predictive Modeling',
      'Big Data Processing',
      'Data Warehousing Solutions',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    icon: Cpu,
    desc: 'Our design philosophy centers on the user. We create intuitive, aesthetically pleasing interfaces that simplify complex tasks and enhance overall user satisfaction across all digital touchpoints.',
    features: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'Visual Design Systems',
      'Usability Testing',
      'Interaction Design',
    ],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=2070',
  },
  {
    id: 'api',
    title: 'API Integration',
    icon: Code,
    desc: 'Connect your disparate systems and streamline workflows with our custom API integration services. We ensure secure, reliable, and efficient data exchange between your software applications.',
    features: [
      'RESTful & GraphQL API Development',
      'Third-Party Service Integration',
      'Legacy System Modernization',
      'API Security & Authentication',
      'Real-time Data Sync',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2068',
  },
  {
    id: 'custom',
    title: 'Custom Software Development',
    icon: Database,
    desc: 'When off-the-shelf solutions fall short, we build custom software tailored to your specific business needs. Our agile development process ensures transparency and high-quality results.',
    features: [
      'Bespoke Enterprise Software',
      'SaaS Product Development',
      'Cloud-Native Applications',
      'Software Architecture Design',
      'Maintenance & Support',
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Specialized IT Services</h1>
          <p className="text-xl text-slate-600">
            We offer a full spectrum of technology services designed to help private enterprises excel in the digital age.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-[2.5rem] shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-3xl -z-10"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                    <service.icon size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="text-primary shrink-0" size={18} />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-3 transition-all"
                >
                  Request a Quote <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Not sure which service you need?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Our consultants are ready to help you identify the best technology strategy for your organization.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-xl shadow-primary/20"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
