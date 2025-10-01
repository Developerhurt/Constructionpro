import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Ongoing from "@/sections/Ongoing";
import Upcoming from "@/sections/Upcoming";
import Gallery from "@/sections/Gallery";
import Contact from "@/sections/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl px-6">
        <Hero />
        <About />
        <Services />
        <Ongoing />
        <Upcoming />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
