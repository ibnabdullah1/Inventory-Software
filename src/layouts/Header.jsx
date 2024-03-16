import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = ({ handleToggle }) => {
  return (
    <div className="w-full sticky top-0 z-20">
      <Menu as="div" className="bg-white w-full flex justify-end items-center">
        <div className="px-5 py-2">
          <Menu.Button className="">Options</Menu.Button>
        </div>

        <div
          className="m-3 lg:hidden cursor-pointer"
          onClick={() => handleToggle()}
        >
          <MdMenu size={25} />
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                <button className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                  Edit
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Header;
