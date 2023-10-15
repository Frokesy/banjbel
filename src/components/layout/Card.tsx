import { FC } from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface CardProps {
  title: string;
  items: string[];
}

const Card: FC<CardProps> = ({ title, items }) => {
  return (
    <div className="mb-[10vh]">
      <Title content={title} />
      <motion.div
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        className="border border-[#456db4] bg-[#f6f6f6] space-y-6 py-4 px-6"
      >
        {items.map((item) => (
          <p
            key={item}
            className="text-[#456db4] text-[18px] text-center font-bold"
          >
            {item}
          </p>
        ))}
      </motion.div>
      <div className="flex justify-center">
        <NavLink to="/registration">
          <button className="uppercase border border-[#456db4] text-[#456db4] text-[18px] font-semibold py-1 px-6 bg-[#F6F6F6] rounded-full mt-6">
            Register
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
