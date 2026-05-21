import { Reveal } from "@/components/Reveal";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const BASE_URL = 'http://localhost:8000';

const Blog = () => {
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
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      <section className="pt-32 md:pt-48 pb-16 px-8 md:px-16 lg:px-24">
        <Reveal>
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary">Technical Journal</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-4">Blog</h1>
        </Reveal>
      </section>
      
      <section className="px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-editorial pb-12">
              {post.image && (
                <img 
                  src={post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`} 
                  alt={post.title} 
                  className="w-full aspect-video object-cover mb-6 grayscale hover:grayscale-0 transition-all"
                />
              )}
              <h2 className="font-display text-3xl font-bold mb-4">{post.title}</h2>
              <div className="flex gap-4 mb-4 opacity-60 font-body text-[10px] uppercase tracking-widest">
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.tags}</span>
              </div>
              <p className="font-body text-muted-foreground line-clamp-3">{post.content}</p>
            </article>
          ))}
          {posts.length === 0 && <p className="font-body opacity-50">Nessun articolo pubblicato al momento.</p>}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
