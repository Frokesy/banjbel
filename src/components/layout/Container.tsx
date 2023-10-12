import { FC, ReactNode } from "react";
import Header from "../Header";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-[100%] relative justify-center items-center flex mx-auto">
      <div className="lg:min-w-[400px] lg:w-[400px] w-[100%]">
        <div className="h-[11vh]">
          <Header />
        </div>
        <div className="h-[89vh] overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Container;
