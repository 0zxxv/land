import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { VideoBackground } from "./_components/video-background";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-cream-dark">
      <div className="relative h-full w-full">
        <VideoBackground />
        <div className="relative z-10 flex h-full flex-col">
          <Header />
          <Hero />
        </div>
      </div>
    </main>
  );
}
