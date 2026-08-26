import Ring from "../assets/ring.jpeg";
import Necklace from "../assets/necklace.png"
import Earrings from "../assets/earrings.png"
import ScrollReveal from "./ScrollReveal";
function FeaturedCategories() {
  return (

     <section className="py-20 px-6">
     
       <ScrollReveal textClassName="text-3xl font-bold text-center text-[#8B5E3C]">
          Shop by Category
      </ScrollReveal>
   

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
  
        <div className="text-center bg-white  rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <img src={Ring} alt="Ring"   className="w-full h-80 object-cover rounded-lg transition duration-500 hover:scale-105" />
            <h3 className="mt-4 text-xl font-semibold text-[#8B5E3C]">Rings</h3>
       </div>

       <div className="text-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <img src={Necklace} alt="Necklace"   className="w-full h-80 object-cover rounded-lg transition duration-500 hover:scale-105" />
            <h3 className="mt-4 text-xl font-semibold text-[#8B5E3C]">Necklace</h3>
       </div>

       <div className="text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
         <img src={Earrings} alt="Earrings" className="w-full h-80 object-cover rounded-lg transition duration-500 hover:scale-105" />
         <h3 className="mt-4 text-xl font-semibold text-[#8B5E3C]">Earrings</h3>
       </div>


    </div> 
    </section>
  );
}

export default FeaturedCategories;
