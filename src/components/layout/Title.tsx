import { FC } from "react";

interface TitleProps {
  content: string;
}

const Title: FC<TitleProps> = ({ content }) => {
  return (
    <div className="flex flex-col w-[70%] mx-auto justify-center mt-10 mb-6">
      <div className="relative bg-[#456db4] flex justify-center py-2">
        <h2 className="text-[20px] font-bold text-[#fff] uppercase">
          {content}
        </h2>
      </div>
    </div>
  );
};

export default Title;
