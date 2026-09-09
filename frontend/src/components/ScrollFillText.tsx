import { useEffect, useRef } from "react";
import "./ScrollFillText.css";

export default function ScrollFillText({ text, className = "" }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const el = containerRef.current;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start filling when the top of the element enters bottom 85% of screen
      // Finish filling when the bottom of the element reaches 35% from bottom
      const start = windowHeight * 0.9;
      const end = windowHeight * 0.4;
      
      let p = (start - rect.top) / (start - end);
      p = Math.max(0, Math.min(1, p));
      
      el.style.setProperty("--scroll-p", p.toString());
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // init
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const words = text.split(/(\s+)/); // keep whitespace to render spaces correctly

  // We only increment word-idx for actual words, not spaces, so the math works perfectly
  let wordCount = 0;
  
  return (
    <span ref={containerRef} className={`scroll-fill-text ${className}`} style={{ ["--total-words" as string]: words.filter(w => w.trim().length > 0).length }}>
      {words.map((chunk, i) => {
        if (chunk.trim().length === 0) {
          return <span key={i}>{chunk}</span>;
        }
        const currentIdx = wordCount++;
        return (
          <span key={i} className="sft-word" style={{ ["--word-idx" as string]: currentIdx }}>
            {chunk}
          </span>
        );
      })}
    </span>
  );
}
