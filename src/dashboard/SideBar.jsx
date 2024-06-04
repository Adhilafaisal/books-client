import { Sidebar } from "flowbite-react";

import { HiArrowSmRight, HiBookOpen, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from '../assets/profile.jpg'
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa6";



const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo  >
        <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            <h2>
              Good<span className="text-black">books</span>
            </h2>
          </Link>
      </Sidebar.Logo>
      <Sidebar.Items className="mt-10 shadow-md rounded-md bg-blue-100 h-screen " >
        <Sidebar.ItemGroup className="space-y-5"> 
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          {/* <Sidebar.Item href="#" icon={HiUser} >
            Users
          </Sidebar.Item> */}
          <Sidebar.Item href="/shop" icon={HiBookOpen}>
            Books
          </Sidebar.Item>
          <Sidebar.Item href="/order" icon={HiShoppingBag}>
            Order
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className="space-y-5 mt-10">
          {/* <Sidebar.Item href="/dashboard" icon={HiChartPie}>
           Admin
          </Sidebar.Item> */}
          {/* <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item> */}
          <Sidebar.Item href="/" icon={HiSupport}>
            Home
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar