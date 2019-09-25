import React, { createContext } from "react";

export const ProjectContext = createContext();

const ProjectContexts = props => {
  var project = {};
  return <ProjectContext value={project}>{props.children}</ProjectContext>;
};

export default ProjectContexts;
