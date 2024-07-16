import React from "react";
import GamingGrowth from "../../assets/images/image-gaming-growth.jpg";
import RetroPCs from "../../assets/images/image-retro-pcs.jpg";
import TopLaptop from "../../assets/images/image-top-laptops.jpg";

function SubArticle({ className }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mt-14 ${className}`}
    >
      <a href="#RetroPcs" className="flex flex-row gap-6">
        <div className="w-36">
          <img src={RetroPCs} alt="RetroPcs" />
        </div>
        <div className="w-full">
          <h4 className="text-soft-red font-bold text-[25px]">01</h4>
          <h3 className="text-very-dark-blue font-bold text-[15px] mb-2 hover:text-soft-red">
            Reviving Retro PCs
          </h3>
          <p className="text-dark-grayish-blue text-[13px]">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </a>
      <a href="#TopLaptop" className="flex flex-row gap-6">
        <div className="w-36">
          <img src={TopLaptop} alt="TopLaptop" />
        </div>
        <div className="w-full">
          <h4 className="text-soft-red font-bold text-[25px]">02</h4>
          <h3 className="text-very-dark-blue font-bold text-[15px] mb-2 hover:text-soft-red cursor-pointer">
            Top 10 Laptops of 2022
          </h3>
          <p className="text-dark-grayish-blue text-[13px]">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </a>
      <a href="#GamingGrowth" className="flex flex-row gap-6">
        <div className="w-36">
          <img src={GamingGrowth} alt="GamingGrowth" />
        </div>
        <div className="w-full">
          <h4 className="text-soft-red font-bold text-[25px]">03</h4>
          <h3 className="text-very-dark-blue font-bold text-[15px] mb-2 hover:text-soft-red cursor-pointer">
            The Growth of Gaming
          </h3>
          <p className="text-dark-grayish-blue text-[13px]">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </a>
    </div>
  );
}

export default SubArticle;