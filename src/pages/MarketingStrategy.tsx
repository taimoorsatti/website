import React from 'react';
import { Search, TrendingUp, Target, Globe, Lightbulb, ShieldCheck } from 'lucide-react';

export default function MarketingStrategy() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-12 tracking-tight">
            Digital Strategy & <span className="text-primary">SEO Guide</span>
          </h1>
          
          {/* SEO Keywords */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <Search size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">SEO Keywords for U.S. Clients</h2>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl">
                <h3 className="font-bold text-lg mb-4 text-primary">Corporate & Enterprise</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• Custom software development Plano TX</li>
                  <li>• Enterprise data analytics solutions</li>
                  <li>• Mobile app development for startups</li>
                  <li>• API integration services for business</li>
                  <li>• Premium IT consulting USA</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Marketing Strategy */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Marketing Strategy</h2>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center text-accent shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Enterprise Content Marketing</h4>
                  <p className="text-slate-600">Develop high-quality whitepapers and case studies focusing on ROI and operational efficiency to attract decision-makers in the corporate sector.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center text-accent shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">LinkedIn Authority Building</h4>
                  <p className="text-slate-600">Share insights on enterprise IT modernization and digital transformation. Connect with CTOs, VPs of Engineering, and IT Directors.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Branding & Domain */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                <Lightbulb size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Branding & Domain Suggestions</h2>
            </div>
            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-bold text-xl mb-4 text-accent">Domain Strategy</h4>
                  <ul className="space-y-4 text-slate-400">
                    <li><strong className="text-white">mapleitsol.com</strong> (Current - Professional)</li>
                    <li><strong className="text-white">maplesolutions.us</strong> (Trustworthy U.S. focus)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-4 text-accent">Visual Identity</h4>
                  <p className="text-slate-400 mb-4">Maintain the "Maple" leaf motif but stylized in a geometric, tech-focused way. Use a deep navy blue (#002147) and a vibrant tech-blue (#007FFF) for a premium corporate feel.</p>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#002147] rounded-lg"></div>
                    <div className="w-12 h-12 bg-[#007FFF] rounded-lg"></div>
                    <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lead Generation */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Lead Generation Strategy</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 border border-slate-100 rounded-3xl">
                <h4 className="font-bold text-lg mb-2">Enterprise Solutions Whitepaper</h4>
                <p className="text-slate-600 text-sm">Require an email address to download the full PDF whitepaper. This identifies high-intent enterprise leads.</p>
              </div>
              <div className="p-8 border border-slate-100 rounded-3xl">
                <h4 className="font-bold text-lg mb-2">Free Technical Audit</h4>
                <p className="text-slate-600 text-sm">Offer a "30-minute Infrastructure Review" for corporate clients to get them into your sales funnel.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
