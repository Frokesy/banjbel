import Footer from "./Footer";

const Baff = () => {
  return (
    <div>
      <div className="w-[90%] lg:w-[70%] mx-auto">
        <h2 className="uppercase lg:text-[34px] text-[20px] text-[#456db4] font-bold text-center pt-10 pb-4">
          Cultural Event Unites Community with Engaging Traffic Regulations
          Lectures
        </h2>
        <div className="flex flex-col items-center justify-center">
          <img
            src="/slideshow/10.jpg"
            alt="baff"
            className="lg:h-[500px] w-[500px]"
          />

          <div className="mt-14 space-y-4">
            <p className="text-[16px] text-[#333] text-center">
              In a vibrant and educational gathering like BAFF'24, this cultural
              event will bring together local residents, professionals, and
              enthusiasts to explore the often overlooked but crucial topic of
              traffic regulations. The event, will hold in the heart of Ibadan
              city and provids a platform for individuals to not only celebrate
              their cultural heritage but also gain valuable insights into road
              safety and traffic management.
            </p>
            <p className="text-[16px] text-[#333] text-center">
              The event will take place at Islamic college Bashorun, where
              attendees will be greeted with an array of sights and sounds that
              reflect the rich diversity of the neighborhood. Booths will be
              filled with ethnic foods, traditional music, and cultural
              artifacts to create an atmosphere of festivity and unity. However,
              the true highlight of the day is a series of engaging lectures and
              discussions on traffic regulations. We at Banjbel Driving School
              are the host and we will be inviting knowledgeable experts in the
              field.
            </p>
            <p className="text-[16px] text-[#333] text-center">
              The lectures will cover a wide range of topics, from the
              importance of obeying traffic laws to the role of road safety in
              maintaining a harmonious community. The speakers, which included
              the FRSC and transportation experts will effectively communicate
              the significance of responsible driving and the impact it has on
              everyone's lives.
            </p>
            <p className="text-[16px] text-[#333] text-center">
              One of the most compelling segments of the event will be a panel
              discussion that allows attendees to ask questions and share their
              own experiences and concerns regarding traffic regulations. This
              interactive element will foster a sense of community engagement
              and provide a platform for individuals to voice their opinions.
            </p>
            <p className="text-[16px] text-[#333] text-center">
              The cultural event will not only educational but also fun. It will
              successfully manage to blend a celebration of diverse backgrounds
              with an important message about safety. Attendees will leave the
              event with a heightened awareness of traffic regulations and their
              role in promoting road safety and community well-being.{" "}
            </p>

            <p className="text-[16px] text-[#333] text-center">
              This event will be the first of it's kind and will serve as a
              shining example of how cultural gatherings can be used to convey
              essential information and create awareness in a creative and
              engaging way. By integrating lectures on traffic regulations into
              a cultural celebration, the event will demonstrate the potential
              for building stronger, more responsible communities through
              education and shared experiences. It will emphasize the idea that
              every individual has a part to play in creating a safer and more
              cohesive society, starting with responsible road behavior.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Baff;
