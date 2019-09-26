import React, { useContext, useState } from "react";
import SmallProject from "./SmallProject";
import { ProjectContext } from "../../contexts/ProjectContexts";

const Projects = () => {
  const { projectObject } = useContext(ProjectContext);
  const { popup } = useState({});

  var showProjects = projects => {
    console.log(projects);

    var result = null;
    if (projects.length > 0) {
      result = projects.map((project, index) => {
        return (
          <SmallProject
            key={index}
            project={project}
            index={index}
          ></SmallProject>
        );
      });
      return result;
    }
  };

  return <section className="projects">{showProjects(projectObject)}</section>;
};

export default Projects;
