import re

file_path = "src/pages/nebula/Index.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the Hero Section to act like a sharp poster composition
old_hero_start = "{/* ───────────────────────────────────────────────────────────────────\n          AMBIENT EFFECTS (Y2K BRUTALIST NOISE)"
old_hero_end = "TRI-LAYER CINEMATIC MARQUEE"

pattern = re.compile(re.escape(old_hero_start) + r".*?\{\/\* ───────────────────────────────────────────────────────────────────\n             " + re.escape("TRI-LAYER CINEMATIC MARQUEE"), re.DOTALL)

new_hero = """{/* ───────────────────────────────────────────────────────────────────
          AMBIENT EFFECTS (Y2K BRUTALIST NOISE)
          ─────────────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#070709]">
        {/* Grain Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.25] mix-blend-screen pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </div>

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        
        {/* ───────────────────────────────────────────────────────────────────
             HERO SECTION (Y2K BRUTALIST STYLE - POSTER COMPOSITION)
             ─────────────────────────────────────────────────────────────────── */}
        <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden py-12 px-6">
          
          {/* Registration Marks */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 text-white/50 font-mono text-xl md:text-2xl font-light pointer-events-none">+</div>
          <div className="absolute top-8 right-8 md:top-12 md:right-12 text-white/50 font-mono text-xl md:text-2xl font-light pointer-events-none">+</div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white/50 font-mono text-xl md:text-2xl font-light pointer-events-none">+</div>
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-white/50 font-mono text-xl md:text-2xl font-light pointer-events-none">+</div>

          {/* POSTER CONTAINER */}
          <div className="relative w-full max-w-[1200px] mx-auto h-[85vh] min-h-[700px] flex items-center justify-center">
            
            {/* The Main 3D Sculpture (Foreground, sharp, distinct) */}
            <motion.img 
              src="/assets/nebula/dark_liquid_metal.png" 
              alt="Liquid Metal Shape" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] lg:h-[110%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: "-50%", x: "-50%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Typography Layers (Behind and slightly over the sculpture) */}
            
            {/* Top Left Text (Small utility) */}
            <div className="absolute top-[10%] left-0 md:left-[5%] z-20 flex flex-col gap-2 max-w-[200px]">
               <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tighter text-white uppercase leading-[0.9]">Find your<br/>way</h2>
               <p className="font-mono text-[10px] md:text-[11px] font-bold text-white uppercase tracking-tight leading-snug">
                 Some people need a hint of what to do and how to be, in which direction to go
               </p>
            </div>

            {/* Bottom Right Text (Small utility) */}
            <div className="absolute bottom-[15%] right-0 md:right-[5%] z-20 flex flex-col gap-2 max-w-[220px]">
               <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tighter text-white uppercase leading-[0.9]">Find the<br/>target</h2>
               <p className="font-mono text-[10px] md:text-[11px] font-bold text-white uppercase tracking-tight leading-snug">
                 When you have a goal, you have no barriers. You confidently find solutions, you don't stand in one place.
               </p>
            </div>

            {/* Top Right Heavy Logo/Text */}
            <div className="absolute top-[5%] right-[2%] md:right-[10%] z-0">
               <h1 className="font-sans font-black text-[5rem] md:text-[8rem] lg:text-[11rem] leading-[0.75] tracking-tighter text-white uppercase drop-shadow-2xl" style={{ letterSpacing: "-0.07em" }}>
                 WEB<br/>DEV
               </h1>
            </div>

            {/* Bottom Left Huge Text */}
            <div className="absolute bottom-[2%] left-[2%] md:left-[5%] z-20">
               <h1 className="font-sans font-black text-[4.5rem] md:text-[7rem] lg:text-[10rem] leading-[0.75] tracking-tighter text-white uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]" style={{ letterSpacing: "-0.05em", WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
                 DIGI<br/>TAL<br/>ARC<br/>HIT<br/>ECT
               </h1>
            </div>

            {/* Central Glass Card (Foreground) */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] md:-translate-y-1/2 w-[280px] md:w-[320px] aspect-[4/5] rounded-[2rem] bg-white/[0.04] backdrop-blur-[20px] border border-white/[0.1] shadow-[0_40px_100px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)] p-8 flex flex-col justify-center items-center text-center z-30 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent pointer-events-none" />
              <h3 className="font-sans font-black text-xl md:text-2xl text-white uppercase tracking-tighter mb-4 relative z-10 drop-shadow-lg leading-tight">Progetto ecosistemi</h3>
              <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-[0.8] drop-shadow-2xl mb-6 relative z-10">su<br/>misura</h2>
              <p className="font-mono text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-widest relative z-10 drop-shadow-md">Senza compromessi</p>
            </motion.div>

          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────────────
             TRI-LAYER CINEMATIC MARQUEE"""

if old_hero_start in content and "TRI-LAYER CINEMATIC MARQUEE" in content:
    new_content = pattern.sub(new_hero, content)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Replaced Hero section to match Poster strictly")
else:
    print("Could not find patterns")
