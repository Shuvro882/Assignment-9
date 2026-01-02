import { useState } from "react";
import { Link } from "react-router";
import MyLink from "./MyLink";


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
          <MyLink to={"/"}>Home</MyLink>

          <MyLink to={"/about"} >About us</MyLink>
          <MyLink to={"/contact"} >Contact</MyLink>
          
          <Link to="/login" className="block bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition">
            Login
          </Link>
          <Link to="/register" className="block bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition">
            Registration
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
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-green-400"
          >
            Contact
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
            Registration
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
