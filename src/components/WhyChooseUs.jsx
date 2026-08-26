import { FiAward, FiTruck, FiShield } from "react-icons/fi";

function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-[#FAF7F2]">
      <h2 className="text-3xl font-bold text-center text-[#8B5E3C]">
        Why Choose Aurevia?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
  
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <FiAward className="text-4xl mx-auto mb-4 text-[#8B5E3C]" />
                <h3 className="text-xl font-semibold text-[#8B5E3C]">
                  Premium Quality
               </h3>

                <p className="mt-3 text-gray-500">
                  Carefully crafted jewellery made with premium quality materials.
                </p>
         </div>

         <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <FiTruck className="text-4xl mx-auto mb-4 text-[#8B5E3C]" />
                <h3 className="text-xl font-semibold text-[#8B5E3C]">
                  Fast Delivery
               </h3>

                <p className="mt-3 text-gray-500">
                  Quick and safe delivery, right to your doorstep.
                </p>
         </div>

         <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <FiShield className="text-4xl mx-auto mb-4 text-[#8B5E3C]" />
                <h3 className="text-xl font-semibold text-[#8B5E3C]">
                  Secure Payment
               </h3>

                <p className="mt-3 text-gray-500">
                  Safe and secure payment options for a worry-free shopping experience. 
                </p>
         </div>
         

      </div> 
    </section>
  );
}

export default WhyChooseUs;