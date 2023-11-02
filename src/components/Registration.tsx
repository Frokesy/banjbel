import Title from "./layout/Title";
import InputField from "./layout/InputField";
import PageTransition from "./PageTransition";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { FC, useRef } from "react";
import emailjs from "@emailjs/browser";

interface Props {
  fromHome?: boolean;
}

const Registration: FC<Props> = ({ fromHome }) => {
  const form = useRef<HTMLFormElement>(null);
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

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_oc0t45b",
          "template_khc211r",
          form.current,
          "CSyuEAbV-8CHfYea2"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("sent")
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
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
          <form ref={form} onSubmit={sendEmail}>
            <InputField placeholder="name" type="text" name="from_name" />
            <InputField placeholder="address" type="text" name="address" />
            <InputField placeholder="phone" type="text" name="phone" />
            <InputField placeholder="email" type="email" name="email" />
            <select name="training_option" className="text-[#456db4] outline-none uppercase rounded-lg w-full border border-[#456db4] py-1 px-2 my-2">
              <option value="training option">Training Options</option>
              <option value="manual cars">Manual cars</option>
              <option value="auto cars">Auto Cars</option>
              <option value="both cars">Both cars</option>
            </select>
            <InputField placeholder="notes" textarea name="notes" />
            <div className="flex justify-center">
              <button
                type="submit"
                className="uppercase border border-[#456db4] text-[#456db4] text-[18px] font-semibold py-0.5 px-3 bg-[#F6F6F6] rounded-full mt-4"
              >
                Register
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      {!fromHome && <Footer />}
    </PageTransition>
  );
};

export default Registration;
