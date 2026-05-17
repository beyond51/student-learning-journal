import { useState } from "react";
import { Menu, X } from "lucide-react";
import SearchAndfilter from "./SearchAndfilter";
import { useLogoutHook } from "../hooks/useLogoutHook";
import { NavLink } from "react-router";

const Navbar = ({ searchInput, setsearchInput }) => {
  const { handleLogout } = useLogoutHook();

  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition bg-blue-50 text-blue-600 w-full"
      : "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition text-slate-700 hover:bg-slate-100 w-full";

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navbar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
              SJ
            </div>

            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
              Student Journal
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-2 text-gray-700 font-medium capitalize">
              <li>
                <NavLink to="/home/dashboard" className={navLinkStyles}>
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink to="/home/create" className={navLinkStyles}>
                  Create Journal
                </NavLink>
              </li>

              <li>
                <NavLink to="/home/journal" className={navLinkStyles}>
                  My Journal
                </NavLink>
              </li>

              <li>
                <NavLink to="/home/profile" className={navLinkStyles}>
                  Profile
                </NavLink>
              </li>
            </ul>

            <SearchAndfilter
              handleLogout={handleLogout}
              searchInput={searchInput}
              setsearchInput={setsearchInput}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenu ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
            {/* Links */}
            <ul className="flex flex-col gap-2 w-full capitalize">
              <li>
                <NavLink
                  to="/home/dashboard"
                  className={navLinkStyles}
                  onClick={() => setMobileMenu(false)}
                >
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/home/create"
                  className={navLinkStyles}
                  onClick={() => setMobileMenu(false)}
                >
                  Create Journal
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/home/journal"
                  className={navLinkStyles}
                  onClick={() => setMobileMenu(false)}
                >
                  My Journal
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/home/profile"
                  className={navLinkStyles}
                  onClick={() => setMobileMenu(false)}
                >
                  Profile
                </NavLink>
              </li>
            </ul>

            {/* Search + Logout */}
            <div className="pt-2">
              <SearchAndfilter
                handleLogout={handleLogout}
                searchInput={searchInput}
                setsearchInput={setsearchInput}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
