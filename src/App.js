import React, { useState } from "react";

import ProjectContexts from "./contexts/ProjectContexts";

import Header from "./components/headerPage/HeaderPage";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Reference from './components/reference/Reference';
import Footer from "./components/footer/Footer";

import "./sass/main.scss";

function App() {

  const [key, setKey] = useState(false);

  window.addEventListener("scroll", () => {
    const lastItem = document.querySelector(".loadSkills");
    const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    console.log("lastItemOffset " + lastItemOffset);
    console.log("pageOffset " + pageOffset);

    if (lastItemOffset + 300 <= pageOffset) {
      console.log("hello");
      setKey(true)
    }
  });

  return (
    <div className="container">
      <ProjectContexts>
        <Header></Header>
        <Profile></Profile>
        {key ? <Skills></Skills> : ""}
        <Projects></Projects>
        <Contact></Contact>
        <Reference></Reference>
        <Footer></Footer>
      </ProjectContexts>
    </div>
  );
}

export default App;
