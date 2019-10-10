import React, { useState, useEffect } from "react";

export default function ProjectPopup(props) {
  let newprops = props.project;

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
        <h2 className="heading-2 popup__heading">
          {newprops.name}
        </h2>
        <div className="popup__label--skills">
          {Object.getOwnPropertyNames(newprops).length === 0
            ? ""
            : showSkills(newprops.skills)}
        </div>
        <div className="popup__link-source">
          {newprops.sourcecode ? <a
            href={newprops.sourcecode}
            target="_blank"
            rel="noopener noreferrer "
            className="popup__link-source__detail"
          >
            <span>Source Code |</span>
          </a>
            : ""}

          <a
            href={newprops.demo}
            target="_blank"
            rel="noopener noreferrer "
            className="popup__link-source__detail"
          >
            <span> Demo</span>
          </a>
        </div>
        <a href="#projects" className="popup__close">
          &times;
          </a>
        <p className="popup__text">{newprops.description}</p>

        {/* slider img */}
        <img
          src={photoSrc}
          className="slider-image"
          alt="example of project"
        />
        {photoIndex === 0 ? <div className="button-container-popup ">  <span
          className="button-container-popup__right"
          onClick={() => onclickRight()}
        >
          <i className="fas fa-chevron-circle-right" />
        </span>
        </div> : photoIndex === newprops.photo.length - 1 ?
            <div className="button-container-popup ">
              <span
                className="button-container-popup__left"
                onClick={() => onclickLeft()}
              >
                <i className="fas fa-chevron-circle-left" />
              </span>
            </div>

            : <div className="button-container-popup ">
              <span
                className="button-container-popup__left"
                onClick={() => onclickLeft()}
              >
                <i className="fas fa-chevron-circle-left" />
              </span>
              <span
                className="button-container-popup__right"
                onClick={() => onclickRight()}
              >
                <i className="fas fa-chevron-circle-right" />
              </span>
            </div>}

      </div>
    </div >
  );
}

const showSkills = skills => {
  let result = null;
  if (skills.length > 0) {
    result = skills.map((skill, index) => {
      return (
        <span className="popup__label--skills__detail" key={index}>
          {skill}
        </span>
      );
    });
  }

  return result;
};
