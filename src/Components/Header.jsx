import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  {/* Left side - Logo only */}
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl font-bold">
      🎮 GameHub
    </a>
  </div>

  {/* Right side - Menu + Auth */}
  <div className="navbar-end">
    {/* Desktop Menu */}
    <ul className="menu menu-horizontal hidden lg:flex px-1 gap-2">
      <li><a className='btn btn-ghost'>Home</a></li>
      <li><a className='btn btn-ghost'>Games</a></li>
      <li><a className="btn btn-ghost">Login</a></li>
      <li><a className="btn btn-ghost">Register</a></li>
    </ul>

    {/* Mobile Menu */}
    <div className="dropdown dropdown-end lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
      >
        <li><a>Home</a></li>
        <li><a>Games</a></li>
        <li><a>Login</a></li>
        <li><a>Register</a></li>
      </ul>
    </div>
  </div>
</div>

    );
};

export default Header;