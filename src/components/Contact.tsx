import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle, Database, Trash2, Phone } from "lucide-react";
import { portfolioData } from "../data";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [messagesLog, setMessagesLog] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem("tanisha_contact_messages");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    localStorage.setItem("tanisha_contact_messages", JSON.stringify(messagesLog));
  }, [messagesLog]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 800));

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: formState.name,
      email: formState.email,
      subject: formState.subject || "General Inquiry",
      message: formState.message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessagesLog([newMessage, ...messagesLog]);
    setFormState({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
    setShowToast(true);

    // Hide toast after 4s
    setTimeout(() => setShowToast(false), 4000);
  };

  const clearMessagesLog = () => {
    setMessagesLog([]);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black border-t border-zinc-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec489901_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="glow-spot w-[350px] h-[350px] bg-pink-500/3 bottom-1/4 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="contact-header">
          <span className="font-mono text-xs font-semibold tracking-wider text-pink-400 bg-pink-950/20 border border-pink-500/25 px-3.5 py-1 rounded-full">
            Direct Channels
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Initiate Connection
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-content">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6" id="contact-left-col">
            <div className="bg-black p-6 sm:p-8 rounded-2xl border border-pink-500/20 shadow-sm space-y-6 text-left" id="contact-info-card">
              <h3 className="font-display font-bold text-xl text-white">
                Get In Touch
              </h3>
              <p className="text-slate-300 font-sans text-sm leading-relaxed font-light">
                Whether you want to discuss full-time software development roles, frontend internships, ML dataset analysis, or just say hello, my inbox is always open.
              </p>

              <div className="space-y-4 pt-4 border-t border-zinc-900">
                <a
                  href={`mailto:${portfolioData.socials.email}`}
                  className="flex items-center space-x-3.5 group cursor-pointer"
                  id="direct-mail"
                >
                  <div className="p-3 rounded-xl bg-pink-950/20 border border-pink-500/25 text-pink-400 group-hover:bg-pink-950/40 transition-all duration-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Email Coordinates</span>
                    <span className="font-sans font-medium text-sm text-slate-300 group-hover:text-pink-400 transition-colors">
                      {portfolioData.socials.email}
                    </span>
                  </div>
                </a>

                {portfolioData.socials.phone && (
                  <a
                    href={`tel:${portfolioData.socials.phone}`}
                    className="flex items-center space-x-3.5 group cursor-pointer"
                    id="direct-phone"
                  >
                    <div className="p-3 rounded-xl bg-pink-950/20 border border-pink-500/25 text-pink-400 group-hover:bg-pink-950/40 transition-all duration-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Voice Coordinate</span>
                      <span className="font-sans font-medium text-sm text-slate-300 group-hover:text-pink-400 transition-colors">
                        {portfolioData.socials.phone}
                      </span>
                    </div>
                  </a>
                )}

                <div className="flex items-center space-x-3.5" id="direct-location">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-slate-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Base Operations</span>
                    <span className="font-sans font-medium text-sm text-slate-300">
                      {portfolioData.socials.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profiles Box */}
              <div className="pt-6 border-t border-zinc-900 space-y-3">
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Social Coordinates</span>
                <div className="flex gap-3">
                  <a
                    href={portfolioData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-pink-500/30 hover:bg-pink-950/20 text-slate-400 hover:text-pink-400 transition-all duration-200 cursor-pointer text-sm font-semibold"
                    id="contact-linkedin"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={portfolioData.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-pink-500/30 hover:bg-pink-950/20 text-slate-400 hover:text-pink-400 transition-all duration-200 cursor-pointer text-sm font-semibold"
                    id="contact-github"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Offline persistent Message history log (Saves on client machine) */}
            {messagesLog.length > 0 && (
              <div className="bg-black p-5 rounded-2xl border border-pink-500/20 shadow-sm shadow-pink-500/5 text-left space-y-4" id="messages-history-log">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="font-mono text-xs text-slate-400 flex items-center space-x-1">
                    <Database className="w-3.5 h-3.5 text-pink-500" />
                    <span>In-Browser Dispatch Log ({messagesLog.length})</span>
                  </span>
                  <button
                    onClick={clearMessagesLog}
                    className="text-slate-400 hover:text-rose-400 p-1 rounded hover:bg-rose-950/20 transition-colors cursor-pointer"
                    title="Clear history"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {messagesLog.map((msg) => (
                    <div key={msg.id} className="p-3 bg-zinc-950 rounded-xl space-y-1 border border-zinc-900 text-xs font-mono">
                      <div className="flex justify-between items-center text-slate-400">
                        <span>From: {msg.name}</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <div className="text-pink-400">Subject: {msg.subject}</div>
                      <p className="text-slate-300 leading-normal line-clamp-2 mt-1">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7" id="contact-right-col">
            <div className="bg-black p-6 sm:p-8 rounded-2xl border border-pink-500/20 shadow-sm text-left" id="contact-form-card">
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Transmit Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" id="form-contact">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="space-y-1.5"
                  >
                    <label className="text-xs text-slate-400 font-mono uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:bg-black focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all"
                      placeholder="e.g., Tanisha K."
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="space-y-1.5"
                  >
                    <label className="text-xs text-slate-400 font-mono uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:bg-black focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all"
                      placeholder="e.g., mail@domain.com"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="space-y-1.5"
                >
                  <label className="text-xs text-slate-400 font-mono uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:bg-black focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all"
                    placeholder="How can I help you?"
                  />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="space-y-1.5"
                >
                  <label className="text-xs text-slate-400 font-mono uppercase tracking-wider">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:bg-black focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all resize-none"
                    placeholder="Draft your message here..."
                  />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex justify-end pt-2"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting || !formState.name || !formState.email || !formState.message}
                    className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-sans text-sm font-bold shadow-sm shadow-pink-500/10 hover:shadow-md hover:shadow-pink-500/15 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    id="btn-submit-contact"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Transmitting..." : "Transmit Dispatch"}</span>
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animated Toast Alert */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-black border border-emerald-500/30 bg-emerald-950/20 shadow-xl flex items-center space-x-3.5 max-w-sm text-left"
            id="contact-toast-success"
          >
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-white">
                Message Transmitted!
              </h4>
              <p className="font-sans text-xs text-emerald-400 mt-0.5">
                Successfully logged on this browser session.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
