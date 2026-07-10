import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
    </main>
  );
}
