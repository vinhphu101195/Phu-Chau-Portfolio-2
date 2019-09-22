import React from "react";

import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__infor">
          <h2 className="heading-2 ">Web Developer: </h2>
          <h1 className="heading-1 ">Phu Chau</h1>
          <h3 className="heading-3">Work Hard - Play Hard</h3>
          <button class="btn header__btn">more</button>
        </div>
        <div className="header__avatar"></div>
      </header>
    </div>
  );
}

export default App;
