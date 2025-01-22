import { Outlet, NavLink } from "react-router-dom";
import profile from "../images/BJD-favicon.png";

function Navbar() {
  const styling = ({ isActive }) =>
    isActive
      ? "bg-indigo-700 text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  return (
    <nav className="bg-gray-800 text-white p-4 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={profile} alt="BJD profile" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                BJD Portfolio
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
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
        </div>
      </div>
      {/* <div className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">My Portfolio</div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div> */}
      <Outlet />
    </nav>
  );
}
export default Navbar;
