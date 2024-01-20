import React, { useState } from "react";
import {
  AiOutLineMenu,
  AiOutLineSearch,
  AiOutLineClose,
  AiOutlineCloseCircle,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";

import { BsFillCartFill, BsFillUmbrellaFill, BsPerson } from "react-icons/bs";

import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdFavorite, MdHelp, MdOutLineFavorite } from "react-icons/md";

const TopNav = () => {
  const [sideNav, SetSideNav] = useState(false);

  return (
    <div className=" mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => SetSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Yum
          <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center rounded-full bg-gray-200 mx-2 p-1 text-base">
          <h1 className="text-white rounded-full bg-orange-700 p-2 text-bold">
            Free
          </h1>
          <h1 className="text-black p-[2px]">Delivery</h1>
        </div>
      </div>

      <div className="bg-gray-200 px-2 w-[200px] sm:w-[400px] lg:w-[500px] flex items-center rounded-full ">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Meals"
          className="bg-transparent p-2 w-full focus:outline-none"
        ></input>
      </div>
      <button className="cursour-pointer hidden md:flex text-center items-center py-2 px-10 text-white bg-orange-700 rounded-full ">
        <BsFillCartFill size={20} /> Cart
      </button>
      {sideNav && (
        <div
          onClick={() => SetSideNav(!sideNav)}
          className=" bg-white/10 fixed w-full h-screen z-10 top-0 "
        ></div>
      )}

      {sideNav ? (
        <div
          className={
            sideNav
              ? "fixed top-0 left-0 w-[300px] bg-gray-500 h-screen z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] bg-gray-500 h-screen z-10 duration-300"
          }
        >
          <div
            onClick={() => SetSideNav(!sideNav)}
            className=" cursor-pointer absolute top-0 right-0 p-3"
          >
            <AiOutlineCloseCircle size={25} />
          </div>

          <h1 className="text-2xl p-2 ">
            Yum<span className="   text-orange-400 font-bold">Eats</span>
          </h1>
          <nav>
            <ul className="p-4 text-gray-100">
              <li className="cursor-pointer flex items-center text-xl py-4 flex">
                <BsPerson
                  size={25}
                  className="text-white bg-black rounded-full mr-3 "
                />
                My Account
              </li>
              <li className="cursor-pointer flex items-center text-xl py-4 flex">
                <TbTruckReturn
                  size={25}
                  className="text-white bg-black rounded-full mr-3 "
                />
                My Favourites
              </li>
              <li className="cursor-pointer flex items-center text-xl py-4 flex">
                <MdFavorite
                  size={25}
                  className="text-white bg-black rounded-full mr-3 "
                />
                My Favorite
              </li>
              <li className="cursor-pointer flex items-center text-xl py-4 flex">
                <FaGoogleWallet
                  size={25}
                  className="text-white bg-black rounded-full mr-3 "
                />
                My Wallet
              </li>
              <li className="cursor-pointer flex items-center text-xl py-4 flex">
                <MdHelp
                  size={25}
                  className="text-white bg-black rounded-full mr-3 "
                />
                Help
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TopNav;
