import React from "react";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Video from "./Video/Video";
import Price from "./Price/Price";

const Main = ({ language }) => {
  return (
    <main>
      <Skills language={language} />
      <Portfolio language={language} />
      <Video language={language} />
      <Price language={language} />
    </main>
  );
};

export default Main;
