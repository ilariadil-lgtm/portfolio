import re

file_path = "/Users/ilariadiliberto/Desktop/Progetti/portfolio-1/frontend/src/pages/nebula/Index.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "{/* INTERACTIVE SELECTED WORKS (LIST WITH MOUSE TRAIL) */}"
end_marker = "</section>"

pattern = re.compile(re.escape(start_marker) + r".*?" + re.escape(end_marker), re.DOTALL)

new_section = """{/* INTERACTIVE SELECTED WORKS (BRUTALIST GRID & MOUSE TRAIL) */}
        <section className="relative py-32 border-t border-white/10 bg-[#020202] pointer-events-auto overflow-hidden">
          
          {/* Subtle Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[#d4af37] opacity-[0.03] blur-[120px] pointer-events-none" />

          {/* Architectural Background Grid */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-full w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-4 md:grid-cols-12 gap-0">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white/[0.02] h-full hidden md:block" />
              ))}
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 z-10">
            {/* Header */}
            <div className="mb-24 md:mb-32">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#d4af37] mb-6 block">04 — Lavori Selezionati</span>
              <h2 className="font-bricolage text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-none text-white">
                Selected Works
              </h2>
            </div>

            {/* Project List */}
            <div className="flex flex-col border-t border-white/10">
              {featuredProjects.map((project, index) => (
                <Link 
                  key={project.id || index} 
                  to={`/progetti/${project.slug}`}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative flex flex-col md:flex-row md:items-center py-12 md:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500"
                >
                  {/* Left Number */}
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <span className="font-bricolage font-black text-6xl md:text-8xl text-white/5 group-hover:text-white/10 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Title & Tags */}
                  <div className="md:w-3/4 flex flex-col justify-center gap-3">
                    <h3 className="font-bricolage text-4xl md:text-6xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#d4af37]">
                      {project.type || "BRAND IDENTITY • UI/UX DESIGN • WEB"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="mt-20 text-center">
              <MagneticWrapper>
                <Link to="/progetti" className="inline-flex items-center gap-4 text-white/50 font-mono text-xs uppercase tracking-[0.3em] hover:text-[#d4af37] transition-colors pb-4 border-b border-white/10 hover:border-[#d4af37]">
                  Tutto l'Archivio <ArrowUpRight size={16} />
                </Link>
              </MagneticWrapper>
            </div>
          </div>

          {/* Mouse Trail Image */}
          <motion.div 
             className="pointer-events-none fixed top-0 left-0 w-[320px] h-[420px] z-50 overflow-hidden shadow-2xl mix-blend-exclusion"
             style={{ 
               x: springX, 
               y: springY,
               translateX: "-50%",
               translateY: "-50%",
               opacity: hoveredProject ? 1 : 0,
               scale: hoveredProject ? 1 : 0.8,
             }}
          >
             {hoveredProject && (
                <img 
                  src={hoveredProject.main_image?.startsWith('/') ? hoveredProject.main_image : (hoveredProject.main_image ? `${BASE_URL}${hoveredProject.main_image}` : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')} 
                  alt={hoveredProject.title}
                  className="w-full h-full object-cover grayscale opacity-90"
                />
             )}
          </motion.div>
        </section>"""

if start_marker in content and end_marker in content:
    new_content = pattern.sub(new_section, content)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Success: Replaced Selected Works section")
else:
    print("Error: Markers not found")

