import React from "react";
import Header from "./components/headerPage/HeaderPage";
import Profile from "./components/profile/Profile";

import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Profile></Profile>
    </div>
  );
}

export default App;
