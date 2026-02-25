import React from 'react';
import { Calendar, User, ArrowRight, Bookmark, Clock, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const featuredPost = {
  title: 'Digital Transformation in the U.S. Public Sector: A 2026 Outlook',
  excerpt: 'As government agencies face increasing pressure to modernize, we explore the key technologies driving efficiency and citizen engagement in the coming year.',
  date: 'Feb 15, 2026',
  author: 'Marcus Chen',
  category: 'Government IT',
  readTime: '12 min read',
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070',
};

const latestArticles = [
  {
    title: 'Implementing Zero Trust Architecture for Federal Agencies',
    excerpt: 'Understanding the essential security requirements for protecting sensitive government data in distributed cloud environments.',
    date: 'Feb 10, 2026',
    author: 'Sarah Jenkins',
    category: 'Cybersecurity',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'The Role of AI in Automating Federal Compliance Audits',
    excerpt: 'How machine learning models are reducing the manual burden of NIST and HIPAA compliance for large-scale organizations.',
    date: 'Feb 05, 2026',
    author: 'David Miller',
    category: 'AI & Automation',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Modernizing Legacy ERP Systems: A Strategic Roadmap',
    excerpt: 'Why organizations are moving away from monolithic architectures and how to plan a successful migration to cloud-native platforms.',
    date: 'Jan 28, 2026',
    author: 'Marcus Chen',
    category: 'Cloud Strategy',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
  },
];

const industryInsights = [
  {
    title: 'Cloud Sovereignty: Navigating Data Residency in 2026',
    date: 'Jan 20, 2026',
    category: 'Cloud',
  },
  {
    title: 'The Impact of Quantum Computing on Modern Encryption',
    date: 'Jan 15, 2026',
    category: 'Security',
  },
  {
    title: 'Sustainable IT: Reducing the Carbon Footprint of Data Centers',
    date: 'Jan 10, 2026',
    category: 'Sustainability',
  },
];

export default function Blog() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Knowledge Hub</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Insights on <span className="text-primary">Digital Transformation</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Expert perspectives on government IT, cybersecurity, and enterprise software engineering for decision-makers.
            </p>
          </motion.div>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden bg-slate-900 mb-32 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8">
                <span className="bg-primary text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                  Featured Article
                </span>
              </div>
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-6 text-slate-400 text-sm mb-8">
                <span className="flex items-center gap-2"><Calendar size={16} /> {featuredPost.date}</span>
                <span className="flex items-center gap-2"><Clock size={16} /> {featuredPost.readTime}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-12 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <User size={14} />
                  </span>
                  <span className="text-white font-bold text-sm">{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-500">
                  <Share2 size={20} className="hover:text-white cursor-pointer transition-colors" />
                  <Bookmark size={20} className="hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Latest Articles */}
          <div className="lg:col-span-2 space-y-20">
            <div className="flex items-center justify-between border-b border-slate-100 pb-8">
              <h3 className="text-2xl font-bold text-slate-900">Latest Articles</h3>
              <Link to="/blog" className="text-primary font-bold text-sm uppercase tracking-widest hover:underline">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {latestArticles.map((post, idx) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 shadow-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h4>
                  <p className="text-slate-600 mb-6 line-clamp-2 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.2em]">
                    <User size={12} /> {post.author}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-16">
            {/* Industry Insights */}
            <div className="bg-slate-50 rounded-[2.5rem] p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Industry Insights</h3>
              <div className="space-y-8">
                {industryInsights.map((insight) => (
                  <div key={insight.title} className="group cursor-pointer">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 block">{insight.category}</span>
                    <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-2">
                      {insight.title}
                    </h4>
                    <span className="text-xs text-slate-400">{insight.date}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-4 border-2 border-primary/20 text-primary font-black text-xs uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all">
                Download Report
              </button>
            </div>

            {/* Newsletter */}
            <div className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Executive Briefing</h3>
              <p className="text-white/70 text-sm mb-8 relative z-10">
                Weekly insights on technology strategy for corporate and government leaders.
              </p>
              <form 
                action="https://formsubmit.co/taimooryasin21@gmail.com" 
                method="POST"
                className="space-y-4 relative z-10"
              >
                <input type="hidden" name="_subject" value="New Newsletter Subscription - Maple Solutions" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Business Email"
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button 
                  type="submit"
                  className="w-full bg-white text-primary py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-32 pt-32 border-t border-slate-100">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Deep Dives</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Technical Case Studies</h3>
            </div>
            <Link to="/portfolio" className="bg-slate-900 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary transition-all">
              View All Case Studies
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', title: 'Modernizing a Legacy State ERP System in 6 Months' },
              { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c', title: 'Scaling a Federal Health Portal to 10M+ Users' },
              { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31', title: 'Zero-Trust Implementation for Defense Contractors' }
            ].map((study, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-slate-100 rounded-3xl mb-6 overflow-hidden">
                  <img
                    src={`${study.img}?auto=format&fit=crop&q=80&w=800`}
                    alt="Case Study"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">{study.title}</h4>
                <p className="text-sm text-slate-500">Enterprise Modernization • 2026</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
