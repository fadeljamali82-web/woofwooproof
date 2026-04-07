import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/src/components/Button';

export const Contact = () => {
  return (
    <div className="pt-20 bg-brand-dark min-h-screen">
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-6">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[10vw] mb-12 leading-[0.85]"
              >
                Start a <br />
                <span className="text-brand-straw italic">conversation.</span>
              </motion.h1>
              
              <div className="space-y-12 text-2xl text-brand-white/60 max-w-md">
                <p>Whether you're a small shop or a global retailer, we'd like to hear from you.</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <motion.form 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-12 bg-brand-white/5 p-8 md:p-16 border border-brand-white/10"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const type = formData.get('type');
                  const message = formData.get('message');
                  
                  const mailtoLink = `mailto:woofwoofproof@gmail.com?subject=Inquiry: ${type}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                  window.location.href = mailtoLink;
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest text-brand-straw">Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      className="w-full bg-transparent border-b border-brand-white/20 py-4 focus:border-brand-straw outline-none transition-colors text-xl"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest text-brand-straw">Email</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-transparent border-b border-brand-white/20 py-4 focus:border-brand-straw outline-none transition-colors text-xl"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs uppercase tracking-widest text-brand-straw">Inquiry Type</label>
                  <select 
                    name="type"
                    className="w-full bg-transparent border-b border-brand-white/20 py-4 focus:border-brand-straw outline-none transition-colors text-xl appearance-none cursor-pointer"
                  >
                    <option className="bg-brand-dark">General Inquiry</option>
                    <option className="bg-brand-dark">Small Business Retail</option>
                    <option className="bg-brand-dark">Corporate Retail</option>
                    <option className="bg-brand-dark">Press</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-xs uppercase tracking-widest text-brand-straw">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-brand-white/20 py-4 focus:border-brand-straw outline-none transition-colors text-xl resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-none py-6 text-xl">Send Message</Button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
