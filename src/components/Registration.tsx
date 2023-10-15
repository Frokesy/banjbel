import Title from "./layout/Title";
import InputField from "./layout/InputField";
import PageTransition from "./PageTransition";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Registration = () => {
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
          className="mb-[10vh] w-[90%] mx-auto"
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
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Registration;
