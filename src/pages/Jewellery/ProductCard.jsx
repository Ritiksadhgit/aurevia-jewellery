

function ProductCard({ image, name, price }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#8B5E3C]">
          Product Name
        </h3>

        <p className="mt-2 text-gray-600">
          ₹10,999
        </p>

        <button className="mt-4 w-full bg-[#8B5E3C] text-white py-3 rounded-md hover:opacity-90 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;