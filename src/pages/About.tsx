import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Award, CheckCircle2, Building2, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">About Maple Business & IT Solutions LLC</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Founded on the principles of excellence and integrity, we are a U.S.-based IT consulting firm dedicated to providing high-impact digital solutions for the private sector.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-slate-50 p-10 rounded-[2rem]">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To empower organizations through innovative technology, ensuring they remain competitive, secure, and efficient in an ever-evolving digital landscape.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-[2rem]">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted technology partner for global enterprises, recognized for our technical prowess and commitment to client success.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We maintain the highest ethical standards in all our interactions.' },
              { title: 'Innovation', desc: 'We constantly explore new technologies to provide better solutions.' },
              { title: 'Excellence', desc: 'We strive for perfection in every line of code and every strategy.' },
              { title: 'Collaboration', desc: 'We work as an extension of your team to achieve shared goals.' },
            ].map((value) => (
              <div key={value.title} className="text-center p-6">
                <CheckCircle2 className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Leadership</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Led by industry veterans with deep expertise in enterprise IT solutions and digital strategy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              {
                name: 'Marcus Chen',
                role: 'Chief Executive Officer',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
                bio: '20+ years in enterprise software and strategic consulting.'
              },
              {
                name: 'Sarah Jenkins',
                role: 'Chief Technology Officer',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
                bio: 'Expert in AI implementation and cloud architecture.'
              },
              {
                name: 'David Miller',
                role: 'VP of Operations',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
                bio: 'Specialist in government contracting and project management.'
              }
            ].map((member) => (
              <div key={member.name} className="group text-left">
                <div className="aspect-[4/5] bg-slate-100 rounded-3xl mb-6 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white text-sm font-light leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <h4 className="font-bold text-xl text-slate-900">{member.name}</h4>
                <p className="text-primary font-medium text-sm uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
