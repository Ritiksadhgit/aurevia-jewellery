import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-7 py-6 border-b shadow-sm">
      <h1 className="text-2xl font-bold tracking-wider text-[#8B5E3C]">Aurevia</h1>

      <ul className="flex gap-8">
        <li className="cursor-pointer text-sm font-medium hover:text-gray-500 transition-colors duration-200">Home</li>
        <li className="cursor-pointer text-sm font-medium hover:text-gray-500 transition-colors duration-200">Jewellery</li>
        <li className="cursor-pointer text-sm font-medium hover:text-gray-500 transition-colors duration-200">Collections</li>
        <li className="cursor-pointer text-sm font-medium hover:text-gray-500 transition-colors duration-200">About</li>
        <li className="cursor-pointer text-sm font-medium hover:text-gray-500 transition-colors duration-200" >Contact</li>
      </ul>

      <div className="flex items-center  gap-5">
        <FiSearch className="cursor-pointer hover:text-gray-500 transition-colors duration-200" />
        <FiUser className="cursor-pointer hover:text-gray-500 transition-colors duration-200" />
        <FiHeart className="cursor-pointer hover:text-gray-500 transition-colors duration-200" />
        <FiShoppingBag className="cursor-pointer hover:text-gray-500 transition-colors duration-200" />
      </div>

    </nav>
  );
}
export default Navbar;