import React from "react";

const SmallProject = props => {
  console.log("hello");

  console.log(props);

  var showSkills = skills => {
    var result = null;
    if (skills.length > 0) {
      result = skills.map((skill, index) => {
        return (
          <p className="project__detail__item">
            <i class="fa fa-check icon" aria-hidden="true"></i>
            {skill}
          </p>
        );
      });
    }
    return result;
  };

  return (
    <div className="project">
      <img
        src={props.project.img}
        alt="avatar of the project"
        className="project__img"
      />

      <h5 className="project__name">{props.project.name}</h5>
      <div className="project__detail">{showSkills(props.project.skills)}</div>

      <button className="btn project__btn">More Information</button>
    </div>
  );
};

export default SmallProject;
