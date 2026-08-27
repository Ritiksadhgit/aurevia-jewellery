import FeaturedCategories from "./components/FeaturedCategories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";


function App() {
  return (
    <>
    
      <Navbar/>
      <Hero />
      <FeaturedCategories />
      <WhyChooseUs/>
      <About />
      <Testimonials />
      <CTA />
      <Footer />

    </>
  );
}

export default App;