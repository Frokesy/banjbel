import { useState } from "react";
import MenuItems from "./MenuItems";
import { Twirl as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showItems, setShowItems] = useState(false);
  return (
    <div className="bg-[#f6f6f6]">
      <div className="px-2 py-3 lg:hidden flex items-center bg-[#f6f6f6] text-[#456db4] justify-between">
        <img src="/assets/logo.png" alt="logo" className="w-[5rem]" />
        <span className="text-[16px] uppercase font-bold">
          banjbel driving school
        </span>
        <div className="cursor-pointer">
          <Hamburger size={24} toggled={showItems} toggle={setShowItems} />
        </div>

        {showItems && <MenuItems setShowItems={setShowItems} />}
      </div>

      <div className="w-[90vw] mx-auto lg:flex justify-between items-center hidden">
        <div className="flex items-center space-x-3">
          <img src="/assets/logo.png" alt="logo" className="w-[5rem]" />
          <span className="text-[24px] uppercase font-bold">
            banjbel driving school
          </span>
        </div>

        <div className="">
          <div className="text-[#456db4] flex space-x-6 uppercase text-[13px] font-bold">
            <NavLink to="/">home</NavLink>

            <NavLink to="/services">services</NavLink>

            <NavLink to="/pricing">pricing</NavLink>

            <NavLink to="/gallery">gallery</NavLink>
            <NavLink to="/facilities">facilities</NavLink>

            <NavLink to="vision">Vision & Mission</NavLink>

            <NavLink to="/about">about Us</NavLink>

            <NavLink to="/registration">register</NavLink>
            <NavLink to="/blog">blog</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
