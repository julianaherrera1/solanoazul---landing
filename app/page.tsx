import NavBar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <NavBar />
    <main className="pt-20">
    <Hero />
    <About />
    </main>
    <footer />
    </>
  );
}
