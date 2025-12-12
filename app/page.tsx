import NavBar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Product from "@/components/sections/Product";
import PurchaseSteps from "@/components/sections/PurchaseSteps";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
    <NavBar />
    <main className="pt-20">
    <Hero />
    <About />
    <Product />
    <PurchaseSteps />
    </main>
    <footer />
    </>
  );
}
