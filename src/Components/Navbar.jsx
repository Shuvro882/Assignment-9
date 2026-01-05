import { useContext, useState } from "react";
import { Link } from "react-router";
import MyLink from "./MyLink";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   
  const {user, signOutUserFunc,setUser, loading, setLoading} = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
     signOutUserFunc()
     .then(() =>{
      toast.success("Signout successful");
      setUser(null);
     })
     .catch((e)=> {
      toast.error(e.message);
     });
    }; 

  return (
    <nav className="bg-black text-white px-4 py-3">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-400">
          Gamehub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
        <MyLink to="/">Home</MyLink>
        <MyLink to="/about">About us</MyLink>
        <MyLink to="/contact">Contact</MyLink>

        {loading ? <div className="flex items-center justify-center min-w-[120px] h-10">
    <HashLoader
      height={8}
      width={3}
      radius={2}
      margin={2}
      color="#22c55e"
    />
  </div> : 
        user ? (
        <div className="flex items-center gap-3">
        {/* User Avatar */}
        <Link to= "/contact">
        <img
        src={user.photoURL || "https://via.placeholder.com/40"}
        alt="User"
        className="h-10 w-10 rounded-full object-cover border-2 border-green-500"
        />
        </Link>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition"
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <Link
        to="/login"
        className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition"
      >
        Register
      </Link>
    </div>
  )}
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
  <div className="md:hidden mt-3 space-y-4 bg-gray-900 p-4 rounded">

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

    
    {loading ? (
      <div className="flex justify-center py-3">
        <HashLoader color="#22c55e" size={25} />
      </div>
    ) : user ? (
      <div className="flex items-center justify-between gap-3 border-t border-gray-700 pt-4">

        {/* Avatar */}
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          <img
            src={user.photoURL || "https://via.placeholder.com/40"}
            alt="User"
            className="h-10 w-10 rounded-full border-2 border-green-500"
          />
        </Link>

        {/* Logout */}
        <button
          onClick={() => {
            handleLogout();
            setIsOpen(false);
          }}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm"
        >
          Logout
        </button>
      </div>
    ) : (
      <div className="flex flex-col gap-2 border-t border-gray-700 pt-4">
        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="bg-green-500 text-center py-2 rounded hover:bg-green-600"
        >
          Login
        </Link>
        <Link
          to="/register"
          onClick={() => setIsOpen(false)}
          className="bg-green-500 text-center py-2 rounded hover:bg-green-600"
        >
          Register
        </Link>
      </div>
    )}
  </div>
)}

    </nav>
  );
};

export default Navbar;
