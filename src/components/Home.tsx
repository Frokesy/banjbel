import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import About from "./About";
import PageTransition from "./PageTransition";
import Registration from "./Registration";
import Card from "./layout/Card";
import CarouselContainer from "./layout/Carousel";
import Footer from "./Footer";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const cardVariants = {
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
      <div className="">
        <CarouselContainer />
        <div className="lg:flex lg:mt-10 lg:items-center lg:justify-between">
          <div className="lg:w-[45%]">
            <About fromHome />
          </div>
          <div className="lg:w-[50%]">
            <Registration fromHome />
          </div>
        </div>
        <div className="w-[90%] mx-auto lg:grid lg:grid-cols-3 gap-x-10" ref={ref}>
          <AnimatePresence>
            {inView && (
              <>
                <motion.div
                  key="auto-car"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Card
                    title="auto car"
                    items={[
                      "1 week - 1hr/day - N15,000",
                      "2 weeks - 1hr/day - N25,000",
                      "3 weeks - 1hr/day - N35,000",
                      "4 weeks - 1hr/day - N45,000",
                    ]}
                  />
                </motion.div>
                <motion.div
                  key="manual-car"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Card
                    title="manual car"
                    items={[
                      "1 week - 1hr/day - N18,000",
                      "2 weeks - 1hr/day - N30,000",
                      "3 weeks - 1hr/day - N40,000",
                      "4 weeks - 1hr/day - N50,000",
                    ]}
                  />
                </motion.div>
                <motion.div
                  key="both-cars"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className=""
                >
                  <Card
                    title="both cars"
                    items={["2 weeks - N33,000", "4 weeks - N60,000"]}
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Home;
