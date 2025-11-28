import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const menuClass = ({ isActive }) =>
    `relative group ${
      isActive ? "text-yellow-400" : "text-white"
    } transition`;

  return (
    <nav className="sticky  top-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-lg">


      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h2 className="text-yellow-400 text-2xl  font-bold">
            DevSkills{" "}
            {/* <span className="bg-pink-500 text-white px-2 py-1 rounded-md text-sm ml-1">
              by AppDost
            </span> */}
          </h2>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white">
  <NavLink to="/"  className={menuClass}>
    Home
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>

  <NavLink to="/course" className={menuClass}>
    Courses
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>

  <NavLink to="/verify" className={menuClass}>
    Verify Certificate
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>

  <NavLink to="/contact" className={menuClass}>
    Contact
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>
</div>


        {/* Auth Buttons (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to='/login' className="px-4 py-2 border-2 border-yellow-400 text-yellow-400 rounded-full cursor-pointer">
            Login
          </Link>
          <Link to='/signup' className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-200 text-black rounded-full font-semibold cursor-pointer ">
            Sign Up
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 px-6 pb-6 space-y-4 flex flex-col text-white">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-yellow-400">Home</Link>
          <Link to="/courses" onClick={() => setOpen(false)} className="hover:text-yellow-400">Courses</Link>
          <Link to="/verify" onClick={() => setOpen(false)} className="hover:text-yellow-400">Verify Certificate</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-yellow-400">Contact</Link>

          <button className="px-4 py-2 border-2 border-yellow-400 text-yellow-400 rounded-full w-full">
            Login
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-200 text-black rounded-full w-full font-semibold">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

 