import aboutImage from "../assets/aboutImage.png"

function About() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-[#8B5E3C]">
        About Aurevia
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">

        <div>
          <img src={aboutImage} alt="About Aurevia" className="w-full h-112.5 object-cover roounded-lg" />
        </div>

        <div>
           <h3 className="text-2xl font-semibold text-[#8B5E3C]">
              Crafted for Your Elegance
          </h3>

           <p className="mt-5 text-gray-600 leading-7">
             At Aurevia, we believe jewellery is more than an accessory.
             It is a reflection of your personality, your memories, and
             your timeless elegance.
          </p>

         <p className="mt-4 text-gray-600 leading-7">
             Every piece is thoughtfully designed to bring sophistication
             and beauty to your everyday moments.
          </p>

          <button className="mt-6 px-6 py-3 bg-[#8B5E3C] text-white rounded-md hover:opacity-90 transition">
             Discover More
          </button>
      </div>

    </div>
    </section>
  );
}

export default About;