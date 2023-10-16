import PageTransition from "./PageTransition";
import Footer from "./Footer";

const Terms = () => {
  return (
    <PageTransition>
      <div className="w-[90%] mx-auto py-10">
        <h2 className="uppercase text-[20px] text-[#456db4] font-bold text-center pb-10">
          terms and conditions
        </h2>
        <span className="text-[#828282] flex text-center text-[16px]">
          All students are implored to be consistent with their training time:
          no lessons shall be rescheduled for not showing up for classes. All
          lessons are 1hr per day: 30 minutes practical and 30 minutes dialogue
          for regular classes and 1hr 30 minutes for intensive classes and are
          expected to finish within training day from day of commencement. The
          cost of damages shall be paid equally with te school if any due to the
          student negligence. Kindly make adequate and proper arrangement before
          payment, no refund shall be made after training commences. The balance
          of the fee is expected to be paid by the 6th day of the training clas.
          Your registration shall be forfeited if you fail to commence your
          training within 15 days from the day of payment. Increase in general
          fuel prices shall cause slightly additional fee from the agreed price
          which shall include adding a token to the initial payment. Children
          and visitors are not allowed to be in the training vehicle while you
          drive. Thanks for your cooperation.
        </span>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Terms;
