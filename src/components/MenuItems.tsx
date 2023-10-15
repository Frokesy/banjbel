import { FC } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface MenuItemsProps {
  setShowItems: (showItems: boolean) => void;
}

const MenuItems: FC<MenuItemsProps> = ({ setShowItems }) => {
  const radius = 240;
  const angle = 90;
  const startAngle = -45;

  const itemCount = 8;
  const itemAngle = angle / (itemCount - 2);
  const itemPositions = Array.from({ length: itemCount }, (_, i) => {
    const itemAngleDeg = startAngle + i * itemAngle;
    const itemAngleRad = (itemAngleDeg * Math.PI) / 180;
    const x = radius * Math.cos(itemAngleRad);
    const y = radius * Math.sin(itemAngleRad);
    return { x, y };
  });

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute top-0 right-0 lg:right-[35vw] h-full"
    >
      <motion.div
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="justify-end pt-3"
      >
        {itemPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="border border-[#456db4] bg-[#f6f6f6] flex justify-center py-0.5 px-4 rounded-full uppercase text-[13px] font-bold"
            style={{
              position: "absolute",
              left: `calc(50% - ${pos.x}px)`,
              top: `calc(30% + ${pos.y}px)`,
            }}
            variants={itemVariants}
            whileHover="hover"
            onClick={() => setShowItems(false)}
          >
            {i === 0 ? (
              <NavLink to="/">home</NavLink>
            ) : i === 1 ? (
              <NavLink to="/services">services</NavLink>
            ) : i === 2 ? (
              <NavLink to="/pricing">pricing</NavLink>
            ) : i === 3 ? (
              <NavLink to="/gallery">gallery</NavLink>
            ) : i === 4 ? (
              <NavLink to="/facilities">facilities</NavLink>
            ) : i === 5 ? (
              <NavLink to="vision">Vision & Mission</NavLink>
            ) : i === 6 ? (
              <NavLink to="/about">about Us</NavLink>
            ) : (
              <NavLink to="/registration">register</NavLink>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MenuItems;
