
import { TypeAnimation } from "react-type-animation";
import Featured from "../components/blog/Featured";
import LatestPosts from "../components/blog/LatestPosts";
import Footer from "../components/Footer";
const Blog = () => {
  return (
    <div>
      <div className="bg-[#151A25] lg:h-[80vh] h-[100vh]">
        <div className="lg:w-[75vw] w-[90vw] mx-auto">
          <div className="py-[7vh]">
          </div>
          <div className="lg:w-[55vw] w-[100%]">
            <h2 className="lg:text-[50px] text-[36px] pt-[5vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-pink-200 to-purple-900">
              Banjbel Blog
            </h2>
            <span className="pt-[2vh] lg:text-[20px] text-[16px] text-white">
              <TypeAnimation
                sequence={[
                  "Great news and Articles from around the world, get unbelievable knowledge in the easiest of ways through our blog. Have fun!!!",
                  1000,
                  "Great news and Articles from around the world, get unbelievable knowledge in the easiest of ways through our blog. Stay entertained!",
                  1000,
                  "Great news and Articles from around the world, get unbelievable knowledge in the easiest of ways through our blog. Stay updated!",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ color: "#fff" }}
                repeat={Infinity}
              />
            </span>
          </div>
        </div>
        <Featured />
        <LatestPosts />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
