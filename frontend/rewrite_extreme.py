import re

file_path = "src/pages/nebula/Index.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "{/* ───────────────────────────────────────────────────────────────────\n          AMBIENT EFFECTS (AWWWARDS DARK LUXURY)"
end_marker = "{/* ───────────────────────────────────────────────────────────────────\n             TRI-LAYER CINEMATIC MARQUEE"

pattern = re.compile(re.escape(start_marker) + r".*?" + re.escape(end_marker), re.DOTALL)

new_hero = """{/* ───────────────────────────────────────────────────────────────────
          AMBIENT EFFECTS (EXTREME AWWWARDS THEATRICAL)
          ─────────────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black">
        {/* Deep Theatrical Glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[120vw] md:w-[80vw] h-[80vh] rounded-[100%] bg-[#b84d12] blur-[100px] md:blur-[180px] opacity-40 mix-blend-screen" 
          animate={{ x: mousePosGlow.x * 2 + "%", y: mousePosGlow.y * 2 + "%", scale: [1, 1.05, 1] }}
          transition={{ 
            x: { type: "spring", stiffness: 20, damping: 10, mass: 1.5 },
            y: { type: "spring", stiffness: 20, damping: 10, mass: 1.5 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        {/* Cinematic Vertical Striping (Curtain Effect) */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #000, #000 40px, #fff 40px, #fff 80px)' }} />
        {/* Grain/Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.2] mix-blend-screen pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      </div>

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        
        {/* ───────────────────────────────────────────────────────────────────
             HERO SECTION (OVERSIZED TYPOGRAPHY / THEATRICAL)
             ─────────────────────────────────────────────────────────────────── */}
        <motion.section 
          style={{ y: yParallax, opacity: opacityParallax }}
          className="relative w-full min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-12 px-4 md:px-12"
        >
          <div className="relative w-full mx-auto flex flex-col z-20">
            
            {/* Top Minimal Pill */}
            <motion.div 
              className="mx-auto inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.15] bg-black/40 backdrop-blur-xl mb-12 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="w-2 h-2 rounded-full bg-[#fca311] animate-pulse shadow-[0_0_10px_#fca311]" />
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/90 font-bold">Design & Engineering</span>
            </motion.div>

            {/* OVERSIZED KINETIC TYPOGRAPHY */}
            <div className="flex flex-col items-center justify-center w-full">
              
              <div className="overflow-hidden pb-4 md:pb-8 w-full flex justify-center">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-sans font-black uppercase tracking-tighter text-[13vw] md:text-[9vw] leading-[0.75] text-white drop-shadow-2xl"
                >
                  DIGITAL
                </motion.div>
              </div>

              <div className="overflow-hidden pb-4 md:pb-8 w-full flex justify-center items-center flex-wrap gap-4 md:gap-8">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif italic font-light tracking-tight text-[11vw] md:text-[8vw] leading-[0.8] text-[#fca311] drop-shadow-[0_0_40px_rgba(252,163,17,0.3)]"
                  style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', 'Georgia', serif" }}
                >
                  ecosystems
                </motion.div>

                {/* The Golden Bust Inline */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.5, delay: 0.4, type: "spring" }}
                  className="relative z-30"
                >
                  <motion.div 
                    animate={{ y: ["-8%", "8%"], rotate: ["-2deg", "2deg"] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="w-[18vw] md:w-[12vw] max-w-[200px] aspect-square rounded-full border border-white/20 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(252,163,17,0.2)] overflow-hidden flex items-center justify-center backdrop-blur-md"
                  >
                    <img src="/assets/nebula/golden_statue.png" alt="Luxury Golden Bust" className="w-[140%] h-[140%] object-cover object-center mix-blend-lighten opacity-90" />
                  </motion.div>
                </motion.div>
              </div>

              <div className="overflow-hidden pb-4 w-full flex justify-center">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="font-sans font-black uppercase tracking-tighter text-[13vw] md:text-[9vw] leading-[0.75] text-transparent drop-shadow-lg"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}
                >
                  TRANSFORMING
                </motion.div>
              </div>
              
            </div>

            {/* Decorative Hand-Drawn Element */}
            <motion.div 
              className="absolute right-[5%] md:right-[10%] top-[40%] md:top-[60%] w-20 md:w-32 opacity-80 text-[#fca311] drop-shadow-[0_0_15px_rgba(252,163,17,0.5)] z-0 hidden md:block"
              initial={{ opacity: 0, pathLength: 0, rotate: -10 }}
              animate={{ opacity: 0.8, pathLength: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current stroke-2">
                <path d="M10 20 Q 50 10 80 50 T 90 90" strokeLinecap="round" />
                <path d="M70 70 L 90 90 L 95 60" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            {/* Lower Section (Text + Button) */}
            <div className="mt-16 md:mt-24 w-full flex flex-col items-center z-20">
              <motion.p 
                className="text-neutral-300 text-center font-sans font-light text-sm md:text-xl max-w-2xl leading-relaxed mix-blend-difference"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              >
                Costruiamo interfacce audaci e infrastrutture solide per farti scalare senza limiti. Dalla brand identity allo sviluppo web avanzato.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9, type: "spring" }}
                className="mt-10 md:mt-14"
              >
                <MagneticWrapper>
                  <Link to="/contatti" className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-[2rem] bg-[#fca311] text-black font-sans font-bold text-base uppercase tracking-widest shadow-[0_20px_40px_rgba(252,163,17,0.3)] hover:shadow-[0_20px_60px_rgba(252,163,17,0.5)] transition-all overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    Book a Free Call
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </MagneticWrapper>
              </motion.div>
            </div>

            {/* Trust Line */}
            <motion.div 
              className="mt-24 pt-8 border-t border-white/[0.08] w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <p className="font-serif italic text-neutral-400 text-sm">Trusted by founders & business owners</p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="font-sans font-black text-xl tracking-tighter">NEXT.JS</span>
                <span className="font-sans font-black text-xl tracking-tighter">REACT</span>
                <span className="font-sans font-black text-xl tracking-tighter">TAILWIND</span>
                <span className="font-sans font-black text-xl tracking-tighter">FRAMER</span>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* ───────────────────────────────────────────────────────────────────
             TRI-LAYER CINEMATIC MARQUEE"""

if start_marker in content and end_marker in content:
    new_content = pattern.sub(new_hero, content)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully replaced Extreme Hero section")
else:
    print("Markers not found.")
