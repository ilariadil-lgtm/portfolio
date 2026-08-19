import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const Blog = () => {
  const { t, i18n } = useTranslation();
  usePageMeta({
    title: "Blog",
    description:
      "Riflessioni su design, sviluppo web e strategia digitale. Articoli tecnici e pensieri sul mestiere di costruire prodotti digitali.",
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
    <div className="min-h-[100dvh] bg-[#f5f2ed] text-[#3d0f1a] overflow-hidden selection:bg-primary/30">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-52 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#3d0f1a 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none z-0">
          <span
            className="font-display font-black text-[#3d0f1a]/[0.025] pr-4"
            style={{ fontSize: "clamp(80px, 18vw, 240px)", lineHeight: 1 }}
          >
            {t("blog.watermark")}
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary font-bold">
                {t("blog.subtitle")}
              </span>
              <div className="w-10 h-[1px] bg-primary/25" />
            </div>
            <h1
              className="font-display font-bold leading-[1.1] md:leading-[0.85] tracking-tighter text-[#3d0f1a]"
              style={{ fontSize: "clamp(3rem, 7vw, 5.8rem)" }}
            >
              {t("blog.title_1")}
              <br />
              <span className="text-primary italic pr-2">
                {t("blog.title_2")}
              </span>
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
                  className="group border-t border-[#3d0f1a]/15 pt-10"
                >
                  {post.image && (
                    <div className="overflow-hidden mb-6 aspect-video">
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
                  <div className="flex items-center gap-4 mb-4 font-typewriter text-[9px] uppercase tracking-[0.35em] text-[#3d0f1a]/65 font-bold">
                    <span>
                      {new Date(post.created_at).toLocaleDateString(
                        i18n.language === "en" ? "en-US" : "it-IT",
                        { year: "numeric", month: "long", day: "numeric" },
                      )}
                    </span>
                    {post.tags && (
                      <>
                        <span>·</span>
                        <span>{post.tags}</span>
                      </>
                    )}
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#3d0f1a] mb-4 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="font-body text-[15px] text-[#3d0f1a]/65 leading-relaxed line-clamp-3 mb-6">
                    {post.content}
                  </p>
                  <span className="group/link inline-flex items-center gap-2 font-typewriter text-[9px] uppercase tracking-[0.35em] text-primary font-bold">
                    {t("blog.read_more")}
                    <ArrowRight
                      size={12}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </span>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-24 text-center border-t border-[#3d0f1a]/10"
            >
              <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary font-bold block mb-6">
                {t("blog.coming_soon_label")}
              </span>
              <p className="font-display text-3xl md:text-4xl font-bold text-[#3d0f1a] italic pr-2">
                {t("blog.coming_soon_title")}
              </p>
              <p className="font-body text-[#3d0f1a]/65 mt-4">
                {t("blog.coming_soon_desc")}
              </p>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
