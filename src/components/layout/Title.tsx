import { FC } from "react";

interface TitleProps {
  content: string;
}

const Title: FC<TitleProps> = ({ content }) => {
  return (
    <div className="flex flex-col w-[70%] mx-auto justify-center mt-10 mb-6">
      <div className="bg-[url('/assets/pentagon.png')] flex pt-2 pb-14 justify-center h-full bg-no-repeat">
        <h2 className="text-[20px] font-bold text-[#fff] uppercase">
          {content}
        </h2>
      </div>
    </div>
  );
};

export default Title;
