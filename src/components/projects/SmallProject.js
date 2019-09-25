import React from "react";
import advancedcss from "./advanced-css.PNG";

const SmallProject = () => {
  return (
    <div className="project">
      <img src={advancedcss} alt="House 1" className="project__img" />

      <h5 className="project__name">Beautiful Familiy House</h5>
      <div className="project__detail">
        <p>
          I'm working at Front-end position in the Fincoda Project, the
          project's from my university which is Turku AMK The Fincoda Survey
          system is a tool for universities and other working life organizations
          for measuring individuals’ innovation competencies.
        </p>
      </div>

      <button className="btn project__btn">More Information</button>
    </div>
  );
};

export default SmallProject;
