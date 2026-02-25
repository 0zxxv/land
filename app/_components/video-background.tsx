import { content } from "../content";

const { assets } = content;

export function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden>
      {/* Mobile only: light theme */}
      <video
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover object-center dark:hidden md:hidden"
      >
        <source src={assets.videoMobile} type="video/mp4" />
      </video>
      {/* Mobile only: dark theme – do not show on desktop */}
      <video
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="hidden h-full w-full object-cover object-center dark:block md:!hidden"
      >
        <source src={assets.videoMobileDark} type="video/mp4" />
      </video>
      {/* Desktop only: light theme */}
      <video
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="hidden h-full w-full object-cover object-center md:block dark:!hidden"
      >
        <source src={assets.video} type="video/mp4" />
      </video>
      {/* Desktop only: dark theme – bg-video-dark.mp4 (same aspect/framing as desktop light) */}
      <video
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="hidden h-full w-full object-cover object-center md:dark:block"
      >
        <source src={assets.videoDark} type="video/mp4" />
      </video>
      {/* Light overlay – light mode */}
      <div className="absolute inset-0 bg-black/10 dark:hidden" />
    </div>
  );
}
