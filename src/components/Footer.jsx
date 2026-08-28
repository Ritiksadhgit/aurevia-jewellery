import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-[#2F241F] text-white py-12 px-6">
      <h2 className="text-2xl font-bold text-center">
        Aurevia
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
  
         <div>
            <h3 className="text-xl font-semibold">
               Aurevia
           </h3>

            <p className="mt-4 text-gray-300 leading-6">
               Timeless jewellery crafted to celebrate your elegance
               and beautiful moments.
            </p>
         </div>

         <div>
             <h3 className="text-xl font-semibold">
               Quick Links
            </h3>

              <ul className="mt-4 space-y-3 text-gray-300">
                <li>Home</li>
                <li>Jewellery</li>
                <li>Collections</li>
               <li>About</li>
               <li>Contact</li>
             </ul>
        </div>

       <div className="flex gap-4 mt-6">
          <FiInstagram className="text-2xl hover:text-[#D4AF37] cursor-pointer transition" />
          <FiFacebook className="text-2xl hover:text-[#D4AF37] cursor-pointer transition" />
          <FiTwitter className="text-2xl hover:text-[#D4AF37] cursor-pointer transition" />
      </div>

     </div>

     <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400">
        <p>
         © 2026 Aurevia. All rights reserved.
       </p>
     </div>
    </footer>
  );
}

export default Footer;