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
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (

    // Navbar
    <div className="flex items-center gap-8 justify-between p-5">
      <div className="flex gap-8 items-center">

        {/* Disney Logo */}
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" alt="" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* Mobile Menu - Icons only, text hidden */}
        <div className="flex md:hidden gap-8">
          {menu.slice(0, 3).map(
            (item) =>
               (
                <HeaderItem key={item.name} name={item.name} Icon={item.icon} showText={false}/>
              )
          )}

          {/* Mobile dropdown menu */}
          <div className="md:hidden relative" onClick={()=>setToggle(!toggle)}>
            <HeaderItem name="" Icon={HiDotsVertical} />
          {toggle?<div className='absolute mt-3 w-40 bg-[#121212]
          border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.slice(3, 6).map(
              (item) => (
                  <HeaderItem
                    key={item.name}
                    name={item.name}
                    Icon={item.icon}
                    showText={true}
                  />
                )
            )}
          </div>:null}
          </div>
        </div>
      </div>
      <img src={luca} className="w-[40px] rounded-full" alt="" />
    </div>
  );
};

export default Header;
