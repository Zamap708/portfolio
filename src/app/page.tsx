import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full overflow-x-hidden flex-col items-center justify-between m-auto px-16"
    
    >
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
    </main>
  );
}
