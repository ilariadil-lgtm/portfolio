import { motion } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { NebulaFooter } from "./components/NebulaFooter";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { usePageMeta } from "@/hooks/usePageMeta";
import { BriefingCTA } from "@/components/BriefingCTA";
import { ArrowRight } from "lucide-react";

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const Blog = () => {
  usePageMeta({
    title: "Blog",
    description: "Riflessioni su design, sviluppo web e strategia digitale. Articoli tecnici e pensieri sul mestiere di costruire prodotti digitali.",
  });

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await api.getBlogPosts();
        setPosts(data.results || data);
      } catch (error) {
        console.error("Errore blog:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen pl-0 md:pl-32 bg-[#030712] text-slate-100 overflow-hidden selection:bg-cyan-500/30">
      <NebulaNav />

      {/* HERO */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <span
            className="font-sans font-black tracking-tighter font-black text-slate-100/[0.025] pr-4"
            style={{ fontSize: "clamp(80px, 18vw, 240px)", lineHeight: 1 }}
          >
            JOURNAL
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono tracking-widest text-[11px] uppercase tracking-[0.4em] text-cyan-400 font-bold">
                TECHNICAL JOURNAL
              </span>
              <div className="w-10 h-[1px] bg-cyan-500/25" />
            </div>
            <h1
              className="font-sans font-black tracking-tighter font-bold leading-[0.85] tracking-tighter text-slate-100"
              style={{ fontSize: "clamp(3rem, 7vw, 5.8rem)" }}
            >
              Pensieri e<br />
              <span className="text-cyan-400 ">riflessioni.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug || post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group border-t border-white/10 pt-10"
                >
                  {post.image && (
                    <div className="overflow-hidden mb-6 aspect-video">
                      <img
                        src={post.image.startsWith('http') || post.image.startsWith('/') ? post.image : `${BASE_URL}${post.image}`}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4 font-mono tracking-widest text-[9px] uppercase tracking-[0.35em] text-slate-100/40 font-bold">
                    <span>{new Date(post.created_at).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    {post.tags && <><span>·</span><span>{post.tags}</span></>}
                  </div>
                  <h2 className="font-sans font-black tracking-tighter text-2xl md:text-3xl font-bold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="font-sans font-light text-slate-300 text-[15px] text-slate-100/60 leading-relaxed line-clamp-3 mb-6">
                    {post.content}
                  </p>
                  <span className="group/link inline-flex items-center gap-2 font-mono tracking-widest text-[9px] uppercase tracking-[0.35em] text-cyan-400 font-bold">
                    Leggi
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-24 text-center border-t border-white/10"
            >
              <span className="font-mono tracking-widest text-[11px] uppercase tracking-[0.4em] text-cyan-400 font-bold block mb-6">
                IN ARRIVO
              </span>
              <p className="font-sans font-black tracking-tighter text-3xl md:text-4xl font-bold text-slate-100 ">
                Presto nuovi articoli.
              </p>
              <p className="font-sans font-light text-slate-300 text-slate-100/50 mt-4">
                Sto preparando riflessioni su design, codice e strategia digitale.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <BriefingCTA />
      <NebulaFooter />
    </div>
  );
};

export default Blog;
