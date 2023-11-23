import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

const Services = () => {
  const items = [
    "1. Map Reading",
    "2. Basic Driving Course",
    "3. Proficieny Driver Course",
    "4. Executive Driver Course",
    "5. Road Traffic Regulation",
    "6. Car Hire Service",
    "7. Power-bike Training",
    "8.Group/Company Driving Training",
    "9. Process of Driver License",
    "10. Process of number plate",
    "11. City tours",
  ];
  return (
    <PageTransition>
      <div className="w-[90%] mx-auto py-10">
        <h2 className="uppercase lg:text-[34px] text-[20px] text-[#456db4] font-bold text-center pb-10">
          our services
        </h2>
        <div className="space-y-6 pb-4 px-6 lg:text-center">
          {items.map((item) => (
            <p key={item} className="text-[#333] lg:text-[26px] text-[18px]">
              {item}
            </p>
          ))}
        </div>

        <div className="flex justify-center">
          <NavLink to="/registration">
            <button className="uppercase border border-[#456db4] text-[#456db4] text-[18px] font-semibold py-0.5 px-3 bg-[#F6F6F6] rounded-full mt-10">
              enquire
            </button>
          </NavLink>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
