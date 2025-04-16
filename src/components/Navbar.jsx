import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import profile from "../images/BJD-favicon.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const styling = ({ isActive }) =>
    isActive
      ? "bg-indigo-700 text-white hover:bg-pink-600 text-lg rounded-md px-3 py-2"
      : "text-white hover:bg-pink-600 text-lg rounded-md px-3 py-2";

  return (
    <nav className="bg-gray-800 text-white border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink className="flex items-center" to="/">
            <img className="h-10 w-auto" src={profile} alt="BJD profile" />
            <span className="text-white text-2xl font-bold ml-2">
              BJD Portfolio
            </span>
          </NavLink>

          {/* Hamburger for mobile */}
          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <MdClose /> : <MdMenu />}
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={styling}>
              Home
            </NavLink>
            <NavLink to="/about" className={styling}>
              About
            </NavLink>
            <NavLink to="/projects" className={styling}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={styling}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" className={styling} onClick={toggleMobileMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={styling} onClick={toggleMobileMenu}>
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={styling}
            onClick={toggleMobileMenu}
          >
            Projects
          </NavLink>
          <NavLink to="/contact" className={styling} onClick={toggleMobileMenu}>
            Contact
          </NavLink>
        </div>
      )}

      <Outlet />
    </nav>
  );
}

export default Navbar;
