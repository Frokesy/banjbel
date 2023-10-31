import Title from "./layout/Title";
import InputField from "./layout/InputField";
import PageTransition from "./PageTransition";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { FC } from "react"

interface Props {
  fromHome?: boolean;
}

const Registration: FC<Props> = ({ fromHome }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const regVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <PageTransition>
      <div ref={ref}>
        <motion.div
          className="mb-[10vh] w-[90%] lg:w-[70%] mx-auto"
          variants={regVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Title content="Quick Registration" />
          <InputField placeholder="name" type="text" />
          <InputField placeholder="address" type="text" />
          <InputField placeholder="phone" type="text" />
          <InputField placeholder="email" type="email" />
          <InputField placeholder="notes" textarea />
          <div className="flex justify-center">
            <button className="uppercase border border-[#456db4] text-[#456db4] text-[18px] font-semibold py-0.5 px-3 bg-[#F6F6F6] rounded-full mt-4">
              Register
            </button>
        </div>
        </motion.div>
      </div>
      {!fromHome && <Footer />}
    </PageTransition>
  );
};

export default Registration;
