import React from "react";

import ProjectContexts from "./contexts/ProjectContexts";

import Header from "./components/headerPage/HeaderPage";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <ProjectContexts>
        <Header></Header>
        <Profile></Profile>
        <Skills></Skills>
        <Projects></Projects>
      </ProjectContexts>
    </div>
  );
}

export default App;
