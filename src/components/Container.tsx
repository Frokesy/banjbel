import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-[100%] justify-center items-center flex mx-auto">
      <div className="lg:min-w-[400px] lg:w-[400px] w-[100%]">{children}</div>
    </div>
  );
};

export default Container;
