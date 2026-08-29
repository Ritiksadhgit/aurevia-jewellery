import Bridal from "../../assets/bridal-collection.png";
import Everyday from "../../assets/everyday-collection.png";
import Wedding from "../../assets/wedding-collection.png";

import CollectionCard from "./CollectionCard";

function Collections() {
  return (
    <section className="py-20 px-6 bg-[#FAF7F2]">

      <h1 className="text-center font-bold text-[#8B5E3C] text-4xl">
        Our Collections
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        <CollectionCard
          image={Bridal}
          title="Bridal Collection"
        />

        <CollectionCard
          image={Everyday}
          title="Everyday Collection"
        />

        <CollectionCard
          image={Wedding}
          title="Wedding Collection"
        />

      </div>

    </section>
  );
}

export default Collections;