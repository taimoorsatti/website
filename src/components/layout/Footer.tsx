import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white leading-tight">MAPLE</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">Business & IT Solutions</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Maple Business & IT Solutions LLC is a premier U.S.-based IT consulting firm specializing in federal, state, and private sector digital transformation.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Case Studies</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6">Our Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Data Analytics</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Cybersecurity</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white font-bold">Contact Us</h4>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <Mail className="text-primary shrink-0" size={18} />
              <div className="flex flex-col">
                <a href="mailto:info@mapleitsol.com" className="hover:text-primary">info@mapleitsol.com</a>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="text-primary shrink-0" size={18} />
              <a href="tel:+17165342595" className="hover:text-primary">+1 (716) 534-2595</a>
            </div>
            <div className="flex gap-3">
              <MapPin className="text-primary shrink-0" size={18} />
              <p>4408 Waskom Dr, Plano, TX 75024, United States</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Maple Business & IT Solutions LLC. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
