import PageTransition from "./PageTransition";
import Footer from "./Footer";


const Vision = () => {
  return (
    <PageTransition>
      <div className="w-[90%] lg:w-[70%] mx-auto py-10">
        <h2 className="uppercase text-[20px] lg:text-[34px] text-[#456db4] font-bold text-center pb-10">
          mission and vision
        </h2>
        <div className="lg:flex lg:flex-col lg:items-center">
          <h2 className="text-[18px] lg:text-[24px] text-[#828282] font-bold text-center pb-4">
            Mission statement
          </h2>
          <span className="text-[#828282] flex text-center text-[16px] lg:text-[18px]">
            Empowering learners with the knowledge, skills and confidence to
            become safe, responsible and skilled drivers for a lifetime of
            successful journeys.
          </span>
        </div>

        <div className="lg:flex lg:flex-col lg:items-center">
          <h2 className="text-[18px] lg:text-[24px] text-[#828282] font-bold text-center mt-10 pb-4">
            Vision statement
          </h2>
          <span className="text-[#828282] flex text-center text-[16px] lg:text-[18px]">
            To be one of the leading driving schools recognized for setting the
            highest standards in driver education, safety and innovation, while
            shaping the future of responsible and skilled drivers.
          </span>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Vision;
