//import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { TbMessage } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";

const TopBar = () => {9
  return (
    <div className="pl-64">
      <div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-grey 500 border-b border-gray-200 bg-border-grey-400  ">
        <div className="flex flex-1 px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between flex-1">
            <div className="flex-1 hidden max-w-xs ml-8 mr-auto xl:ml-0 lg:block">
              <label htmlFor="" className="sr-only">
                {" "}
                Search{" "}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FiSearch />
                </div>

                <input
                  type="search"
                  name=""
                  id=""
                  className="block w-full py-2 pl-10 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  placeholder="Search here"
                />
              </div>
            </div>

            <div className="flex items-center ml-auto space-x-6">
              <div className="relative">
                <button
                  type="button"
                  className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100"
                >
                  <TbMessage style={{ fontSize: "20px" }} />
                </button>
                <span className="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white">
                  {" "}
                  2{" "}
                </span>
              </div>

              <div className="relative">
                <button
                  type="button"
                  className="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100"
                >
                  <IoIosNotifications style={{ fontSize: "22px" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
 