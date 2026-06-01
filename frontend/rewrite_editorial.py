import re

file_path = "src/pages/nebula/Index.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "{/* ───────────────────────────────────────────────────────────────────\n          AMBIENT EFFECTS (EXTREME AWWWARDS THEATRICAL)"
end_marker = "{/* ───────────────────────────────────────────────────────────────────\n             TRI-LAYER CINEMATIC MARQUEE"

pattern = re.compile(re.escape(start_marker) + r".*?" + re.escape(end_marker), re.DOTALL)

new_hero = """{/* ───────────────────────────────────────────────────────────────────
          AMBIENT EFFECTS (CLEAN EDITORIAL LUXURY)
          ─────────────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#020202]">
        {/* Dark Fluid Mesh Gradient */}
        <motion.div 
          className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#4a1c10] blur-[120px] md:blur-[160px] opacity-20 mix-blend-screen"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#20100a] blur-[100px] md:blur-[140px] opacity-30"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        
        {/* ───────────────────────────────────────────────────────────────────
             HERO SECTION (CLEAN EDITORIAL)
             ─────────────────────────────────────────────────────────────────── */}
        <motion.section 
          style={{ y: yParallax, opacity: opacityParallax }}
          className="relative w-full min-h-[100svh] flex flex-col justify-center pt-24 pb-8 px-6 md:px-16 lg:px-24"
        >
          {/* Asymmetric Grid */}
          <div className="relative w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20 flex-grow">
            
            {/* Left Content Column (Typography) */}
            <div className="col-span-1 lg:col-span-7 flex flex-col items-start justify-center pt-12 md:pt-0">
              
              <motion.div 
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 lg:mb-12"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/70">Creative Tech Partner</span>
              </motion.div>

              <div className="flex flex-col gap-1 w-full">
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans font-light tracking-tight text-[13vw] lg:text-[7vw] leading-[0.9] text-white"
                  >
                    Designing
                  </motion.h1>
                </div>
                
                <div className="overflow-hidden flex items-center gap-4">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif italic font-light tracking-tight text-[14vw] lg:text-[7.5vw] leading-[0.9] text-[#d4af37]"
                    style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', 'Georgia', serif" }}
                  >
                    digital
                  </motion.span>
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans font-light tracking-tight text-[13vw] lg:text-[7vw] leading-[0.9] text-white/40"
                  >
                    futures.
                  </motion.span>
                </div>
              </div>

              <motion.p 
                className="text-neutral-400 font-sans font-light text-base md:text-lg max-w-md leading-relaxed mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Costruiamo interfacce audaci e infrastrutture solide per farti scalare senza limiti. Dalla brand identity allo sviluppo web avanzato.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-12"
              >
                <MagneticWrapper>
                  <Link to="/contatti" className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 hover:border-white/50 bg-transparent text-white font-sans text-sm tracking-widest uppercase transition-all duration-500 overflow-hidden">
                    <span className="relative z-10">Inizia un progetto</span>
                    <ArrowUpRight size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </MagneticWrapper>
              </motion.div>
            </div>

            {/* Right Content Column (Visual Asset) */}
            <div className="col-span-1 lg:col-span-5 relative h-full min-h-[40vh] lg:min-h-[70vh] flex items-center justify-center lg:justify-end pointer-events-none mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, filter: "blur(20px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[80vw] lg:w-full max-w-[600px] aspect-[3/4]"
              >
                {/* Fade masks so the bust blends into the pure black void */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] pointer-events-none" />
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#020202] via-transparent to-transparent opacity-80 pointer-events-none" />
                <img 
                  src="/assets/nebula/golden_statue.png" 
                  alt="Luxury Golden Roman Bust" 
                  className="w-full h-full object-cover object-center mix-blend-lighten"
                />
              </motion.div>
            </div>
            
          </div>

          {/* Trust Line */}
          <motion.div 
            className="mt-16 border-t border-white/5 w-full pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="font-serif italic text-neutral-500 text-sm">Trusted by elegant digital spaces</p>
            <div className="flex flex-wrap items-center gap-6 md:gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-sans font-medium text-xs tracking-widest uppercase">Next.js</span>
              <span className="font-sans font-medium text-xs tracking-widest uppercase">React</span>
              <span className="font-sans font-medium text-xs tracking-widest uppercase">Tailwind</span>
              <span className="font-sans font-medium text-xs tracking-widest uppercase">Framer</span>
            </div>
          </motion.div>

        </motion.section>

        {/* ───────────────────────────────────────────────────────────────────
             TRI-LAYER CINEMATIC MARQUEE"""

if start_marker in content and end_marker in content:
    new_content = pattern.sub(new_hero, content)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully replaced with Editorial Luxury section")
else:
    print("Markers not found.")
