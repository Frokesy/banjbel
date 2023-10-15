import Carousel from "nuka-carousel";

const CarouselContainer = () => {
  return (
    <Carousel autoplay autoplayInterval={3000} wrapAround withoutControls animation="zoom">
      <img src="/slideshow/1.jpg" className="h-[45vh] w-[100%]" />
      <img src="/slideshow/2.jpg" className="h-[45vh] w-[100%]" />
      <img src="/slideshow/3.jpg" className="h-[45vh] w-[100%]" />
      <img src="/slideshow/4.jpg" className="h-[45vh] w-[100%]" />
      <img src="/slideshow/5.jpg" className="h-[45vh] w-[100%]" />
      <img src="/slideshow/6.jpg" className="h-[45vh] w-[100%]"  />
      <img src="/slideshow/7.jpg" className="h-[45vh] w-[100%]" />
      <img src="/slideshow/8.jpg" className="h-[45vh] w-[100%]" />
      <img src="/slideshow/9.jpg" className="h-[45vh] w-[100%]" />
      <img src="/slideshow/10.jpg" className="h-[45vh] w-[100%]" />
    </Carousel>
  );
};

export default CarouselContainer;
