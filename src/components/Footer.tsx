import { ArrowUp, Terminal } from "lucide-react";
 
export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
  return (
    <footer className="bg-black py-12 border-t border-zinc-900 relative" id="footer-root">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-left">
        {/* Name and title */}
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="w-6 h-6 rounded-md bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center font-display font-extrabold text-white text-xs select-none">
              T
            </span>
            <span className="font-display font-bold text-base text-white tracking-wider">
              TANISHA
            </span>
          </div>
          <p className="text-xs font-sans text-slate-400 leading-relaxed font-light">
            BS Computer Science Student | Full Stack Intern & Data Analyst.
          </p>
        </div>
 
        {/* Links & credit */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right font-mono text-[11px] text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Tanisha. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <Terminal className="w-3.5 h-3.5 text-pink-500" />
            
          </p>
        </div>
 
        {/* Scroll up floating action */}
        <button
          onClick={scrollUp}
          className="p-3 rounded-full bg-zinc-950 border border-zinc-800 hover:border-pink-500/20 hover:text-pink-400 transition-colors cursor-pointer text-slate-400 flex items-center justify-center"
          title="Scroll to Top"
          id="btn-footer-up"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
