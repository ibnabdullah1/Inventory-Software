import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import { AiOutlineAppstore } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";
import { BiTransferAlt } from "react-icons/bi";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbReplaceFilled } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { BiFileBlank } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { IoLogoDropbox } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import { FcSalesPerformance } from "react-icons/fc";
import { RiNewspaperLine } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";
import { BiCartAdd } from "react-icons/bi";
const Sidebar = ({ setOpen, open }) => {
  const subMenusList = [
    {
      name: "Products",
      icon: TbReportAnalytics,
      menus: [
        "Product List",
        "Add Product",
        "Category List",
        "Add Category",
        "Sub Category List",
        "Add Sub Category",
        "Brand List",
        "Add Brand",
        "Import Products",
        "Print Barcode",
      ],
    },
    {
      name: "Sales",
      icon: FcSalesPerformance,
      menus: [
        "Sales List",
        "POS",
        "New Sales",
        "Sales Return List",
        "Sales Return List",
      ],
    },

    {
      name: "Purchase",
      icon: RiNewspaperLine,
      menus: ["Purchase List", "Add Purchase", "Import Purchase"],
    },
    {
      name: "Expense",
      icon: GiExpense,
      menus: ["Expense List", "Add Expense", "Expense Category"],
    },

    {
      name: "Quotation",
      icon: BiCartAdd,
      menus: ["Quotation List", "Add Quotation", "Import Quotation"],
    },

    {
      name: "Transfer",
      icon: BiTransferAlt,
      menus: ["Transfer List", "Add Transfer", "Import Transfer"],
    },
    {
      name: "Return",
      icon: HiOutlineArrowUturnLeft,
      menus: [
        "Sales Return List",
        "Add Sales Return",
        "Purchase Return List",
        "Add Purchase Return",
      ],
    },

    {
      name: "People",
      icon: BsFillPeopleFill,
      menus: [
        "Customer List",
        "Add Customer",
        "Supplier List",
        "User List",
        "Store List",
        "Add User",
        "Store List",
        "Add Store",
      ],
    },

    {
      name: "Places",
      icon: TbReplaceFilled,
      menus: ["New Country", "Countries list", "New State", "State list"],
    },
    {
      name: "Components",
      icon: BsBoxSeam,
    },
    {
      name: "Blank Page",
      icon: BiFileBlank,
    },

    {
      name: "Error Pages",
      icon: MdErrorOutline,
      menus: ["404 Error", "500 Error"],
    },

    {
      name: "Elements",
      icon: FiBox,
      menus: [
        "Sweet Alerts",
        "Tooltip",
        "Popover",
        "Ribbon",
        "Clipboard",
        "Drag Drop",
        "Range Slider",
        "Rating",
        "Toaster",
        "Counter",
        "Scrollbar",
        "Spinner",
        "Notification",
        "Lightbox",
        "Sticky Note",
        "Timeline",
      ],
    },

    {
      name: "Application",
      icon: IoLogoDropbox,
      menus: ["Chat", "Calendar", "Email"],
    },

    {
      name: "Report",
      icon: IoStatsChart,
      menus: [
        "Purchase order report",
        "Inventory Report",
        "Sales Report",
        "Invoice Report",
        "Purchase Report",
        "Supplier Report",
        "Customer Report",
      ],
    },
    {
      name: "Users",
      icon: RiUserLine,
      menus: ["New User", "Users List"],
    },

    {
      name: "Settings",
      icon: IoIosSettings,
      menus: [
        "General Settings",
        "Email Settings",
        "Payment Settings",
        "Currency Settings",
        "Group Permissions",
        "Tax Rates",
      ],
    },
  ];
  return (
    <>
      <div
        className={`z-30 fixed flex flex-col justify-between  bg-[#ffffff] w-[280px] space-y-3  inset-y-0 left-0 transform ${
          open && "-translate-x-full"
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className="flex  gap-2.5 bg-white font-medium border-b p-2 border-slate-300  mx-3">
          <img
            src="https://i.ibb.co/K5nYVJq/Brilliant-Consulting-Logo.png"
            width={45}
            alt=""
          />
          <span className="text-xl font-semibold leading-5">
            Brilliant <br />
            Consulting
          </span>
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[100%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>

            <div className="py-5 b ">
              {subMenusList?.map((menu) => (
                <div key={menu.name} className="flex flex-col gap-1">
                  <SubMenu data={menu} />
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
