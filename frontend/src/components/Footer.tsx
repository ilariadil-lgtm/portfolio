import { Link } from "react-router-dom";
import { Mail, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border px-8 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-display text-2xl font-bold">Ilaria Diliberto</p>
          <p className="font-body text-xs text-muted-foreground mt-1">© {new Date().getFullYear()} · Tutti i diritti riservati</p>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="https://linkedin.com" className="link-expand font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com" className="link-expand font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="mailto:ilaria@example.com" className="link-expand font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
