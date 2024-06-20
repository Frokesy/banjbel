import { FC, ReactNode } from "react";
import Header from "../Header";
import { NavLink } from "react-router-dom";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-[100%] relative justify-center items-center flex mx-auto">
      <div className="w-[100%]">
        <div className="">
          <Header />
        </div>
        <div className="h-[88vh] overflow-auto">{children}</div>
        <NavLink to="/baff" className="fixed bottom-0 lg:left-0 right-0 bg-[#3d425f] text-[#fff] italic uppercase font-bold lg:mx-4 mx-6 lg:w-[200px] w-[140px] flex justify-center items-center lg:space-x-6 space-x-4 lg:py-3 py-2 lg:mb-2 mb-24 rounded-full shadow-2xl">
          <p className="lg:text-[20px] text-[15px]">baff'24</p>
          <div className="bg-inherit border-2 border-[#fff] lg:h-8 lg:w-8 h-5 w-5 flex justify-center items-center rounded-full">
            <div className="bg-[#fff] rounded-full lg:h-3 lg:w-3 h-2 w-2 transition-colors animate-pulse ease-in-out duration-100"></div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Container;
