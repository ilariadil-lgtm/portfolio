import re

file_path = "src/pages/nebula/Index.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Imports
import_target = 'import { motion } from "framer-motion";'
import_replacement = '''import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagneticWrapper } from "@/components/MagneticWrapper";'''
content = content.replace(import_target, import_replacement)

# Replace hook logic
hook_target = '''  useEffect(() => {
    window.scrollTo(0, 0);'''
hook_replacement = '''  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Interactive Glow
  const [mousePosGlow, setMousePosGlow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);'''
content = content.replace(hook_target, hook_replacement)

# Replace Handle Mouse Move to include glow
mouse_target = '''    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };'''
mouse_replacement = '''    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setMousePosGlow({ 
        x: (e.clientX / window.innerWidth - 0.5) * 40, 
        y: (e.clientY / window.innerHeight - 0.5) * 40 
      });
    };'''
content = content.replace(mouse_target, mouse_replacement)


# Replace Hero and Background
start_marker = "{/* ───────────────────────────────────────────────────────────────────\n          AMBIENT EFFECTS (AWWWARDS DARK LUXURY)"
end_marker = "{/* ───────────────────────────────────────────────────────────────────\n             TRI-LAYER CINEMATIC MARQUEE"

pattern = re.compile(re.escape(start_marker) + r".*?" + re.escape(end_marker), re.DOTALL)

new_hero = """{/* ───────────────────────────────────────────────────────────────────
          AMBIENT EFFECTS (AWWWARDS DARK LUXURY)
          ─────────────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#030303]">
        {/* Interactive Radial Copper Glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-orange-600/10 blur-[150px]" 
          animate={{ x: mousePosGlow.x + "%", y: mousePosGlow.y + "%" }}
          transition={{ type: "spring", stiffness: 20, damping: 10, mass: 1.5 }}
        />
        {/* Vertical Light Rays Pattern */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.03) 80px, rgba(255,255,255,0.03) 81px)' }} />
      </div>

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        
        {/* ───────────────────────────────────────────────────────────────────
             HERO SECTION (AWWWARDS SERIF / 3D INLINE)
             ─────────────────────────────────────────────────────────────────── */}
        <motion.section 
          style={{ y: yParallax, opacity: opacityParallax }}
          className="relative w-full min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-12 px-6"
        >
          <div className="relative w-full max-w-[1200px] mx-auto flex flex-col items-center text-center z-20">
            
            {/* Top Pill */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8 shadow-2xl overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
              <Terminal size={14} className="text-orange-200" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-300">TECH PRODUCT MANAGER & DESIGNER</span>
            </motion.div>

            {/* Split Text Reveal Headline */}
            <div className="font-serif tracking-tight text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] leading-[1.05] text-white max-w-[1000px] mx-auto flex flex-col items-center" style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', 'Georgia', serif" }}>
              
              <div className="overflow-hidden pb-2">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  Ecosistemi
                </motion.div>
              </div>

              <div className="overflow-hidden pb-4 flex items-center gap-4">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center"
                >
                  <motion.div 
                    animate={{ y: ["-5%", "5%"] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="inline-block relative w-[100px] md:w-[150px] h-[50px] md:h-[70px] rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(255,165,0,0.2)] border border-white/10 bg-black/50"
                  >
                    <img src="/assets/nebula/dark_liquid_metal.png" alt="3D Detail" className="w-full h-full object-cover scale-150 object-center mix-blend-lighten opacity-80" />
                  </motion.div>
                  <span className="ml-4">digitali</span>
                </motion.div>
              </div>

              <div className="overflow-hidden pb-2">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="italic text-neutral-300">che trasformano</span>
                </motion.div>
              </div>

              <div className="overflow-hidden pb-2">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  il mondo.
                </motion.div>
              </div>

            </div>

            {/* Hand-drawn arrow SVG (Decorative) */}
            <motion.div 
              className="absolute right-[5%] lg:right-[15%] top-[60%] lg:top-[50%] w-16 md:w-24 opacity-60 text-white hidden md:block"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.6, pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current stroke-2">
                <path d="M10 90 Q 30 10 90 10" />
                <path d="M70 10 L 90 10 L 90 30" />
              </svg>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              className="mt-8 text-neutral-400 text-base md:text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Progetto piattaforme solide, veloci ed esteticamente perfette per aziende ambiziose. Dalla brand identity allo sviluppo tecnico avanzato.
            </motion.p>

            {/* Call To Action Button (Magnetic) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              className="mt-12"
            >
              <MagneticWrapper>
                <Link to="/contatti" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-100 to-white text-black font-sans font-bold text-sm tracking-wide hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,237,213,0.3)]">
                  Inizia il progetto <ArrowRight size={18} />
                </Link>
              </MagneticWrapper>
            </motion.div>

            {/* Trust Section */}
            <motion.div 
              className="mt-20 pt-8 border-t border-white/[0.05] w-full max-w-3xl flex flex-col items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <p className="font-serif text-sm italic text-neutral-500">Collaborazioni & Tecnologie</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
                <div className="flex items-center gap-2 font-bold font-sans text-xl"><Terminal size={24}/> Next.js</div>
                <div className="flex items-center gap-2 font-bold font-sans text-xl"><Globe size={24}/> React</div>
                <div className="flex items-center gap-2 font-bold font-sans text-xl"><Code2 size={24}/> Tailwind</div>
                <div className="flex items-center gap-2 font-bold font-sans text-xl"><Activity size={24}/> Framer</div>
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
    print("Successfully polished Hero section")
else:
    print("Markers not found.")
