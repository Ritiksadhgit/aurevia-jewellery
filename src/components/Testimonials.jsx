import { FiStar } from "react-icons/fi";

function Testimonials() {
  return (
    <section className="py-20 px-6 bg-[#FAF7F2]">
      <h2 className="text-3xl font-bold text-center text-[#8B5E3C]">
        What Our Customers Say
      </h2>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

       {/* Review 1 */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

         {/* Stars */}
        <div className="flex justify-center gap-1 mb-4 text-[#D4AF37]">
           <FiStar />
           <FiStar />
           <FiStar />
           <FiStar />
           <FiStar />
       </div>

        {/* Review */}
         <p className="text-gray-600 leading-7">
            "The jewellery is beautiful and the quality is amazing. I
            absolutely loved my purchase from Aurevia."
        </p>

        {/* Customer Name */}
         <h3 className="mt-5 text-lg font-semibold text-[#8B5E3C]">
             Priya Sharma
         </h3>

         </div>


       {/* Review 2 */}
         <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4 text-[#D4AF37]">
              <FiStar />
             <FiStar />
            <FiStar />
           <FiStar />
            <FiStar />
        </div>

         {/* Review */}
          <p className="text-gray-600 leading-7">
           "The design is elegant and the jewellery looks even better
           in person. I am very happy with my purchase."
         </p>

          {/* Customer Name */}
         <h3 className="mt-5 text-lg font-semibold text-[#8B5E3C]">
            Ananya Verma
         </h3>

        </div>


      {/* Review 3 */}
        <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

         {/* Stars */}
           <div className="flex justify-center gap-1 mb-4 text-[#D4AF37]">
            <FiStar />
           <FiStar />
            <FiStar />
           <FiStar />
           <FiStar />
         </div>

       {/* Review */}
         <p className="text-gray-600 leading-7">
             "A wonderful shopping experience with beautiful designs,
             great service, and excellent quality."
        </p>

          {/* Customer Name */}
         <h3 className="mt-5 text-lg font-semibold text-[#8B5E3C]">
           Riya Patel
        </h3>

     </div>

   </div>
    </section>
  );
}

export default Testimonials;