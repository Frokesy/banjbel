import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  fromGallery?: boolean;
  image?: string;
}

const Popup: FC<ModalProps> = ({ isOpen, closeModal, fromGallery, image }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`p-4 rounded-lg ${
              fromGallery ? "h-auto" : "h-[100vh]"
            } shadow-lg`}
          >
            <div className="flex justify-end py-3">
              <button
                onClick={closeModal}
                className="p-2 border-[#ccc] border text-white rounded-full"
              >
                <FaTimes size={24} />
              </button>
            </div>
            {fromGallery ? (
              <div className="">
                <img src={image} alt="baff" />
              </div>
            ) : (
              <div>
                <div className="">
                  <img src="/slideshow/10.jpg" alt="baff" />
                </div>

                <div className="flex justify-center">
                  <NavLink to="/baff">
                    <button
                      onClick={closeModal}
                      className="uppercase border-4 border-[#fff] text-[#fff] text-[18px] font-bold py-1 px-6 rounded-full mt-6"
                    >
                      Register now
                    </button>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
