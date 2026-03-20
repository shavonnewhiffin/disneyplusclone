import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import luca from "./../assets/Images/luca.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center gap-8 justify-between p-5">
      <div className="flex gap-8 items-center">
        
        {/* Logo */}
        <img
          src={logo}
          className="w-[80px] md:w-[115px] sm:w-[120px] object-cover cursor-pointer hover:scale-110 duration-300"
          alt=""
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* Mobile + Tablet Menu */}
        <div className="flex lg:hidden gap-8">
          {menu.slice(0, 3).map((item) => (
            <HeaderItem
              key={item.name}
              name={item.name}
              Icon={item.icon}
              showText={false}
            />
          ))}

          {/* Dropdown */}
          <div
            className="relative z-10"
            onClick={() => setToggle(!toggle)}
          >
            <HeaderItem name="" Icon={HiDotsVertical} />

            {/* ✅ ALWAYS RENDERED (this fixes animation) */}
            <div
              className={`
                absolute mt-3 w-40
                border border-gray-700
                p-3 px-5 py-4
                rounded-lg
                bg-[#121212]/90
                backdrop-blur-md
                shadow-lg shadow-black/50

                transform transition-all duration-300 ease-out

                ${
                  toggle
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }
              `}
            >
              {menu.slice(3, 6).map((item) => (
                <HeaderItem
                  key={item.name}
                  name={item.name}
                  Icon={item.icon}
                  showText={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profile */}
      <img src={luca} className="w-[40px] rounded-full sm:mr-2" alt="" />
    </div>
  );
};

export default Header;