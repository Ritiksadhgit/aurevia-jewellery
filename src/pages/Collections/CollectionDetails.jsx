import { useParams } from "react-router-dom";

function CollectionDetails() {
  const { type } = useParams();

  return (
    <section className="py-20 px-6 bg-[#FAF7F2]">
      
      <h1 className="text-center text-4xl font-bold text-[#8B5E3C]">
        {type} Collection
      </h1>

      <p className="text-center mt-4 text-gray-500">
        Discover our exclusive {type} jewellery collection.
      </p>

    </section>
  );
}

export default CollectionDetails;