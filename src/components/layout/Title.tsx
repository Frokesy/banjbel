import { FC } from "react";

interface TitleProps {
  content: string;
}

const Title: FC<TitleProps> = ({ content }) => {
  return (
    <div className="flex justify-center mt-10 mb-6">
      <div className="bg-[#456db4] px-10 py-2">
        <h2 className="text-[20px] font-bold text-[#fff]">{content}</h2>
      </div>
    </div>
  );
};

export default Title;
