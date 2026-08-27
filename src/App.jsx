import FeaturedCategories from "./components/FeaturedCategories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <>
    
      <Navbar/>
      <Hero />
      <FeaturedCategories />
      <WhyChooseUs/>
      <About />
      <Testimonials />

    </>
  );
}

export default App;