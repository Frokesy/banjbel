import InputField from "./layout/InputField";
import Footer from "./Footer";

const Baff = () => {
  return (
    <div>
      <div className="w-[90%] lg:w-[70%] mx-auto">
        <h2 className="uppercase lg:text-[34px] text-[20px] text-[#456db4] font-bold text-center pt-10 pb-4">
          baff registration
        </h2>
        <div className="flex flex-col items-center justify-center">
          <img src="/slideshow/10.jpg" alt="baff" className="lg:h-[500px] w-[500px]" />
          <span className="text-[#828282] flex text-center text-[16px] lg:text-[20px ] pt-6">
            Jingle bells, Jingle bells, Jingle all the way... 🎄✨. Christmas is
            around the corner, are you excited? Cos we are 🤗 and can&apos;t
            wait to celebrate it with you 🥳. BANJBEL DRIVING SCHOOL presents to
            you her annual fun festival, BAFF &apos;23 which promises to be
            fun-filled. You really don&apos;t want to miss this festival! There
            will be talent hunt, fashion show, games, comedy show, raffle draw,
            lots of prizes to be won like phones, TV, umbrellas, food items,
            fans and guess what?🤭 a lucky winner will be going home with a car!
            Amazing right? And to crown it all, entry is absolutely free 💯.
          </span>
          <div className="pt-6 flex flex-col text-center lg:text-[20px] space-y-2 text-[#828282] font-semibold">
            <span>Venue: Islamic College Bashorun, Ibadan.</span>
            <span> Date: 23rd December, 2023.</span>
            <span>Time: 12pm prompt.</span>
          </div>
          <h2 className="uppercase text-[20px] text-[#456db4] font-bold text-center pt-10 pb-4">
            you can buy your raffle tickets by calling or filling the online
            form to get your tickets
          </h2>

          <div className="lg:w-[50%]">
            <InputField placeholder="name" type="text" />
            <InputField placeholder="address" type="text" />
            <InputField placeholder="phone number" type="text" />
            <InputField placeholder="email" type="email" />
          </div>
          <div className="flex justify-center">
            <button className="uppercase border border-[#456db4] text-[#456db4] text-[18px] font-semibold py-1 px-6 bg-[#F6F6F6] rounded-full mt-6">
              Buy tickets
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Baff;
