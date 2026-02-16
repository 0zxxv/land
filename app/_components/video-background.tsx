import { content } from "../content";

const { assets } = content;

export function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      >
        <source src={assets.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
