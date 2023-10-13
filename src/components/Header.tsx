import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MenuItems from "./MenuItems";

const Header = () => {
  const [showItems, setShowItems] = useState(false);
  return (
    <div className="px-4 py-3 flex items-center bg-[#f6f6f6] text-[#456db4] justify-between">
      <div className="flex items-center space-x-2">
        <img
          src="/src/assets/sample.png"
          alt="logo"
          className="w-[4rem] rounded-full"
        />
        <span className="text-[18px] uppercase font-bold">
          banjbel driving school
        </span>
      </div>
      <div className="cursor-pointer">
        <FaBars size={24} onClick={() => setShowItems(!showItems)} />
      </div>

      {showItems && <MenuItems setShowItems={setShowItems} />}
    </div>
  );
};

export default Header;
