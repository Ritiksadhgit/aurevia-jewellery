function Navbar() {
  return (
    <nav className="flex justify-between items-center px-7 py-5 border-b">
      <h1>Aurevia</h1>

      <ul className="flex gap-8">
        <li className="cursor-pointer text-sm hover:text-gray-500">Home</li>
        <li className="cursor-pointer text-sm hover:text-gray-500">Jewellery</li>
        <li className="cursor-pointer text-sm hover:text-gray-500">Collections</li>
        <li className="cursor-pointer text-sm hover:text-gray-500">About</li>
        <li className="cursor-pointer text-sm  hover:text-gray-500" >Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;