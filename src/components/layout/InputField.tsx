import React, { FC } from "react";

interface InputProps {
  placeholder: string;
  textarea?: boolean;
  type?: string;
  name?: string;
}

const InputField: FC<InputProps> &
  React.InputHTMLAttributes<HTMLInputElement> = ({
  placeholder,
  textarea,
  type,
  name,
}) => {
  return (
    <div className="">
      {textarea ? (
        <textarea
          className="placeholder:uppercase placeholder:text-[#456db4] text-[#456db4] outline-none rounded-lg w-full border border-[#456db4] py-1 px-3 my-2"
          placeholder={placeholder}
          name={name}
          required
        />
      ) : (
        <input
          type={type}
          className="placeholder:uppercase placeholder:text-[#456db4] text-[#456db4] outline-none rounded-lg w-full border border-[#456db4] py-1 px-3 my-2"
          placeholder={placeholder}
          name={name}
          required
        />
      )}
    </div>
  );
};

export default InputField;
