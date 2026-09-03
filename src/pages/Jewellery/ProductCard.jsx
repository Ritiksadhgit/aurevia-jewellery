import { useContext, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { CartContext } from "../../Context/CartContext";

function ProductCard({ image, name, price }) {

  // CartContext se cart aur setCart le rahe hain
  const { addToCart } = useContext(CartContext);

  // Success message control karne ke liye
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {

    // Current product
    const product = {
      image: image,
      name: name,
      price: price
    };

    // Context ke function ko call
  addToCart(product);

  // Success message
  setMessage(`${name} added to cart successfully!`);

    // 3 seconds baad message hide
    setTimeout(() => {
      setMessage("");
    }, 3000);

    console.log("Product added:", product);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
      />

      <div className="p-5">

        {/* Product Name */}
        <h3 className="text-xl font-semibold text-[#8B5E3C]">
          {name}
        </h3>

        {/* Product Price */}
        <p className="mt-2 text-gray-600">
          ₹{price}
        </p>

        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-[#8B5E3C] text-white py-3 rounded-md hover:bg-[#70482D] active:scale-[0.98] transition-all duration-200"
        >
          Add to Cart
        </button>

      </div>

      {/* Professional Toast */}
      {message && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-white border border-green-100 shadow-xl rounded-lg px-5 py-4">

          <FiCheckCircle className="text-green-600 text-xl" />

          <div>
            <p className="font-semibold text-gray-800">
              Added to Cart
            </p>

            <p className="text-sm text-gray-500">
              {name} added successfully
            </p>
          </div>

        </div>
      )}

    </div>
  );
}

export default ProductCard;