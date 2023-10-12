import {
  FaEnvelope,
  FaFacebook,
  FaGooglePlus,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="flex w-[90%] mx-auto justify-between pt-6">
        <FaPhone size={30} color="#456db4" />
        <FaEnvelope size={30} color="#404040" />
        <FaFacebook size={30} color="#456db4" />
        <FaTwitter size={30} color={"blue"} />
        <FaGooglePlus size={30} color="red" />
      </div>
      <div className="mt-20 w-[90%] mx-auto">
        <h2 className="text-[#404040] text-[24px] pb-2 font-bold">Address</h2>
        <span className="text-[#404040] font-semibold text-[18px]">
          AA studio building between L.O.A court and Gasland station Ashi
          junction Bashorun-Akobo road Ibadan.
        </span>

        <div className="flex flex-col space-y-3">
          <h2 className="text-[#404040] text-[24px] mt-3 font-bold">Company</h2>
          <p className="text-[#404040] font-semibold text-[18px]">About Us</p>
          <p className="text-[#404040] font-semibold text-[18px]">Contacts</p>
          <p className="text-[#404040] font-semibold text-[18px]">Reviews</p>
        </div>

        <div className="flex flex-col space-y-2 mt-6 mb-10">
          <h2 className="text-[#404040] text-[24px] font-bold">Support</h2>
          <p className="text-[#404040] font-semibold text-[18px]">
            Terms and Conditions
          </p>
          <p className="text-[#404040] font-semibold text-[18px]">
            Refund Policy
          </p>
        </div>

        <div className="border-b-2 border-[#404040]"></div>
        <p className="text-center text-[#404040] py-6 font-semibold text-[18px]">
            powered by -Goatclouds
        </p>
      </div>
    </div>
  );
};

export default Footer;
