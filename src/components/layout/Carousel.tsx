import Carousel from "nuka-carousel";

const CarouselContainer = () => {
    const images = [
    "/slideshow/1.jpg",
    "/slideshow/2.jpg",
    "/slideshow/3.jpg",
    "/slideshow/4.jpg",
    "/slideshow/5.jpg",
    "/slideshow/6.jpg",
    "/slideshow/7.jpg",
    "/slideshow/8.jpg",
    "/slideshow/9.jpg",
    "/slideshow/10.jpg",
    ]
  return (
    <Carousel autoplay autoplayInterval={4000} wrapAround withoutControls animation="fade">
        {images.map((image, index) => (
            <div key={index} className="w-full h-[350px] lg:h-[650px]">
            <img
                src={image}
                alt="slideshow"
                className="w-full h-full object-cover"
            />
            </div>
        ))}
    </Carousel>
  );
};

export default CarouselContainer;
