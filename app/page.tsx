import NavBar from "@/components/sections/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
