import Hero from "../components/Hero";
import KeyPointers from "../components/KeyPointers";
import AboutUs from "../components/AboutUs";
import VisionMission from "../components/VisionMission";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <div id="key-features">
        <KeyPointers />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="vision-mission">
        <VisionMission />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
