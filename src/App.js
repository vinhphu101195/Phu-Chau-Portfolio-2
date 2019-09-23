import React from "react";

import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h2 className="heading-2 ">Web Developer: </h2>
        <h1 className="heading-1 ">Vinh Phu Chau</h1>
        <h3 className="heading-3">Work Hard - Play Hard</h3>
        <div class="header__seenon-text">Seen on</div>
        <div class="header__seenon-logos">
          <img src="components/Home/logo/html-logo.jpg" alt="Seen on logo 1" />
          <img src="img/logo-forbes.png" alt="Seen on logo 2" />
          <img src="img/logo-techcrunch.png" alt="Seen on logo 3" />
          <img src="img/logo-bi.png" alt="Seen on logo 4" />
        </div>
      </header>
    </div>
  );
}

export default App;
