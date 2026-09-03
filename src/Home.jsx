import FeaturedCategories from "./components/FeaturedCategories";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;