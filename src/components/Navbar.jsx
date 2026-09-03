// import { FiSearch } from "react-icons/fi";
// import { FiUser } from "react-icons/fi";
// import { FiHeart } from "react-icons/fi";
// import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX
} from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (

<nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b shadow-sm">
      <h1 className="text-2xl font-bold tracking-wider text-[#8B5E3C]">Aurevia</h1>

      <ul className="hidden md:flex gap-8">
        <li className="cursor-pointer text-sm font-medium hover:text-gray-500 transition-colors duration-200">Home</li>
        <li className="cursor-pointer text-sm font-medium hover:text-gray-500 transition-colors duration-200"><Link to="/jewellery">Jewellery</Link></li>
        <li className="cursor-pointer text-sm font-medium hover:text-gray-500 transition-colors duration-200"><Link to="/Collections">Collections</Link></li>
        <li className="cursor-pointer text-sm font-medium hover:text-gray-500 transition-colors duration-200">About</li>
        <li className="cursor-pointer text-sm font-medium hover:text-gray-500 transition-colors duration-200" >Contact</li>
      </ul>

      <div className="hidden md:flex items-center gap-5">
        <FiSearch className="cursor-pointer hover:text-gray-500 transition-colors duration-200" />
        <FiUser className="cursor-pointer hover:text-gray-500 transition-colors duration-200" />
        <FiHeart className="cursor-pointer hover:text-gray-500 transition-colors duration-200" />
        <Link to="/Cart">
        <FiShoppingBag
            className="cursor-pointer hover:text-gray-500 transition-colors duration-200"
        />
       </Link>
      </div>

    
         <button className="md:hidden text-2xl ml-auto"  onClick={() => setMenuOpen(!menuOpen)}>
   
          {menuOpen ? <FiX /> : <FiMenu />}

          </button>

            {menuOpen && (
           <div className="md:hidden border-t px-6 py-5 bg-white shadow-sm">
            <ul className="flex flex-col items-center gap-5">
               <li>Home</li>
              <li>Jewellery</li>
             <li>Collections</li>
             <li>About</li>
             <li>Contact</li>
           </ul>
          </div>
                 )}

    </nav>
  );
}
export default Navbar;