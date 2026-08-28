import heroImage from "../assets/hero-jewellery.png";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 md:px-12 py-20 gap-10 bg-[#FAF7F2]">

      <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">

        <h1 className="text-5xl font-bold text-[#8B5E3C] leading-tight">
          Timeless Elegance, Crafted for You
        </h1>

        <p className="mt-6 text-gray-500 text-lg leading-relaxed">
          Discover exquisite jewellery designed to celebrate every moment.
        </p>

        <button className="mt-8 bg-[#8B5E3C] text-white px-8 py-4 hover:bg-[#70482D] rounded-sm transition-colors duration-200">
          Explore Collection
        </button>

      </div>

      <div className="w-full md:w-1/2">
        <img
          src={heroImage}
          alt="Jewellery Collection"
          className="w-full h-[350px] md:h-[500px] object-cover rounded-lg"
        />
      </div>

    </section>
  );
}

export default Hero;