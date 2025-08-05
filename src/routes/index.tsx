import { createFileRoute } from "@tanstack/react-router";
import Achievement from "../components/Achievement";
import Experiences from "../components/Experience";
import Hero from "../components/Hero";
import Ref from "../components/Ref";
import Skills from "../components/Skills";
import VideoPlay from "../components/Video";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <Skills />
      <VideoPlay />
      <Experiences />
      <Achievement />
      <Ref />
    </main>
  );
}
