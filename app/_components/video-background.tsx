import { content } from "../content";

const { assets } = content;

export function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden>
      {/* Mobile video: visible only below md */}
      <video
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover md:hidden"
      >
        <source src={assets.videoMobile} type="video/mp4" />
      </video>
      {/* Desktop video: visible from md up */}
      <video
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="hidden h-full w-full object-cover md:block"
      >
        <source src={assets.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
