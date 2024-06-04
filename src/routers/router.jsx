import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import Cart from "../shop/Cart";
import SearchResults from "../components/SearchResults";
import AdminDashLayout from "../Layout/AdminDashLayout";
import Dash from "../adminDash/Dash";
import Users from "../adminDash/Users";

import Order from "../components/Order";
import Payment from "../shop/Payment";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/process-checkout",
        element:<Payment/>

      },
      {
       path:"/order",
       element:<Order/>
      },
      {
        path: "/search/:searchTerm",
        element: <SearchResults />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:3002/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },

      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:3002/book/${params.id}`),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/dashboard",
    element: 
      <PrivateRoute>
        <AdminDashLayout />
      </PrivateRoute>
    ,
    children: [
      {
        path: "/dashboard",
        element:<Dash/>
      },
      {
        path:"/dashboard/users",
        element:<Users/>,
      }
    ],
  },
]);

export default router;
