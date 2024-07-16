import React from "react";

function Aside({ className }) {
  return (
    <div className={`bg-very-dark-blue ml-5 py-4 px-5 max-lg:ml-2 max-sm:mt-16 max-sm:ml-0 ${className}`}>
      <h3 className="text-soft-orange font-bold text-[35px] max-lg:text-[25px]">New</h3>
      <div className="py-5 border-b border-off-white">
        <a href="#newWindow" className="cursor-pointer">
          <h4 className="mb-2 text-off-white font-bold hover:text-soft-orange max-lg:text-sm">
            Hydrogen VS Electric Cars
          </h4>
          <p className="text-off-white text-sm">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </a>
      </div>
      <div className="py-5 border-b border-off-white">
        <a href="#newWindow" className="cursor-pointer">
          <h4 className=" mb-2 text-off-white font-bold hover:text-soft-orange max-lg:text-sm">
            The Downsides of AI Artistry
          </h4>
          <p className="text-off-white text-sm">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </a>
      </div>
      <div className="py-5">
        <a href="#newWindow" className="cursor-pointer">
          <h4 className=" mb-2 text-off-white font-bold hover:text-soft-orange max-lg:text-sm">
            Is VC Funding Drying Up?
          </h4>
          <p className="text-off-white text-sm">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </a>
      </div>
    </div>
  );
}

export default Aside;