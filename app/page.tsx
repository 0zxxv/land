import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { VideoBackground } from "./_components/video-background";

export default function Home() {
  return (
    <main className="relative w-full bg-cream-dark">
      <div className="relative h-screen w-full">
        <VideoBackground />
        <div className="relative z-10 flex h-full flex-col">
          <Header />
          <Hero />
        </div>
      </div>
      <Services />
    </main>
  );
}
