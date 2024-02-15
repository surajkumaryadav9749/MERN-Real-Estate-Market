import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-slate-200 shadow-xl">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <Link>
              <span className="text-slate-500">SRJ</span>
              <span className="text-slate-700">Estate</span>
            </Link>
          </h1>
          <form className="bg-slate-100 p-3 rouded-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
              name=""
              id=""
            />
            <FaSearch className="text-slate-500" />
          </form>
          <ul className="flex items-center gap-4">
            <Link>
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Home
              </li>
            </Link>
            <Link>
              <li className="hidden sm:inline text-slate-700 hover:underline">
                About
              </li>
            </Link>
            <Link>
              <li className="text-slate-700 hover:underline">SignIn</li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
