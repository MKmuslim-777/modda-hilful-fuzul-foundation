import React from "react";
import { Link, NavLink, useLocation } from "react-router";
import logo from "../../assets/MODDA-LOGO.png";

const Navbar = () => {
  const location = useLocation();

  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-red-600 transition">
          হোম
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:text-red-600 transition">
          আমাদের সম্পর্কে
        </NavLink>
      </li>
      <li>
        <NavLink to="/programs" className="hover:text-red-600 transition">
          আমাদের কার্যক্রম
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className="hover:text-red-600 transition">
          যোগাযোগ
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      {/* Top Bar */}
      <div className="bg-[#2c3e50]  text-white text-sm">
        <div className="flex justify-between items-center px-4 py-2 container">
          <div className="flex flex-wrap items-center gap-2">
            <span>📍 মোড্ডা, ময়ূরা, নাঙ্গকোট, কুমিল্লা</span>
            <span>📞 +৮৮০ ০১৮৮৮ ৮৮৮৮৮৮</span>
          </div>
          <div className="flex gap-3">
            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded ">
              দান করুন
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded hidden md:block">
              আমার একাউন্ট
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-base-100 shadow-sm ">
        <div className="navbar container">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            <img src={logo} className="btn btn-ghost text-xl" alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
