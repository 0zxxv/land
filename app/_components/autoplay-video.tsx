"use client";

import { useEffect, useRef } from "react";

interface AutoplayVideoProps {
  src: string;
  className?: string;
  ariaHidden?: boolean;
}

export function AutoplayVideo({ src, className, ariaHidden }: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.muted = true;
      el.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      className={className}
      aria-hidden={ariaHidden}
    />
  );
}
