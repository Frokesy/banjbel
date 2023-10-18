import { FaEnvelope, FaPhone, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="mt-20 w-[90%] mx-auto pt-10">
        <h2 className="text-[#404040] text-[20px] pb-2 font-bold">Address</h2>
        <span className="text-[#404040] font-semibold text-[16px]">
          AA studio building between L.O.A court and Gasland station Ashi
          junction Bashorun-Akobo road Ibadan.
        </span>

        <div id="contact" className="flex flex-col space-y-3">
          <h2 className="text-[#404040] text-[20px] mt-6 font-bold">
            Contacts
          </h2>
          <div className="flex items-center space-x-2">
            <FaWhatsapp size={20} color="green" />
            <p className="text-[#404040] font-semibold text-[14px]">
              08155100856
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone size={16} color="#456db4" />
            <p className="text-[#404040] font-semibold text-[14px]">
              08155100856
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope size={20} color="#404040" />
            <p className="text-[#404040] font-semibold text-[14px]">
              banjbeldrivingschool@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaFacebook size={20} color="#456db4" />
            <p className="text-[#404040] font-semibold text-[14px]">
              Banjbel Driving School
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h2 className="text-[#404040] text-[20px] mt-6 font-bold">Company</h2>
          <NavLink to="/about">
            <p className="text-[#404040] font-semibold text-[16px]">About Us</p>
          </NavLink>
          <p className="text-[#404040] font-semibold text-[16px]">Reviews</p>
        </div>

        <div className="flex flex-col space-y-2 mt-6 mb-10">
          <h2 className="text-[#404040] text-[20px] font-bold">Support</h2>
          <NavLink to="/terms">
            <p className="text-[#404040] font-semibold text-[16px]">
              Terms and Conditions
            </p>
          </NavLink>
        </div>

        <div className="border-b-2 border-[#404040]"></div>
        <p className="text-center text-[#404040] py-6 font-semibold text-[16px]">
          powered by -Goatclouds
        </p>
      </div>
    </div>
  );
};

export default Footer;
