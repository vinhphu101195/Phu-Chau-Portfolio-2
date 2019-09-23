import React from "react";
import htmllogo from "./logo/html.svg";
import csslogo from "./logo/css.svg";
import javascriptlogo from "./logo/javascript.svg";
import react from "./logo/react.svg";

const Home = () => {
  return (
    <header className="header">
      <div className="header__top">
        <h2 className="heading-2 mb-1">Web Developer: </h2>
        <h1 className="heading-1 mb-1">Vinh Phu Chau</h1>
        <h3 className="heading-3 ">Work Hard - Play Hard</h3>
      </div>
      <div className="header__bottom">
        <div class="header__seenon-text">Technology</div>
        <div class="header__seenon-logos">
          <img src={htmllogo} alt="Seen on logo 1" width="100rem" />
          <img src={csslogo} alt="Seen on logo 2" width="100rem" />
          <img src={javascriptlogo} alt="Seen on logo 3" width="100rem" />
          <img src={react} alt="Seen on logo 4" width="100rem" />
        </div>
      </div>
    </header>
  );
};

export default Home;
