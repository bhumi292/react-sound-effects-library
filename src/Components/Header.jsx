import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white px-6 py-3">

      {/* Top Bar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-8" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">Best For Youtube</li>
          <li className="hover:text-gray-200 cursor-pointer">Category</li>
          <li className="hover:text-gray-200 cursor-pointer">Upgrade</li>
          <li className="hover:text-gray-200 cursor-pointer">Contacts</li>
        </ul>

        {/* Login Button (Desktop) */}
        <button className="hidden md:block bg-white text-blue-500 px-4 py-1 rounded hover:bg-gray-200">
          Login
        </button>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">

          <ul className="flex flex-col gap-3">
            <li className="hover:text-gray-200 cursor-pointer">Home</li>
            <li className="hover:text-gray-200 cursor-pointer">Best For Youtube</li>
            <li className="hover:text-gray-200 cursor-pointer">Category</li>
            <li className="hover:text-gray-200 cursor-pointer">Upgrade</li>
            <li className="hover:text-gray-200 cursor-pointer">Contacts</li>
          </ul>

          <button className="bg-white text-blue-500 px-4 py-1 rounded hover:bg-gray-200 w-fit">
            Login
          </button>

        </div>
      )}

    </nav>
  );
}

export default Header;