import { useState } from "react";
import MenuItems from "./MenuItems";
import { Twirl as Hamburger } from "hamburger-react";

const Header = () => {
  const [showItems, setShowItems] = useState(false);
  return (
    <div className="px-2 py-3 flex items-center bg-[#f6f6f6] text-[#456db4] justify-between">
      <img
        src="/assets/logo.png"
        alt="logo"
        className="w-[5rem]"
      />
      <span className="text-[16px] uppercase font-bold">
        banjbel driving school
      </span>
      <div className="cursor-pointer">
        <Hamburger size={24} toggled={showItems} toggle={setShowItems} />
      </div>

      {showItems && <MenuItems setShowItems={setShowItems} />}
    </div>
  );
};

export default Header;
