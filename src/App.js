import React, { useState, useEffect } from "react";

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

  const onScrollingAddSkills = () => {
    const lastItem = document.querySelector(".loadSkills");
    const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    if (lastItemOffset + 300 <= pageOffset) {
      setKey(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScrollingAddSkills);

    return () => {
      window.removeEventListener("scroll", onScrollingAddSkills);
    }
  })



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
