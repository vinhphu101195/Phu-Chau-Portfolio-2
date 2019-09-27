import React, { useContext, useState } from "react";
import SmallProject from "./SmallProject";
import { ProjectContext } from "../../contexts/ProjectContexts";
import Projectpopup from "./ProjectPopup";

const Projects = () => {
  const { projectObject } = useContext(ProjectContext);
  let [popup, setPopup] = useState({});

  const onClickPopup = data => {
    setPopup((popup = data));
  };

  var showProjects = projects => {
    var result = null;
    if (projects.length > 0) {
      result = projects.map((project, index) => {
        return (
          <SmallProject
            key={index}
            project={project}
            index={index}
            onClickPopup={data => onClickPopup(data)}
          ></SmallProject>
        );
      });
      return result;
    }
  };

  return (
    <section className="projects">
      {showProjects(projectObject)}
      {<Projectpopup project={popup}></Projectpopup>}
    </section>
  );
};

export default Projects;
