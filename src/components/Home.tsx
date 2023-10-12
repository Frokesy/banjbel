import Container from "./layout/Container";
import Registration from "./Registration";

const Home = () => {
  return (
    <Container>
      <img src="/src/assets/dummy_img.jpg" alt="dummy_img" />
      <div className="w-[90%] mx-auto pt-6">
        <h2 className="uppercase text-[20px] text-[#456db4] font-bold text-center pb-10">
          about us
        </h2>
        <span className="text-[#828282] text-center text-[18px]">
          Welcome to Banjbel Driving School, where we teach you a safe smart
          driving. Founded in 31st August, 2020, we have been one of the fastest
          growing driving school in Oyo state and the most reviewed driving
          school ever since. Our commitment to provide unparalleled, unequal and
          unrivalled training and educational programs which has made us a
          trusted name in the industry.
        </span>

        <div className="flex justify-center">
          <button className="uppercase border border-[#456db4] text-[#456db4] text-[18px] font-semibold py-0.5 px-3 bg-[#F6F6F6] rounded-full mt-10">
            Learn More
          </button>
        </div>

        <Registration />
      </div>
    </Container>
  );
};

export default Home;
