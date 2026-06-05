import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ArrowRight, ArrowUpRight, Cpu, Globe, Terminal, Zap, Fingerprint, Activity, Code2, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { NebulaBriefingCTA } from "./components/NebulaBriefingCTA";
import { motion } from "framer-motion";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Componente temporaneo per testare la Navigation Superiore in stile Glassmorphism
const GlassTopNav = () => {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[150] w-[90%] max-w-2xl hidden md:flex items-center justify-between px-6 py-4 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_8px_32px_rgba(0,0,0,0.6)]"
    >
      <div className="text-white font-sans font-bold tracking-tight text-lg">ID.</div>