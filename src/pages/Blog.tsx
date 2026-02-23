import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'The Future of AI in Enterprise Operations',
    excerpt: 'How leading companies are leveraging artificial intelligence to improve customer services and automate administrative workflows.',
    date: 'Nov 05, 2025',
    author: 'Tech Lead',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Cybersecurity Compliance: Best Practices for Modern Enterprises',
    excerpt: 'Understanding the essential security requirements for protecting sensitive corporate data in cloud-based systems.',
    date: 'Dec 18, 2025',
    author: 'Security Expert',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Modernizing Legacy Systems: A Strategic Approach',
    excerpt: 'Why organizations are moving away from monolithic architectures and how to plan a successful cloud migration.',
    date: 'Jan 22, 2026',
    author: 'Solutions Architect',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
  },
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Insights & Perspectives</h1>
          <p className="text-xl text-slate-600">
            Stay informed with the latest trends in technology and digital transformation.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-8 shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} /> {post.author}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={18} />
              </span>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-32 bg-slate-50 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-slate-600 text-lg">
              Get the latest insights on IT and digital transformation delivered straight to your inbox.
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 w-full sm:w-80"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
