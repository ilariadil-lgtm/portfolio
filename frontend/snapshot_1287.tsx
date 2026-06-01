import React, { useEffect, useState, Suspense } from "react";
import { api } from "@/lib/api";
import { ArrowRight, ArrowUpRight, Cpu, Globe, Terminal, Zap, Fingerprint, Activity, Code2, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { RevealText } from "@/components/RevealText";
import { HeroCanvas } from "./components/HeroCanvas";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';



const NebulaIndex = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Interactive Glow
  const [mousePosGlow, setMousePosGlow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const [projData, servData] = await Promise.all([
          api.getProjects(),
          api.getServices()
 
                  />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-16 w-full lg:w-2/3">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-outfit font-light text-white/50 group-hover:text-white transition-colors duration-500 w-full md:w-2/3">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-[#d4af37] group-hover:text-white/60 transition-colors hidden md:block">
                    {item.type}
                  </span>
                </div>
                
                <div className="relative z-10 opacity-30 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-4 text-white">
                  <ArrowRight size={28} strokeWidth={1} />
                </div>
              </Link>
            ))}
          </div>
          </div>
          
          <div className="flex justify-center mt-24">
            <Link to="/progetti" className="group flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white hover:text-white/70 transition-colors">
              <span className="relative">
                Visualizza l'Archivio Completo
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-700 ease-out" />
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </section>

        <NebulaBriefingCTA />

        <NebulaFooter />
      </main>
    </div>
  );
};

export default NebulaIndex;
