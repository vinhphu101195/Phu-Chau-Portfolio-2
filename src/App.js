import React from "react";
import Header from "./components/headerPage/HeaderPage";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";

import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Profile></Profile>
      <Skills></Skills>
    </div>
  );
}

export default App;
