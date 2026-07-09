import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [navuser, setNavUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setNavUser(JSON.parse(savedUser));
    }
  }, []);

  function handllogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    setMenuOpen(false);
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-light text-gray-900 tracking-wide"
        >
          I-Mobile
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-light">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>

          <Link to="/my-order" className="hover:text-black transition">
            My Orders
          </Link>

          <Link to="/cart" className="hover:text-black transition">
            Cart
          </Link>

          <Link to="/about" className="hover:text-black transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <p className="text-gray-700 font-light">
            {navuser?.name}
          </p>

          <button
            onClick={handllogout}
            className="rounded-xl bg-black px-5 py-2 text-white font-light hover:bg-gray-900 transition cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6">
          <div className="flex flex-col gap-5 text-gray-700 font-light">
            <p className="text-lg text-black">
              Hi, {navuser?.name}
            </p>

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black transition"
            >
              Home
            </Link>

            <Link
              to="/my-order"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black transition"
            >
              My Orders
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black transition"
            >
              Cart
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black transition"
            >
              Contact
            </Link>

            <button
              onClick={handllogout}
              className="mt-2 w-full rounded-xl bg-black py-3 text-white font-light hover:bg-gray-900 transition"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;