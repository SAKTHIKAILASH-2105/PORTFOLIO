import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Copy, Check, Terminal, Sparkles, MessageSquare } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { personalInfo } from '../data/portfolioData';

/**
 * Contact Section
 * Professional contact form, copy email action, social links, and closing statement
 */
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending packet
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-dark-950/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="06"
          title="Get In Touch"
          subtitle="Open for internships, core engineering roles, hardware research projects, and technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Callouts (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Closing Statement Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-dark-900 to-dark-850 border border-cyber-cyan/30 shadow-cyber relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>COLLABORATION DIRECTIVE</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight leading-snug">
                "Let's Connect, Collaborate & Build Something Innovative."
              </h3>

              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                Whether you have an internship opportunity, a hardware design query, or wish to discuss digital VLSI architecture and embedded algorithms, I'd welcome the conversation.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="space-y-3">
              {/* Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-dark-900/80 border border-dark-750 hover:border-cyber-cyan/40 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyber-cyan" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.socialLinks.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-cyber-neon truncate block"
                    >
                      {personalInfo.socialLinks.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-dark-800 hover:bg-dark-750 text-slate-300 hover:text-white border border-dark-700 transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-dark-900/80 border border-dark-750 hover:border-blue-500/40 transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">
                    Professional Network
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Connect on LinkedIn
                  </span>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-dark-900/80 border border-dark-750 hover:border-cyber-cyan/40 transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5 text-slate-300 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">
                    Code Repositories
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyber-cyan transition-colors">
                    Explore GitHub Profile
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 md:p-8 rounded-2xl bg-dark-900/90 border border-dark-750 backdrop-blur-xl shadow-cyber-card">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-4 h-4 text-cyber-cyan" />
                <h3 className="font-mono text-xs text-cyber-cyan uppercase tracking-wider">
                  DISPATCH_MESSAGE // TRANSMISSION FORM
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Transmission Dispatched Successfully!
                  </h4>
                  <p className="text-xs font-mono text-slate-300">
                    Thank you for reaching out. Sakthi Kailash will review your message and reply promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-dark-750 text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-dark-750 text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Subject / Purpose *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Inquiry / Hardware Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-dark-750 text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Message Packet *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your proposal, project scope, or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-dark-750 text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyber-cyan to-blue-600 hover:from-cyber-neon hover:to-blue-500 text-dark-950 font-bold font-mono text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.45)] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
                        <span>ENCRYPTING & TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND MESSAGE TRANSMISSION</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
