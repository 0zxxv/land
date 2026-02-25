"use client";

import { content } from "../content";
import { useEffect, useRef } from "react";

const { assets } = content;

export function VideoBackground() {
  const mobileLightRef = useRef<HTMLVideoElement>(null);
  const mobileDarkRef = useRef<HTMLVideoElement>(null);
  const desktopLightRef = useRef<HTMLVideoElement>(null);
  const desktopDarkRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const play = (ref: React.RefObject<HTMLVideoElement | null>) => {
      const el = ref.current;
      if (el) {
        el.muted = true;
        el.play().catch(() => {});
      }
    };
    play(mobileLightRef);
    play(mobileDarkRef);
    play(desktopLightRef);
    play(desktopDarkRef);
  }, []);

  return (
    <div className="absolute inset-0 z-0" aria-hidden>
      {/* Mobile only: light theme */}
      <video
        ref={mobileLightRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover object-center dark:hidden md:hidden"
      >
        <source src={assets.videoMobile} type="video/mp4" />
      </video>
      {/* Mobile only: dark theme – do not show on desktop */}
      <video
        ref={mobileDarkRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="hidden h-full w-full object-cover object-center dark:block md:!hidden"
      >
        <source src={assets.videoMobileDark} type="video/mp4" />
      </video>
      {/* Desktop only: light theme */}
      <video
        ref={desktopLightRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="hidden h-full w-full object-cover object-center md:block dark:!hidden"
      >
        <source src={assets.video} type="video/mp4" />
      </video>
      {/* Desktop only: dark theme – bg-video-dark.mp4 (same aspect/framing as desktop light) */}
      <video
        ref={desktopDarkRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="hidden h-full w-full object-cover object-center md:dark:block"
      >
        <source src={assets.videoDark} type="video/mp4" />
      </video>
      {/* Light overlay – light mode */}
      <div className="absolute inset-0 bg-black/10 dark:hidden" />
    </div>
  );
}
