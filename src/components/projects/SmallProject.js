import React from "react";

const SmallProject = props => {
  const showSkills = skills => {
    if (skills.length > 0) {
      return skills.map((skill, index) => {
        return (
          <p className="project__detail__item" key={index}>
            <i className="fa fa-check icon" aria-hidden="true"></i>
            {skill}
          </p>
        );
      });
    }
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

      <a href="#popup" className="project__a">
        <button
          className="btn project__a__btn"
          onClick={() => props.onClickPopup(props.project)}
        >
          More Information

      </button>
      </a>

    </div>
  );
};

export default SmallProject;
