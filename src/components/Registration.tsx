import Title from "./layout/Title";
import InputField from "./layout/InputField";
import PageTransition from "./PageTransition";

const Registration = () => {
  return (
    <PageTransition>
      <div className="mb-[10vh] w-[90%] mx-auto">
        <Title content="Quick Registration" />
        <InputField placeholder="name" type="text" />
        <InputField placeholder="address" type="text" />
        <InputField placeholder="phone" type="text" />
        <InputField placeholder="email" type="email" />
        <InputField placeholder="notes" textarea />
      </div>
    </PageTransition>
  );
};

export default Registration;
