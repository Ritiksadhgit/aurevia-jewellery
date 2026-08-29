import { useNavigate } from "react-router-dom";

function CollectionCard({ image, title }) {

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/collections/${title.split(" ")[0].toLowerCase()}`);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <img src={image} alt={title}
        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
        />

      <div className="p-5 text-center">

        <h2 className="text-xl font-semibold text-[#8B5E3C]">
          {title}
        </h2>

        <button
          onClick={handleExplore}
          className="mt-4 bg-[#8B5E3C] text-white px-6 py-3 rounded-sm hover:bg-[#70482D] transition-colors duration-200"
        >
          Explore Collection
        </button>

      </div>

    </div>
  );
}

export default CollectionCard;