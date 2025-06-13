import Hero from "../components/Hero";
import KeyPointers from "../components/KeyPointers";
import AboutUs from "../components/AboutUs";
import VisionMission from "../components/VisionMission";
import Principals from "../components/Principals";
// import Products from "../components/Products"; // Commented out old products component
import Events from "../components/Events";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div id="home" style={{ position: 'relative' }}>
        <Hero />
        <KeyPointers />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="vision-mission">
        <VisionMission />
      </div>
      <div id="principals">
        <Principals />
      </div>
      <div id="news">
        <Events />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
