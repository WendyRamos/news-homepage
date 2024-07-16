import React from "react";
import ImageArticleDesktop from "../../assets/images/image-web-3-desktop.jpg";
import ImageArticleMobile from "../../assets/images/image-web-3-mobile.jpg";

function Article({ className }) {
  return (
    <div className={`mr-5 max-lg:mr-2 ${className}`}>
      <div>
        <img className="max-sm:hidden" src={ImageArticleDesktop} alt="ImageArticleDesktop" />
        <img
          className="hidden max-sm:block"
          src={ImageArticleMobile}
          alt="ImageArticleMobile"
        />
      </div>
      <div className="grid grid-cols-2 mt-4">
        <h1 className="mr-9 text-[45px] leading-none font-extrabold text-very-dark-blue max-md:col-span-2">
          The Bright Future of Web 3.0?
        </h1>
        <div className="mr-4 max-md:col-span-2 max-md:mt-8">
          <p className="text-sm text-dark-grayish-blue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-soft-red mt-6 px-7 py-2 tracking-widest font-bold text-very-dark-blue hover:bg-very-dark-blue hover:text-off-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
