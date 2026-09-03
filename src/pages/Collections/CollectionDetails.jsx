import { useParams } from "react-router-dom";    //Ye React Router se URL ka dynamic data nikalne ke liye hai.

import ProductCard from "../Jewellery/ProductCard";

import RingProduct from "../../assets/ring-product.png";
import NecklaceProduct from "../../assets/NecklaceProduct.png";
import EarringsProduct from "../../assets/earrings-product.png";

function CollectionDetails() {
  const { slug } = useParams();

  const collectionData = {
    bridal: {
      title: "Bridal Collection",
      description: "Elegant jewellery crafted specially for your special day.",
      products: [
        {
          image: NecklaceProduct,
          name: "Bridal Gold Necklace",
          price: "25999",
        },
        {
          image: EarringsProduct,
          name: "Bridal Gold Earrings",
          price: "12999",
        },
        {
          image: RingProduct,
          name: "Bridal Gold Ring",
          price: "9999",
        },
      ],
    },

    everyday: {
      title: "Everyday Collection",
      description: "Beautiful jewellery designed for your everyday moments.",
      products: [
        {
          image: RingProduct,
          name: "Daily Wear Gold Ring",
          price: "8999",
        },
        {
          image: EarringsProduct,
          name: "Daily Wear Earrings",
          price: "6999",
        },
      ],
    },

    wedding: {
      title: "Wedding Collection",
      description: "Celebrate your beautiful moments with timeless jewellery.",
      products: [
        {
          image: NecklaceProduct,
          name: "Wedding Gold Necklace",
          price: "29999",
        },
        {
          image: EarringsProduct,
          name: "Wedding Gold Earrings",
          price: "14999",
        },
      ],
    },
  };

  const collection = collectionData[slug];

  return (
    <section className="py-20 px-6 bg-[#FAF7F2]">

      <h1 className="text-4xl font-bold text-center text-[#8B5E3C]">
        {collection.title}
      </h1>

      <p className="text-center mt-4 text-gray-500">
        {collection.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

      {/* “Collection ke products array par map function laga kar hum har product ko ek-ek karke access kar rahe hain.” */}
        {collection.products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}

      </div>

    </section>
  );
}

export default CollectionDetails;