import React from "react";
import Skills from "./Skills/Skills";

const Main = ({language}) => {
  return (
    <main>
      <Skills language={language}/>
    </main>
  );
};

export default Main;
