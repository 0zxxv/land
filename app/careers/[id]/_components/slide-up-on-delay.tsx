"use client";

import { useEffect, useState } from "react";

interface SlideUpOnDelayProps {
  children: React.ReactNode;
  /** Delay before animation starts (ms) */
  delay: number;
  /** Distance to slide up in rem. Default 3 */
  distance?: number;
}

export function SlideUpOnDelay({
  children,
  delay,
  distance = 3,
}: SlideUpOnDelayProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className="transition-all ease-out"
      style={{
        transform: visible ? "translateY(0)" : `translateY(${distance}rem)`,
        opacity: visible ? 1 : 0,
        transitionDuration: "1.2s",
      }}
    >
      {children}
    </div>
  );
}
