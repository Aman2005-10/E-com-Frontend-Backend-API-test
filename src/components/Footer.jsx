import React from "react";

function Footer() {
  return (
    <footer className="  bottom-0 w-full  bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <h2 className="text-xl font-light text-gray-900">
         I-Mobile
        </h2>

        {/* Copyright */}
        <p className="text-sm font-light text-gray-500 mt-3 md:mt-0">
          © {new Date().getFullYear()} I-Mobile. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-5 mt-3 md:mt-0 text-sm font-light">
          <a href="#" className="text-gray-500 hover:text-black transition">
            Privacy
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition">
            Terms
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;