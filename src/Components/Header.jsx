
function Header() {
  return (
   <nav className="bg-blue-500 text-white px-6 py-3 flex justify-between items-center">
      
      <h1 className="text-xl font-bold">Waves co</h1>

      <ul className="flex gap-6">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">Best For Youtube</li>
        <li className="hover:text-gray-200 cursor-pointer">Category</li>
        <li className="hover:text-gray-200 cursor-pointer">Upgrade</li>
        <li className="hover:text-gray-200 cursor-pointer">Contacts</li>
      </ul>

    </nav>
  )
}

export default Header