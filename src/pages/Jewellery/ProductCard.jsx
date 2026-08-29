function ProductCard({ image, name, price }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
      />

      <div className="p-5">

        <h3 className="text-xl font-semibold text-[#8B5E3C]">
          {name}
        </h3>

        <p className="mt-2 text-gray-600">
          ₹{price}
        </p>

        <button className="mt-4 w-full bg-[#8B5E3C] text-white py-3 rounded-md hover:opacity-90 transition">
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;