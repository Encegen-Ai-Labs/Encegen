import { useEffect, useRef, useState } from 'react';

const supportsObserver = typeof IntersectionObserver !== 'undefined';

export default function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(!supportsObserver);

  useEffect(() => {
    const el = ref.current;
    if (!el || !supportsObserver) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
