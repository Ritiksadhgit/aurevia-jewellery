import FeaturedCategories from "./components/FeaturedCategories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";


function App() {
  return (
    <>
    
      <Navbar/>
      <Hero />
      <FeaturedCategories />
      <WhyChooseUs/>
      <About />
    </>
  );
}

export default App;