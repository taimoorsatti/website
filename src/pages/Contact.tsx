import React from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Clock, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-xl text-slate-600">
            Ready to start your next project or have questions about our services? Reach out to our team of experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
            <form 
              action="https://formsubmit.co/taimooryasin21@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - Maple Solutions" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Subject</label>
                <select 
                  name="subject"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Government Contracting</option>
                  <option>Project Quote</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info & Booking */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600">info@mapleitsol.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-600">+1 (716) 534-2595</p>
                    <p className="text-slate-400 text-sm">Mon - Fri, 9am - 6pm CST</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                    <p className="text-slate-600">4408 Waskom Dr, Plano, TX 75024, United States</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Book a Meeting</h2>
              <p className="text-slate-600 mb-8">
                Prefer a direct conversation? Schedule a 30-minute discovery call with our solutions team.
              </p>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
                <Calendar size={20} /> Schedule on Calendly
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
