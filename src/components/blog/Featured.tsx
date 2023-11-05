import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { getFeaturedArticles } from "../../../services";

interface Article {
  title: string;
  slug: string;
  coverPhoto: {
    url: string;
  };
  categories: { name: string }[];
  author: {
    avatar: {
      url: string;
    };
    name: string;
  };
}

const Featured: React.FC = () => {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);

const fetchFeaturedArticles = async () => {
    try {
        const result = await getFeaturedArticles() as { articles: Article[] };
        if (result && result.articles) {
            setFeaturedArticles(result.articles.slice(0, 3));
        }
    } catch (error) {
        console.error("Error fetching featured articles:", error);
    }
};

useEffect(() => {
    fetchFeaturedArticles();
}, []);

  return (
    <div className="lg:pt-[25vh] pt-[10vh] lg:w-[75vw] w-[90vw] mx-auto">
      <div className="border-b border-[#404040]"></div>
      <h2 className="text-[#fff] text-[20px] pt-6 font-semibold">
        Featured Posts
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10">
        {featuredArticles?.map((article, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${article.coverPhoto.url})` }}
            className={`lg:h-[480px] h-[350px] bg-center bg-cover bg-no-repeat hover:scale-105 transition-all duration-500 ease-in-out rounded-lg`}
          >
            <div className="bg-[#000000a6] h-[100%] flex flex-col rounded-lg justify-end px-4">
              <div className="flex items-center space-x-2">
                {article.categories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-[#fff] text-[13px] py-1 px-4 rounded-full"
                  >
                    <h2>{category.name}</h2>
                  </div>
                ))}
              </div>
              <NavLink to={`/blog/${article.slug}`}>
                <h2 className="lg:text-[24px] text-[20px] text-[#fff] py-4 font-bold cursor-pointer hover:underline">
                  {article.title}
                </h2>
              </NavLink>

              <div className="flex items-center pb-4 space-x-2">
                <img
                  src={article.author.avatar.url}
                  alt={article.author.name}
                  className="rounded-full h-[40px] w-[40px]"
                />
                <h2 className="text-[#fff] font-bold text-[14px]">
                  by {article.author.name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
