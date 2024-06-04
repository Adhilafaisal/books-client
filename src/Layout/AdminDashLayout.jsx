import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard, MdDashboardCustomize, MdHomeFilled } from "react-icons/md";
import { FaQuestionCircle, FaShoppingBag, FaUser } from "react-icons/fa";
import { FaBlog,  FaLocationArrow,  FaRegUser } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import Login from "../components/Login";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const sharedLinks = (
  <>
    <li className="mt-3">
      <Link to="/">
      <MdHomeFilled/>
        Home
      </Link>
    </li>
    <li>
      <Link to="/shop">
      <GiBookshelf/>
       Books
      </Link>
    </li>
    <li>
      <Link to="/shop">
      <FaLocationArrow/>
       Orders Tracking
      </Link>
    </li>
    <li>
      <Link to="/shop">
      <FaQuestionCircle/>
      Customers Support
      </Link>
    </li>
    
  </>
);

const AdminDashLayout = () => {
  const isAdmin = true;
//  const {loading} =useAuth()
//  const [isAdmin,isAdminLoading]= useAdmin()

  return (
    <div >
      {
        isAdmin ? <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
          {/* Page content here */}
          <div className="flex items-center justify-between mx-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <MdDashboardCustomize />
            </label>
            <button className="btn rounded-full px-6 bg-blue-400 flex items-center gap-2 text-white sm:hidden">
              {" "}
              <FaRegUser />
              Logout
            </button>
          </div>
          <div className="mt-5 md:mt-2 mx-4">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side shadow-md ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link
                to="/"
                className="text-2xl font-bold text-blue-700 flex items-center gap-2"
              >
                <FaBlog className="inline-block" />
                <h2>
                  Good<span className="text-black">books</span>
                </h2>
                <span className="badge badge-primary">admin</span>
              </Link>
            </li>
            <hr />
            <li className="mt-3">
              <Link to="/dashboard">
                <MdDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users">
                <FaUser />
                All Users
              </Link>
            </li>
            <li className="mb-3"> 
              <Link to="">
                <FaShoppingBag />
                Manage Bookings
              </Link>
            </li>

            <hr />

            {/* shared links */}

             {
                sharedLinks
             }
          </ul>
        </div>
      </div> : <Login/>
      }
    </div>
  );
};

export default AdminDashLayout;
