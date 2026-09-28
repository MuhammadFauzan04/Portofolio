import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Quote from "./components/Quote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import { ScrollTrigger } from "./lib/gsap";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Images (project screenshots, profile photo) load asynchronously and
    // can shift section heights after ScrollTrigger has already measured
    // them, throwing off every scroll-tied animation's start point. Refresh
    // once everything has actually settled.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timeout = setTimeout(refresh, 2000);
    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Preloader onFinish={() => setLoaded(true)} />
      <div className={`site-content${loaded ? " site-content--visible" : ""}`}>
        <ScrollProgress />
        <Navbar />
        <main className="frame">
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Quote />
          <Experience />
          <Contact />
          <Footer />
        </main>
        <BackToTop />
      </div>
    </>
  );
}
