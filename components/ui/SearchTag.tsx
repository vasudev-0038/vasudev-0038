// components/SearchTag.tsx
"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
function SearchTag() {
  //   Search Window Toggle
  const [searchOnMobile, setSearchOnMobile] = useState(false);
  const searchToggle = (event: any) => {
    // 👇️ toggle searchOnMobile state variable
    setSearchOnMobile((current) => !current);
  };

  return (
    <div
      className={` flex flex-1 sm:relative sm:inset-auto sm:flex sm:items-center sm:p-0 sm:pt-0  `}
    >
      <button
        type="button"
        onClick={searchToggle}
        className="absolute top-0 right-0 flex items-center justify-center rounded-md py-1 px-3 text-xl text-gray-400 hover:bg-gray-700 hover:text-white sm:hidden sm:py-2"
      >
        <i className="ri-close-line"></i>
      </button>
      <div
        className={`group relative flex w-full flex-wrap   bg-white p-1 pl-10 text-sm ring-blue-1  duration-300 ease-in-out sm:p-2.5 sm:pl-10 rounded sm:rounded-full  `}
      >
        <div className="absolute  z-10 inset-y-0 left-0 flex items-center pl-3 font-semibold text-black/40 focus-within:border-blue-1 ">
          <Icon
            name="search"
            color="currentColor"
            size={24}
            className="text-black/40"
          />
        </div>

        <ul className="flex w-full md:flex-nowrap items-center gap-1 font-montserrat xl:pr-3 overflow-hidden">
          <li
            className={`inline-flex items-center rounded bg-primary py-0.5 px-1 text-xs font-semibold leading-none text-white group-hover:hidden ease-in-out duration-200 sm:px-2 sm:text-sm `}
          >
            Miami, FL (Metro Area)
          </li>

          <li className="relative flex-1 ease-in-out duration-200">
            <input
              type="search"
              className="transitions h-8 w-full border-collapse truncate rounded-full border border-none border-transparent bg-transparent p-1 pl-2 font-montserrat text-xs font-semibold text-black/70 placeholder-black/45 outline-none ease-in-out duration-200 ring-opacity-0 hover:ring-opacity-0 focus:border-0 focus:outline-none  focus:ring-0 focus:ring-opacity-0  sm:text-sm "
              placeholder="Search for buildings by name, city or zip"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchTag;
