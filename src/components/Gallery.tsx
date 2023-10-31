import { useState } from "react";
import PageTransition from "./PageTransition";
import Popup from "./PopUp";
import Footer from "./Footer"

const Gallery = () => {
  const [image, setImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
    "/gallery/12.jpg",
    "/gallery/13.jpg",
    "/gallery/14.jpg",
    "/gallery/15.jpg",
    "/gallery/16.jpg",
    "/gallery/17.jpg",
    "/gallery/18.jpg",
    "/gallery/19.jpg",
    "/gallery/20.jpg",
    "/gallery/21.jpg",
    "/gallery/22.jpg",
    "/gallery/23.jpg",
    "/gallery/24.jpg",
    "/gallery/25.jpg",
    "/gallery/26.jpg",
    "/gallery/27.jpg",
    "/gallery/28.jpg",
    "/gallery/29.jpg",
    "/gallery/30.jpg",
    "/gallery/31.jpg",
    "/gallery/32.jpg",
    "/gallery/33.jpg",
    "/gallery/34.jpg",
    "/gallery/35.jpg",
  ];
  return (
    <PageTransition>
      <div className="py-10 w-[95%] mx-auto">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="w-full cursor-pointer h-[200px]">
              <img
                src={image}
                alt="gallery"
                onClick={() => {
                  setImage(image);
                  openModal();
                }}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
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

export default Gallery;
