// 'Navbar.js'
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black p-4 ring-2 ring-white ring-opacity-25">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-signature ml-2 text-white">
            <Link to="/" className="link-underline link-underline-black">
              News App
            </Link>
          </h1>
        </div>

        <div className="lg:flex space-x-4">
          <Link
            to="/favorite-articles"
            className="text-white relative group overflow-hidden"
          >
            <span className="border-b-2 border-transparent group-hover:border-white transition duration-300">
              Favorite Articles
            </span>
          </Link>
          
          {/* Add Login and Registration buttons */}
          <Link
            to="/login"
            className="text-white relative group overflow-hidden"
          >
            <span className="border-b-2 border-transparent group-hover:border-white transition duration-300">
              Login
            </span>
          </Link>

          <Link
            to="/register"
            className="text-white relative group overflow-hidden"
          >
            <span className="border-b-2 border-transparent group-hover:border-white transition duration-300">
              Register
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
