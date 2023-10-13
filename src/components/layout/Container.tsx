import { FC, ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-[100%] relative justify-center items-center flex mx-auto">
      <div className="lg:min-w-[400px] lg:w-[400px] w-[100%]">
        <div className="">
          <Header />
        </div>
        <div className="h-[88vh] overflow-auto">
          {children}
          <Footer />
          </div>
      </div>
    </div>
  );
};

export default Container;
