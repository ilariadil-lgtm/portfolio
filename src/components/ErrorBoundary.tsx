import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="min-h-[100dvh] w-full bg-[#080808] text-white flex flex-col items-center justify-center p-6 font-outfit">
          <div className="max-w-md w-full bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-2xl text-center">
            <h1 className="font-bricolage text-3xl font-bold text-red-400 mb-4">
              Ops! Qualcosa è andato storto.
            </h1>
            <p className="text-white/70 mb-8 leading-relaxed">
              C'è stato un problema nel caricamento della pagina o del tema. Questo accade spesso se il server di sviluppo sta girando da molto tempo o c'è un problema di rete.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#d4af37] text-black font-mono text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full hover:bg-white transition-colors duration-300 w-full mb-4"
            >
              Ricarica la pagina
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("portfolio-design");
                window.location.href = "/";
              }}
              className="bg-transparent border border-white/20 text-white font-mono text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors duration-300 w-full"
            >
              Ripristina tema e torna alla Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
