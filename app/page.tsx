import NavBar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Product from "@/components/sections/Product";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <NavBar />
    <main className="pt-20">
    <Hero />
    <About />
    <Product />
    </main>
    <footer />
    </>
  );
}
