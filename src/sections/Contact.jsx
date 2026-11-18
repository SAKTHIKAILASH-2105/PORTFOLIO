import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { personalInfo } from '../data/portfolioData';

/**
 * ELECTRO-MECHANICAL CONTACT SECTION
 * Terminal control console aesthetic with recessed input fields,
 * one-click copy email action, and official collaboration directive.
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
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-graphite-950/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="07"
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
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-graphite-900 to-graphite-850 border border-titanium-700/80 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-copper-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-copper-400 font-mono text-xs uppercase tracking-wider mb-2 font-medium">
                <Sparkles className="w-4 h-4" />
                <span>COLLABORATION DIRECTIVE</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight leading-snug">
                "Let's Connect, Collaborate & Build Something Innovative."
              </h3>

              <p className="mt-4 text-metallic-pewter text-sm leading-relaxed">
                Whether you have an internship opportunity, a hardware design query, or wish to discuss digital VLSI architecture and embedded algorithms, I'd welcome the conversation.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="space-y-3">
              {/* Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-graphite-900/85 border border-titanium-750 hover:border-copper-500/50 transition-all flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-copper-400" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-metallic-steel block uppercase">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.socialLinks.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-copper-400 truncate block"
                    >
                      {personalInfo.socialLinks.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-titanium-800 hover:bg-titanium-700 text-slate-300 hover:text-white border border-titanium-700 transition-colors shrink-0 ml-2"
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
                className="p-4 rounded-xl bg-graphite-900/85 border border-titanium-750 hover:border-copper-500/50 transition-all flex items-center gap-3 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-titanium-800 border border-titanium-700 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-copper-400 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-metallic-steel block uppercase">
                    Professional Network
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-copper-400 transition-colors">
                    Connect on LinkedIn
                  </span>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-graphite-900/85 border border-titanium-750 hover:border-cyber-cyan/50 transition-all flex items-center gap-3 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-titanium-800 border border-titanium-700 flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5 text-cyber-neon group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-metallic-steel block uppercase">
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
            <div className="p-6 md:p-8 rounded-2xl bg-graphite-900/90 border border-titanium-750 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-4 h-4 text-copper-400" />
                <h3 className="font-mono text-xs text-copper-400 uppercase tracking-wider font-semibold">
                  DISPATCH_MESSAGE // TRANSMISSION FORM
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3"
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
                      <label className="block text-xs font-mono text-metallic-steel uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-xl bg-graphite-950/80 border border-titanium-750 text-white placeholder-titanium-500 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-metallic-steel uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-graphite-950/80 border border-titanium-750 text-white placeholder-titanium-500 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-metallic-steel uppercase tracking-wider mb-1.5">
                      Subject / Purpose *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Inquiry / Hardware Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-graphite-950/80 border border-titanium-750 text-white placeholder-titanium-500 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-metallic-steel uppercase tracking-wider mb-1.5">
                      Message Packet *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your proposal, project scope, or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-graphite-950/80 border border-titanium-750 text-white placeholder-titanium-500 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-copper-500 via-amber-500 to-copper-600 hover:from-copper-400 hover:to-amber-500 text-white font-bold font-mono text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,126,59,0.35)] hover:shadow-[0_0_30px_rgba(234,126,59,0.5)] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
