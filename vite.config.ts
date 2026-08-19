import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Aumenta il warning threshold — chunks separati sono già sotto i 500KB
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Separa le vendor libraries heavy in chunk dedicati
        manualChunks(id) {
          // React core
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react-vendor";
          }
          // Framer Motion (heavy — ~150KB gzip)
          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion";
          }
          // React Router
          if (id.includes("node_modules/react-router")) {
            return "react-router";
          }
          // Lenis smooth scroll
          if (id.includes("node_modules/@studio-freight")) {
            return "lenis";
          }
          // Radix UI components (shadcn/ui base)
          if (id.includes("node_modules/@radix-ui")) {
            return "radix-ui";
          }
          // Lucide icons
          if (id.includes("node_modules/lucide-react")) {
            return "lucide-icons";
          }
          // i18next: cambia raramente, merita una cache separata
          if (id.includes("node_modules/i18next") || id.includes("node_modules/react-i18next")) {
            return "i18n-vendor";
          }
        },
      },
    },
  },
}));
