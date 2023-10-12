import { FC } from "react";

interface InputProps {
  placeholder: string;
  textarea?: boolean;
  type?: string;
}

const InputField: FC<InputProps> = ({ placeholder, textarea, type }) => {
  return (
    <div className="">
      {textarea ? (
        <textarea
          className="placeholder:uppercase placeholder:text-[#456db4] text-[#456db4] outline-none rounded-lg w-full border border-[#456db4] py-1 px-3 my-2"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className="placeholder:uppercase placeholder:text-[#456db4] text-[#456db4] outline-none rounded-full w-full border border-[#456db4] py-1 px-3 my-2"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputField;
