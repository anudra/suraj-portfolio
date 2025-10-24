'use client';

import { useRef } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { contactData } from '@/lib/contactData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Contact() {
  const titleRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  const isTitleVisible = useScrollAnimation(titleRef, 0.1);
  const isContactInfoVisible = useScrollAnimation(contactInfoRef, 0.1);
  const isFormVisible = useScrollAnimation(formRef, 0.1);

  return (
    <section id="contact" className="min-h-screen py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.08)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '2.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div ref={titleRef}>
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4 ${isTitleVisible ? 'animate-flip-in-horizontal' : ''}`}>{contactData.title}</h2>
                <p className={`text-lg sm:text-xl text-gray-300 leading-relaxed ${isTitleVisible ? 'animate-swing-in' : ''}`} style={{animationDelay: '0.2s'}}>
                  {contactData.subtitle}
                </p>
              </div>            {/* Contact Info */}
            <div ref={contactInfoRef} className="space-y-6">
              <div className={`flex items-center gap-4 group cursor-pointer hover-slide-bounce ${isContactInfoVisible ? 'animate-wobble-in' : ''}`} style={{animationDelay: '0.1s'}}>
                <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover-heartbeat">
                  <HiMail className="text-black w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <div className="text-white font-medium">{contactData.email}</div>
                </div>
              </div>

              <div className={`flex items-center gap-4 group cursor-pointer hover-slide-bounce ${isContactInfoVisible ? 'animate-wobble-in' : ''}`} style={{animationDelay: '0.2s'}}>
                <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover-heartbeat">
                  <HiPhone className="text-black w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Phone</div>
                  <div className="text-white font-medium">{contactData.phone}</div>
                </div>
              </div>

              <div className={`flex items-center gap-4 group cursor-pointer hover-slide-bounce ${isContactInfoVisible ? 'animate-wobble-in' : ''}`} style={{animationDelay: '0.3s'}}>
                <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover-heartbeat">
                  <HiLocationMarker className="text-black w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Location</div>
                  <div className="text-white font-medium">{contactData.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`space-y-4 ${isContactInfoVisible ? 'animate-slide-rotate-in' : ''}`} style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-bold">Follow Me</h3>
              <div className="flex gap-4">
                {contactData.socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center hover:from-gray-200 hover:to-white transition-all duration-300 transform group hover-spin-bounce ${isContactInfoVisible ? 'animate-pop-in' : ''}`}
                      title={social.name}
                      style={{animationDelay: `${0.5 + index * 0.1}s`}}
                    >
                      <IconComponent className="text-black w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div ref={formRef} className={`bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 ${isFormVisible ? 'animate-spin-grow' : ''}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all hover:border-gray-400 hover-lift-smooth"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all hover:border-gray-400 hover-lift-smooth"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all hover:border-gray-400 hover-lift-smooth"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all hover:border-gray-400 hover-lift-smooth">
                  <option>Select a service</option>
                  {contactData.services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none hover:border-gray-400 hover-lift-smooth"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 font-medium hover:shadow-xl hover-squeeze-bounce"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
