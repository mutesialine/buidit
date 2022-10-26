import Hero from "../components/home/Hero"
import Innovative from "../components/home/Innovative";
import Instagram from "../components/home/Instagram";
import Footer from "../components/layout/Footer";
import Explore from "../components/home/Explore";
import Features from "../components/home/Features";
export default function Home() {
  return (
    <>
      <Hero />
      <Innovative />
      <Explore/>
      <Features/>
      <Instagram />
      <Footer />
    </>
  );
}
