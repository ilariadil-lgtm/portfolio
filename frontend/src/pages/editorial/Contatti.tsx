import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Linkedin, Github, ArrowRight, MapPin, Globe, Terminal } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/api";

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await api.sendContactMessage(formData);
      setStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />
      
      {/* ═══════════════════════════════════════════════════════════════════
           HERO — CONTACT UPLINK STATION
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="pt-32 md:pt-48 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Monumental Text */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-[0.02] pointer-events-none">
          <span className="font-display text-[25vw] font-black uppercase tracking-tighter">CONTACT</span>
        </div>

        <div className="max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
               <span className="font-typewriter text-[9px] uppercase tracking-[0.5em] text-primary">Communication_Hub // v2.4</span>
               <div className="w-12 h-[1px] bg-primary/20" />
            </div>
            <h1 className="font-display text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter mb-12">
              INITIATE <br />
              <span className="text-primary italic">UPLINK.</span>
            </h1>
            <p className="font-body text-xl text-[#3d0f1a]/60 leading-relaxed max-w-xl border-l border-primary/20 pl-8">
              Ogni grande sistema digitale inizia con un protocollo di comunicazione. 
              Sincronizziamo la tua visione con le nostre competenze architettoniche.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
           CONTACT TERMINALS — SPLIT LAYOUT
           ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pb-48 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Connectivity Terminal */}
          <div className="lg:col-span-5 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <span className="font-typewriter text-[8px] uppercase tracking-[0.5em] text-primary mb-6 block">Connectivity_Hub</span>
                <h2 className="font-display text-4xl font-bold italic">Canali Diretti.</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "Email_Protocol", detail: "hello@ilariavision.com", icon: <Mail size={18} />, href: "mailto:hello@ilariavision.com" },
                  { label: "LinkedIn_Sync", detail: "Ilaria Diliberto", icon: <Linkedin size={18} />, href: "https://linkedin.com" },
                  { label: "GitHub_Repo", detail: "@ilariavision", icon: <Github size={18} />, href: "https://github.com" }
                ].map((item, i) => (
                  <motion.a 
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-8 border border-primary/5 hover:border-primary/20 bg-white/40 group transition-all"
                  >
                    <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-typewriter text-[7px] uppercase tracking-[0.3em] opacity-40 block mb-1">{item.label}</span>
                      <span className="font-display text-lg font-bold group-hover:text-primary transition-colors">{item.detail}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="p-8 border border-editorial flex items-start gap-6">
                 <MapPin size={20} className="text-primary mt-1" />
                 <div>
                    <span className="font-typewriter text-[8px] uppercase tracking-[0.4em] text-primary mb-2 block">Base_Coordinates</span>
                    <p className="font-body text-sm text-[#3d0f1a]/60">Roma, Italia // 41.9028° N, 12.4964° E</p>
                    <div className="flex items-center gap-4 mt-6 opacity-40">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                       <span className="font-typewriter text-[7px] uppercase tracking-[0.3em]">System_Active_In_Region</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Briefing Terminal (Form) */}
          <div className="lg:col-span-7 bg-[#3d0f1a] text-white p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary" />
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Terminal size={120} />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="mb-16">
                 <span className="font-typewriter text-[9px] uppercase tracking-[0.6em] text-primary/60 mb-6 block">Mission_Briefing_Protocol</span>
                 <h2 className="font-display text-5xl font-black">Invia un Messaggio.</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <label className="font-typewriter text-[8px] uppercase tracking-[0.4em] opacity-40">Name_ID</label>
                    <input 
                      type="text" 
                      required 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary transition-colors outline-none font-typewriter text-[11px] uppercase tracking-widest placeholder:text-white/10" 
                      placeholder="ENTER_NAME"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-typewriter text-[8px] uppercase tracking-[0.4em] opacity-40">Return_Email</label>
                    <input 
                      type="email" 
                      required 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary transition-colors outline-none font-typewriter text-[11px] uppercase tracking-widest placeholder:text-white/10" 
                      placeholder="ADDR@DOMAIN.COM"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="font-typewriter text-[8px] uppercase tracking-[0.4em] opacity-40">Subject_Line</label>
                  <input 
                    type="text" 
                    required 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary transition-colors outline-none font-typewriter text-[11px] uppercase tracking-widest placeholder:text-white/10" 
                    placeholder="DEFINE_MISSION_SCOPE"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-typewriter text-[8px] uppercase tracking-[0.4em] opacity-40">Message_Data</label>
                  <textarea 
                    required 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary transition-colors outline-none font-body text-sm placeholder:text-white/10 resize-none" 
                    placeholder="Describe your vision and technical requirements..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="group relative flex items-center justify-between w-full p-8 border border-primary/20 hover:bg-primary transition-all duration-700 disabled:opacity-50"
                >
                  <div className="flex items-center gap-6 relative z-10">
                     <span className="font-typewriter text-[11px] uppercase tracking-[0.5em] group-hover:text-white transition-colors">
                        {status === 'loading' ? 'TRANSMITTING...' : 'INITIATE_TRANSMISSION'}
                     </span>
                  </div>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-4 transition-transform duration-700" />
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 font-typewriter text-[9px] uppercase tracking-widest"
                    >
                      Transmission_Success // We will sync soon.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 font-typewriter text-[9px] uppercase tracking-widest"
                    >
                      Transmission_Error // Connection unstable.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
