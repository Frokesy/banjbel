import Card from "./layout/Card";
import Registration from "./Registration";
import About from "./About";
import PageTransition from "./PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <img src="/src/assets/dummy_img.jpg" alt="dummy_img" />
      <div className="">
        <About />
        <Registration />
        <div className="w-[90%] mx-auto">
          <Card
            title="auto car"
            items={[
              "1 week - 1hr/day - N15,000",
              "2 weeks - 1hr/day - N25,000",
              "3 weeks - 1hr/day - N35,000",
              "4 weeks - 1hr/day - N45,000",
            ]}
          />
          <Card
            title="manual car"
            items={[
              "1 week - 1hr/day - N18,000",
              "2 weeks - 1hr/day - N30,000",
              "3 weeks - 1hr/day - N40,000",
              "4 weeks - 1hr/day - N50,000",
            ]}
          />
          <Card
            title="both cars"
            items={["2 weeks - N33,000", "4 weeks - N60,000"]}
          />
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
