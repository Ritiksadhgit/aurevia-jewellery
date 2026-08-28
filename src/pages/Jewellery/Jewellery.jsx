import RingProduct from "../../assets/ring-product.png";
import NecklaceProduct from "../../assets/NecklaceProduct.png";
import EarringsProduct from "../../assets/earrings-product.png";
import ProductCard from "./ProductCard";

function Jewellery() {
  return (
    <section className="py-20 px-6">
      <h1 className="text-4xl font-bold text-center text-[#8B5E3C]">
        Jewellery Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
  
        <ProductCard
          image={RingProduct}
          name="Elegant Gold Ring"
          price="₹12999/-"
        />

        <ProductCard
         image={NecklaceProduct}
         name="Elegant Gold Necklace"
         price="₹25999/-"
        />

        <ProductCard
         image={EarringsProduct}
         name="Elegant Gold Earrings"
         price="₹8999/-"
        />

     </div> 
    </section>
  );
}

export default Jewellery;