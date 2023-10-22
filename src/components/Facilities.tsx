import { NavLink } from "react-router-dom";
import PageTransition from "./PageTransition";
import Footer from "./Footer";
import { useState } from "react";
import Popup from "./PopUp";

const Facilities = () => {
  const [image, setImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const items = [
    {
      id: 1,
      header: "CAR STANDARDS",
      content:
        "At BANJBEL, your safety is our priority. The cars we use for training are typically maintained to high safety standards to ensure the well-being of both the instructors and the students. The cars undergo routine maintenance checks to ensure they are in optimal working condition. This includes inspections of brakes, tires, lights, and other critical components.",
      imgOne: "/gallery/2.jpg",
      imgTwo: "/gallery/4.jpg",
    },
    {
      id: 2,
      header: "OUR CLASSES",
      content:
        "Our classes are designed to be highly conducive, encouraging and supportive for effective learning. To ensure personalized attention, classes are often kept at a moderate size. This allows instructors to closely monitor and address the progress and needs of individual students.",
      imgOne: "/gallery/14.jpg",
      imgTwo: "/gallery/27.jpg",
    },
    {
      id: 3,
      header: "QUALIFIED INSTRUCTORS",
      content:
        "Our instructors are experienced and certified instructors who have a deep understanding of road safety and teaching techniques. They provide structured, comprehensive lessons tailored to each student's learning pace and style.",
      imgOne: "/gallery/24.jpg",
      imgTwo: "/gallery/20.jpg",
    },
    {
      id: 4,
      header: "DRIVING SIMULATORS",
      content:
        "At BANJBEL, we are committed to making your training experiences as pleasurable, effective and comfortable as possible. In order to achieve this, we make use of driving stimulators which complements our traditional training methods and provides a safe and controlled setting for our students to practice and develop their driving skills. This allows them to make mistakes without any real-world consequences, which helps build confidence on the road.",
      imgOne: "/gallery/simulator.jpg",
    },
  ];
  return (
    <PageTransition>
      <div className="w-[90%] mx-auto py-10">
        <h2 className="uppercase text-[20px] text-[#456db4] font-bold text-center pb-3">
          Facilities
        </h2>
        <span className="text-[16px] text-[#404040]">
          BANJBEL offers training in both automatic and manual cars to cater to
          the preferences and needs of their students. We offer training in both
          types of cars, ensuring that students have the opportunity to learn
          the skills needed for both automatic and manual transmissions. So if
          you're looking for a driving school that trains drivers to be
          proficient in both, BANJBEL is your best option.
        </span>
        <div className="space-y-6 pt-3 pb-4 text-[#404040]">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col">
              <h2 className="text-[#456db4] text-[18px] font-bold mt-4 mb-2">
                {item.header}
              </h2>
              <span>{item.content}</span>
              <div
                className={`${
                  item.imgTwo &&
                  "grid grid-cols-2 w-full h-[250px] max-h-[250px] gap-4"
                } my-6`}
              >
                <img
                  src={item.imgOne}
                  alt="car"
                  onClick={() => {
                    setImage(item.imgOne);
                    openModal();
                  }}
                  className="w-full h-full object-cover cursor-pointer"
                />
                {item.imgTwo && (
                  <img
                    src={item.imgTwo}
                    alt="car"
                    onClick={() => {
                      setImage(item.imgTwo);
                      openModal();
                    }}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <NavLink to="/gallery">
            <button className="uppercase border border-[#456db4] text-[#456db4] text-[18px] font-semibold py-0.5 px-3 bg-[#F6F6F6] rounded-full mt-10">
              Gallery
            </button>
          </NavLink>
        </div>
      </div>
      {image && (
        <Popup
          isOpen={isModalOpen}
          closeModal={closeModal}
          fromGallery
          image={image}
        />
      )}
      <Footer />
    </PageTransition>
  );
};

export default Facilities;
