import React from "react";
import Article from "./Article";
import Aside from "./Aside";
import SubArticle from "./SubArticle";

function Section() {
  return (
    <div className="grid grid-cols-3 my-10">
      <Article className="col-span-2 max-sm:col-span-3"/>
      <Aside className="max-sm:col-span-3"/>
      <SubArticle className="col-span-3"/>
    </div>
  );
}

export default Section;
