import { FC, ReactNode } from "react";
import Header from "../Header";

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
        <div className="h-[88vh] overflow-auto">
          {children}
          </div>
      </div>
    </div>
  );
};

export default Container;
