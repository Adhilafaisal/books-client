import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBlog, FaBarsStaggered, FaXmark, FaRegUser, FaCartShopping } from "react-icons/fa6";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScoll = () => {
      if ((window, scrollY > 100)) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScoll);
    return () => {
      window.addEventListener("scroll", handleScoll);
    };
  }, []);
  //navItems here
  const navItems = [
    { link: "Home", path: "/" },
    // { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            <h2>
              Good<span className="text-black">books</span>
            </h2>
          </Link>

          {/* nav items for large device */}
      <div className="ml-auto">
          <ul className="md:flex space-x-12 hidden ">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>
          </div>

        
             <div className="ml-auto indicator">
              <Link to="/cart">
                <button className=" hidden lg:flex items-center gap-2 rounded-full bg-blue-300 px-6 hover:bg-green-300">
                  <FaCartShopping className="w-5 text-black  " />
                  <span className="badge badge-sm indicator-item">0</span>
                </button>
              </Link>
              </div>
            

          <div className="">
             {user ? (
              <button
                className="btn hidden lg:flex items-center gap-2 rounded-full px-6 bg-blue-600 text-white hover:bg-green-700 "
                onClick={() => logOut()}
              >
                <FaRegUser className="w-5 hover:text-blue-700" />
                <Link to="/logout">Logout</Link>
              </button>
            ) : (
              <button className="btn flex items-center gap-2 rounded-full px-6 bg-blue-600 text-white hover:bg-green-700">
                <FaRegUser className="w-5 hover:text-blue-700" />
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>

          {/* btn for lg devices */}
          {/* <div className="hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div> */}
          {/* menu btn for mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none "
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
        {/* navitems for sm devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-17 bg-blue-700 ${
            isMenuOpen ? " block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer "
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
