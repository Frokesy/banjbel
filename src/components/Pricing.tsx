import PageTransition from "./PageTransition";
import Card from "./layout/Card";
import Footer from "./Footer";

const Pricing = () => {
  return (
    <PageTransition>
      <div className="w-[90%] mx-auto mt-10">
        <h2 className="uppercase lg:text-[34px] text-[20px] text-[#456db4] font-bold text-center">
          Pricing and plans
        </h2>
        <div className="lg:grid lg:grid-cols-3 gap-x-10">
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
      <Footer />
    </PageTransition>
  );
};

export default Pricing;
