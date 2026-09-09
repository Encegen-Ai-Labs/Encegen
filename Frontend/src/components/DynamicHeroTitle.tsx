import { useState, useEffect } from "react"
import "./DynamicHero.css"

const WORDS = ["Automotive", "Healthcare", "Supply Chain", "Finance", "Every Process"]

export default function DynamicHeroTitle({ onIndexChange }: { onIndexChange: (idx: number) => void }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => {
        const nextIdx = (i + 1) % WORDS.length;
        onIndexChange(nextIdx);
        return nextIdx;
      });
    }, 3200);
    return () => clearInterval(interval);
  }, [onIndexChange]);

  return (
    <span className="dyn-title">
      Make{" "}
      <span className="dyn-title__scroller">
        {WORDS.map((word, i) => (
          <span
            key={word}
            className={`dyn-title__word ${i === index ? "active" : i < index || (index === 0 && i === WORDS.length - 1) ? "out" : "next"}`}
          >
            {word}
          </span>
        ))}
      </span>
      {" "}work
    </span>
  )
}
