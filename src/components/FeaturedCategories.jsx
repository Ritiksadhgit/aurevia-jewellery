import Ring from "../assets/ring.jpeg";
import Necklace from "../assets/necklace.png"
import Earrings from "../assets/earrings.png"
function FeaturedCategories() {
  return (
     <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-[#8B5E3C]">
         Shop by Category
     </h2>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
  
        <div className="text-center">
            <img src={Ring} alt="Ring"   className="w-full h-80 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">Rings</h3>
       </div>

       <div className="text-center">
            <img src={Necklace} alt="Necklace"   className="w-full h-80 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">Necklace</h3>
       </div>

       <div className="text-center">
         <img src={Earrings} alt="Earrings" className="w-full h-80 object-cover rounded-lg" />
         <h3 className="mt-4 text-xl font-semibold">Earrings</h3>
       </div>


    </div> 
    </section>
  );
}

export default FeaturedCategories;
