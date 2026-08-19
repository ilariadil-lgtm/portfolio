import { motion } from "framer-motion";
import { NebulaNav } from "./components/NebulaNav";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { NebulaFooter } from "./components/NebulaFooter";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ArrowRight } from "lucide-react";
import { RevealText } from "@/components/RevealText";
import { useTranslation } from "react-i18next";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const Blog = () => {
  const { t } = useTranslation();
  usePageMeta({
    title: "Journal",
    description:
      "Riflessioni su design, sviluppo web e strategia digitale. Articoli tecnici e pensieri sul mestiere di costruire prodotti digitali.",
  });

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="min-h-[100dvh] w-full bg-night text-slate-100 font-sans selection:bg-gold/30 overflow-hidden flex flex-col relative lg:pl-24">
      <NebulaNav />
      <ScrollIndicator
        sections={["scroll.hero", "scroll.contact"].map((k) => t(k))}
      />

      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* HERO */}
      <section className="pt-40 md:pt-56 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                TECHNICAL JOURNAL
              </span>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>
            <h1
              className="font-fraunces italic font-light leading-[0.9] tracking-tight text-white mb-8 pr-2"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              <RevealText text="Pensieri e" delay={0.1} />
              <br />
              <RevealText
                text="riflessioni."
                delay={0.2}
                className="text-gold"
              />
            </h1>
            <p className="font-outfit font-light text-white/50 text-lg leading-relaxed max-w-xl pl-8 border-l border-gold/30">
              Uno spazio dedicato a riflessioni su design, sviluppo web,
              intelligenza artificiale e strategia digitale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-12 lg:px-24 py-32 z-10 relative">
        <div className="max-w-7xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug || post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group"
                >
                  {post.image && (
                    <div className="overflow-hidden mb-8 aspect-[16/10] bg-white/5">
                      <img loading="lazy" decoding="async"
                        src={
                          post.image.startsWith("http") ||
                          post.image.startsWith("/")
                            ? post.image
                            : `${BASE_URL}${post.image}`
                        }
                        alt={post.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-6 font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
                    <span>
                      {new Date(post.created_at).toLocaleDateString("it-IT", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    {post.tags && (
                      <>
                        <span>·</span>
                        <span>{post.tags}</span>
                      </>
                    )}
                  </div>
                  <h2 className="font-bricolage font-black tracking-tight text-3xl md:text-4xl text-white mb-6 group-hover:text-gold transition-colors duration-500">
                    {post.title}
                  </h2>
                  <p className="font-outfit font-light text-white/60 text-base leading-relaxed line-clamp-3 mb-8">
                    {post.content}
                  </p>
                  <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gold opacity-60 group-hover:opacity-100 transition-opacity">
                    LEGGI ARTICOLO
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </span>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-32 text-center"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold block mb-8">
                IN ARRIVO
              </span>
              <p className="font-fraunces italic font-light text-5xl text-white mb-6 pr-2">
                Presto nuovi articoli.
              </p>
              <p className="font-outfit font-light text-white/50 text-lg">
                Sto preparando riflessioni su design, codice e strategia
                digitale.
              </p>
            </motion.div>
          )}
        </div>
      </section>
      <NebulaFooter />
    </div>
  );
};

export default Blog;
