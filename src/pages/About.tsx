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
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
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

        {/* Team Section Placeholder */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Leadership</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Led by industry veterans with deep expertise in enterprise IT solutions and digital strategy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-slate-100 rounded-3xl mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img
                    src={`https://picsum.photos/seed/person${i}/400/400`}
                    alt="Team member"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-bold text-lg">Executive Leadership</h4>
                <p className="text-slate-500 text-sm">Strategic IT Consultant</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
