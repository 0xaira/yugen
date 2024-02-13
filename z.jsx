import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const total_item = 5; // Replace this with your actual total_item logic

  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="font-bold text-purple-500 text-2xl">YUGEN</h1>
        <div className="lg:hidden">
          {menuOpen ? (
            <CgClose
              name="close-outline"
              className="text-4xl text-black cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <CgMenu
              name="menu-outline"
              className="text-4xl text-black cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
        <ul className={`lg:flex lg:gap-8 lg:items-center navbar-lists ${menuOpen ? "flex flex-col items-center justify-center h-screen" : "hidden"}`}>
          <li>
            <Link
              to="/"
              className="text-lg font-semibold uppercase hover:text-purple-500"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg font-semibold uppercase hover:text-purple-500"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-lg font-semibold uppercase hover:text-purple-500"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-semibold uppercase hover:text-purple-500"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center text-lg font-semibold uppercase hover:text-purple-500"
              onClick={() => setMenuOpen(false)}
            >
              <FiShoppingCart className="text-4xl mr-2" />
              <span className="w-6 h-6 mb-4 flex items-center justify-center bg-black text-white rounded-full hover:bg-purple-500">
                {total_item}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
