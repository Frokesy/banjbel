import {
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
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

        <div className="flex flex-col space-y-3">
          <h2 className="text-[#404040] text-[20px] mt-6 font-bold">Company</h2>
          <NavLink to="/about">
            <p className="text-[#404040] font-semibold text-[16px]">About Us</p>
          </NavLink>
          <p className="text-[#404040] font-semibold text-[16px]">Reviews</p>
        </div>

        <div className="flex flex-col space-y-2 mt-6">
          <h2 className="text-[#404040] text-[20px] font-bold">Support</h2>
          <NavLink to="/terms">
            <p className="text-[#404040] font-semibold text-[16px]">
              Terms and Conditions
            </p>
          </NavLink>
        </div>

        <h2 className="text-[#404040] text-[20px] mt-6 mb-3 font-bold">
          Contacts
        </h2>
        <div id="contact" className="flex items-center space-x-4 mb-10">
          <a href="https://wa.me/+2348155100856">
            <FaWhatsapp size={30} color="green" />
          </a>
          <a href="mailto:support@banjbeldrivingschool.com">
            <FaEnvelope size={30} color="#404040" />
          </a>
          <a href="https://www.instagram.com/banjbeldrivingschool/">
            <FaInstagram size={30} color="red" />
          </a>
          <a href="https://www.youtube.com/@banjbeldrivingschool1098">
            <FaYoutube size={30} color="red" />
          </a>
          <a href="https://www.facebook.com/banjbeldedrive">
            <FaFacebook size={30} color="#456db4" />
          </a>
          <a
            href="https://www.linkedin.com/in/banjbel-driving-school-622151183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            <FaLinkedin size={30} color="#456db4" />
          </a>
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
