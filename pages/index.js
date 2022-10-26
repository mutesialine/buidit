import Hero from "../components/home/Hero"
import Innovative from "../components/home/Innovative";
import Logo from "../components/layout/Logo";
import Instagram from "../components/home/Instagram";
import Layout from "../components/layout";
import Footer from "../components/layout/footer";
import Explore from "../components/home/Explore";
export default function Home() {
  return (
    <>
      <Hero />
      <Innovative />
      <Explore/>
      <Instagram />
      <Footer />
    </>
  );
}
