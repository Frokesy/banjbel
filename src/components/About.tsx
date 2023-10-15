import { FC, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageTransition from "./PageTransition";
import { NavLink } from "react-router-dom";

interface Props {
  fromHome?: boolean;
}

const About: FC<Props> = ({ fromHome }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const aboutVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <PageTransition>
      <motion.div
        className="w-[90%] mx-auto py-10"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={aboutVariants}
      >
        <h2 className="uppercase text-[20px] text-[#456db4] font-bold text-center pb-10">
          about us
        </h2>
        {fromHome ? (
          <span className="text-[#828282] text-center text-[18px]">
            Welcome to Banjbel Driving School, where we teach you a safe smart
            driving. Founded in 31st August, 2020, we have been one of the
            fastest growing driving school in Oyo state and the most reviewed
            driving school ever since. Our commitment to provide unparalleled,
            unequal and unrivalled training and educational programs which has
            made us a trusted name in the industry.
          </span>
        ) : (
          <span className="text-[#828282] flex text-center text-[16px]">
            Welcome to Banjbel Driving School!!! Here, we are committed o
            provide unparalleled, unequalled and unrivalled training and
            educational program which will help you or your loved ones learn
            fundamental (basic) and advanced skills required for driving. We
            achieve this by instilling the highest level of confidence (through
            training and exposure) when you or your loved ones are behind the
            wheel. We know what it takes to be able to move the wheels
            appropriately. We also understand that only qualified tutors and the
            right equipment could achieve this. At Banjbel Driving School we are
            dedicated to make learning how to drive a simple task for our
            students. We care so much about the safety of our clients and we are
            determined to make them one of the highest ranking drivers in the
            country. We want you to rest assured that there is none of your
            driving needs that we will not meet, even beyond your expectation.
          </span>
        )}

        {fromHome && (
          <div className="flex justify-center">
            <NavLink to="/about">
              <button className="uppercase border border-[#456db4] text-[#456db4] text-[18px] font-semibold py-0.5 px-3 bg-[#F6F6F6] rounded-full mt-10">
                Learn More
              </button>
            </NavLink>
          </div>
        )}
      </motion.div>
    </PageTransition>
  );
};

export default About;
