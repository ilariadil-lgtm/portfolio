import React, { useEffect, useState, useRef } from "react";
import { api } from "@/lib/api";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { HeroCanvas } from "./components/HeroCanvas";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const skills = [
  "React & Next.js", "WebGL & Three.js", "Framer Motion", "Tailwind CSS",
  "UI/UX Design", "Typography", "Art Direction", "Interaction Design",
  "Django REST", "PostgreSQL", "System Architecture", "Performance Optimization"
];

const NebulaIndex = () => {
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([]);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);

  // Mouse Trail Logic for Projects
  const [hoveredProject, setHoveredProject] = useState<any | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const springX = useSpring(0, { stiffness: 100, damping: 20 });
  const springY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    springX.set(mousePos.x);
    springY.set(mousePos.
                    <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-white/40">{project.type || "Digital Platform"}</span>
                  </div>
                  <span className="font-fraunces italic text-lg md:text-2xl text-white/30 group-hover:text-white transition-colors duration-500">{project.year || "2024"}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mouse Trail Image */}
          <motion.div 
             className="pointer-events-none fixed top-0 left-0 w-[300px] h-[400px] z-50 overflow-hidden mix-blend-exclusion"
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
                  alt="preview"
                  className="w-full h-full object-cover grayscale"
                />
             )}
          </motion.div>
        </section>

      </main>

      <div className="pointer-events-auto">
         <NebulaBriefingCTA />
         <NebulaFooter />
      </div>
    </div>
  );
};

export default NebulaIndex;
