import React, { useState, useEffect } from "react";

export default function ProjectPopup(props) {
  var newprops = props.project;
  console.log(newprops);

  let initState = 0;
  const [photoIndex, setPhotoIndex] = useState(initState);

  useEffect(() => {
    setPhotoIndex(0);
  }, [newprops.name]);

  function onclickRight() {
    if (photoIndex < newprops.photo.length - 1) {
      setPhotoIndex(photoIndex + 1);
    }
  }
  function onclickLeft() {
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    }
  }

  const photoSrc =
    Object.keys(newprops).length !== 0 ? newprops.photo[photoIndex] : "";

  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__right">
          <div className="popup__right-heading">
            <h2 className="heading-secondary u-margin-bottom-medium popup__right-heading">
              {newprops.name}
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              {Object.getOwnPropertyNames(newprops).length === 0
                ? ""
                : showSkills(newprops.skills)}
            </h3>
            <div className="link-source">
              <a
                href={newprops.sourcecode}
                target="_blank"
                rel="noopener noreferrer "
                className="link-popup"
              >
                <span>Source Code</span>{" "}
              </a>
              |
              <a
                href={newprops.demo}
                target="_blank"
                rel="noopener noreferrer "
                className="link-popup"
              >
                <span> Demo</span>
              </a>
            </div>
          </div>
          <a href="#projects" className="popup__close">
            &times;
          </a>
          <p className="popup__text">{newprops.description}</p>

          {/* slider img */}
          <div className="slide-container">
            <div className="image-container">
              <img
                src={photoSrc}
                className="slider-image"
                alt="example of project"
              />
            </div>
            <div className="button-container-popup ">
              <span
                className="left-button-container"
                onClick={() => onclickLeft()}
              >
                <i className="fas fa-chevron-circle-left" />
              </span>
              <span
                className="right-button-container"
                onClick={() => onclickRight()}
              >
                <i className="fas fa-chevron-circle-right" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

var showSkills = skills => {
  var result = null;
  if (skills.length > 0) {
    result = skills.map((skill, index) => {
      return (
        <span className="label-popup" key={index}>
          {skill}
        </span>
      );
    });
  }

  return result;
};
