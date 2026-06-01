import re

file_path = "src/pages/nebula/Index.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Ambient Effects and Hero Section
old_hero_start = "{/* ───────────────────────────────────────────────────────────────────\n          AMBIENT EFFECTS (SUPERHUMAN DARK GLASSMORPHISM)"
old_hero_end = "TRI-LAYER CINEMATIC MARQUEE"

pattern = re.compile(re.escape(old_hero_start) + r".*?\{\/\* ───────────────────────────────────────────────────────────────────\n             " + re.escape("TRI-LAYER CINEMATIC MARQUEE"), re.DOTALL)

new_hero = """{/* ───────────────────────────────────────────────────────────────────
          AMBIENT EFFECTS (Y2K BRUTALIST NOISE)
          ─────────────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050505]">
        {/* Deep background color */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] to-black" />
        {/* Grain Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.25] mix-blend-screen pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </div>

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        
        {/* ───────────────────────────────────────────────────────────────────
             HERO SECTION (Y2K BRUTALIST STYLE)
             ─────────────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-32 px-6">
          
          {/* Registration Marks */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 text-white/30 font-mono text-2xl font-light pointer-events-none">+</div>
          <div className="absolute top-8 right-8 md:top-12 md:right-12 text-white/30 font-mono text-2xl font-light pointer-events-none">+</div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white/30 font-mono text-2xl font-light pointer-events-none">+</div>
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-white/30 font-mono text-2xl font-light pointer-events-none">+</div>

          {/* Central Liquid Metal Shape */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none mix-blend-lighten">
            <motion.img 
              src="/assets/nebula/dark_liquid_metal.png" 
              alt="Liquid Metal Shape" 
              className="w-[150%] md:w-[90%] max-w-5xl h-auto object-contain opacity-90 drop-shadow-[0_0_100px_rgba(255,255,255,0.1)]"
              animate={{ 
                rotate: [-1, 1, -1],
                scale: [0.99, 1.01, 0.99],
                y: [0, -10, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Foreground Grid Content */}
          <div className="max-w-[1400px] w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[70vh]">
            
            {/* Top Left Text */}
            <div className="md:col-span-3 md:col-start-1 absolute top-0 left-0 md:relative flex flex-col gap-2">
               <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tighter text-white uppercase drop-shadow-md">Architettura<br/>Digitale</h2>
               <p className="font-mono text-[10px] uppercase text-white/60 tracking-widest max-w-[160px] leading-relaxed">
                 L'estetica e la performance in un unico ecosistema.
               </p>
            </div>

            {/* Bottom Left Huge Text */}
            <div className="md:col-span-4 md:col-start-1 md:self-end absolute -bottom-10 left-0 md:relative mix-blend-difference z-20">
               <h1 className="font-sans font-black text-[4.5rem] md:text-[8rem] leading-[0.8] tracking-tighter text-white uppercase drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>
                 NEVER<br/>GIVE<br/>UP
               </h1>
            </div>

            {/* Central Glass Card */}
            <div className="md:col-span-4 md:col-start-5 place-self-center relative mt-32 md:mt-0 z-30">
              <motion.div 
                className="w-full min-w-[280px] md:min-w-[340px] aspect-[4/5] rounded-[2rem] bg-white/[0.02] backdrop-blur-[24px] border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)] p-8 md:p-12 flex flex-col justify-center items-center text-center group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 40, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none" />
                <h3 className="font-sans font-black text-xl text-white/90 uppercase tracking-tighter mb-6 relative z-10">Progetto ecosistemi</h3>
                <h2 className="font-display font-black text-5xl md:text-7xl text-white leading-[0.85] drop-shadow-2xl mb-6 relative z-10" style={{ letterSpacing: "-0.05em" }}>su<br/>misura</h2>
                <p className="font-mono text-[10px] text-white/60 uppercase tracking-[0.3em] relative z-10">Senza compromessi</p>
              </motion.div>
            </div>

            {/* Bottom Right Text */}
            <div className="md:col-span-3 md:col-start-10 md:self-end absolute -bottom-10 right-0 md:relative text-right flex flex-col items-end gap-2">
               <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tighter text-white uppercase drop-shadow-md">Trova<br/>l'obiettivo</h2>
               <p className="font-mono text-[10px] uppercase text-white/60 tracking-widest max-w-[160px] leading-relaxed text-right">
                 Infrastrutture robuste e identità inconfondibili.
               </p>
            </div>
            
            {/* Top Right Heavy Logo/Text */}
            <div className="md:col-span-3 md:col-start-10 md:self-start absolute top-0 right-0 md:relative text-right mix-blend-difference z-20">
               <h1 className="font-sans font-black text-6xl md:text-[6rem] leading-[0.8] tracking-tighter text-white uppercase opacity-90 drop-shadow-xl" style={{ letterSpacing: "-0.05em" }}>
                 YOU<br/>CAN
               </h1>
            </div>

          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────────────
             TRI-LAYER CINEMATIC MARQUEE"""

if old_hero_start in content and "TRI-LAYER CINEMATIC MARQUEE" in content:
    new_content = pattern.sub(new_hero, content)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Replaced Hero section")
else:
    print("Could not find patterns")
