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

        {/* Why Choose Us */}
        <div className="mb-24">
          <div className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Partner With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">U.S. Based & Registered</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Registered on SAM.gov and approved on Pennsylvania Supplier Portal and Jaggaer. We understand the complexities of government contracting.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Security & Compliance</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We prioritize data security and maintain strict compliance with NIST, HIPAA, and industry-standard security protocols.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Enterprise Expertise</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Decades of combined experience delivering scalable, high-performance solutions for Fortune 500 companies and public sector agencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Strategic Strengths</h2>
            <div className="space-y-6">
              {[
                { title: 'Agile Methodology', desc: 'Iterative development that ensures transparency, speed, and continuous alignment with your goals.' },
                { title: 'Scalable Architecture', desc: 'We build systems designed to grow with your organization, handling increased loads without performance loss.' },
                { title: 'Dedicated Support', desc: 'Our relationship doesn\'t end at deployment. We provide ongoing maintenance and strategic technical support.' },
                { title: 'Cost-Effective Innovation', desc: 'Leveraging the latest technologies to deliver maximum value and ROI for your technology investments.' },
              ].map((strength) => (
                <div key={strength.title} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{strength.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{strength.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
              alt="Team Collaboration"
              className="rounded-[2.5rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
