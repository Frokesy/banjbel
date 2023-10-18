import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PageTransition from "./PageTransition";
import Footer from "./Footer";

const Facilities = () => {
  const items = [
    "Specialized Training: Banjbel offers specilaized courses such as defensive driving, advanced driving or courses for specific types of vehicles like utility vehicles",
    "Theory Classes: Classroom sessions educate learners about traffic rules, road safety and responsible driving behaviour",
    "Comprehensive Instruction: Banjbel provides organized lessons covering traffic rules, road signs and protective driving methods.",
    "Road Test Practice: Students get the opportunity to practice driving routes similar to those used in official road tests.",
    "Practical Training: Banjbel provides hands-on experience.",
  ];
  return (
    <PageTransition>
      <div className="w-[90%] mx-auto py-10">
        <h2 className="uppercase text-[20px] text-[#456db4] font-bold text-center pb-3">
          Facilities
        </h2>
        <span className="text-[#828282] text-center text-[18px]">
          Banjbel driving school provides essential services that equip future
          drivers with the knowledge and skills needed to drive safely and
          confidently. These services include:
        </span>
        <div className="space-y-6 pt-3 pb-4">
          {items.map((item) => (
            <div key={item} className="text-[#828282] flex space-x-2">
              <FaStar />
              <p>{item}</p>
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
      <Footer />
    </PageTransition>
  );
};

export default Facilities;
