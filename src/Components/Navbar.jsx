import { useState } from "react";
import { Link } from "react-router";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-400">
          Gamehub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-400">
            About Us
          </Link>
          <Link to="/login" className="block bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500 transition">
            Login
          </Link>
          <Link to="/register" className="block bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500 transition">
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3 bg-gray-900 p-4 rounded">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-green-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-green-400"
          >
            About Us
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block hover:text-green-400"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="block hover:text-green-400"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
