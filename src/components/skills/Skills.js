import React from "react";

const Skills = () => {
  var skills = {
    HTML: 90,
    CSS: 80,
    JavaScript: 80,
    React: 70,
    Redux: 50,
    ReactRouter: 50,
    Sass: 75,
    SQL: 50,
    Nodejs: 30,
    Logical: 85,
    TeamWork: 80,
    Problem: 90,
    Orgranizing: 90
  };
  return (
    <section className="skills">
      <h2 className="heading-2 skills__header">My Skills</h2>
      <div className="skills__container--front-end">
        <ul>
          <h2 className="skills__header-small ">Front-end:</h2>

          <li className="skill__data">HTML</li>
          <div className="skill__bar">
            <div
              className="skill__bar__fill animation-html"
              style={{ width: skills.HTML + "%" }}
            />
          </div>
          <li className="skill__data">CSS</li>
          <div className="skill__bar">
            <div
              className="skill__bar__fill animation-css"
              style={{ width: skills.CSS + "%" }}
            />
          </div>

          <li className="skill__data">JavaScript</li>
          <div className="skill__bar">
            <div
              className="skill__bar__fill animation-javascript"
              style={{ width: skills.JavaScript + "%" }}
            />
          </div>

          <li className="skill__data">React</li>
          <div className="skill__bar">
            <div
              className="skill__bar__fill animation-react"
              style={{ width: skills.React + "%" }}
            />
          </div>

          <li className="skill__data">Redux</li>
          <div className="skill__bar">
            <div
              className="skill__bar__fill animation-redux"
              style={{ width: skills.Redux + "%" }}
            />
          </div>

          <li className="skill__data">React Router</li>
          <div className="skill__bar">
            <div
              className="skill__bar__fill animation-reactrouter"
              style={{ width: skills.ReactRouter + "%" }}
            />
          </div>

          <li className="skill__data">Sass</li>
          <div className="skill__bar">
            <div
              className="skill__bar__fill animation-sass"
              style={{ width: skills.Sass + "%" }}
            />
          </div>
        </ul>
      </div>
      <div className="skills__container--back-end">
        <ul>
          <h2 className="skills__header-small ">Back-end:</h2>

          <li className="skill__data">SQL</li>
          <div className="skill__bar">
            <div
              className="skill__bar__fill animation-sql"
              style={{ width: skills.SQL + "%" }}
            />
          </div>
          <li className="skill__data">Nodejs</li>
          <div className="skill__bar ">
            <div
              className="skill__bar__fill animation-nodejs"
              style={{ width: skills.Nodejs + "%" }}
            />
          </div>
        </ul>
      </div>
      <div className="skills__container--personal">
        <ul>
          <h2 className="skills__header-small ">Solf Skills:</h2>

          <li className="skill__data">Logical Thinking</li>
          <div className="skill__bar ">
            <div
              className="skill__bar__fill animation-logical-thinking"
              style={{ width: skills.Logical + "%" }}
            />
          </div>
          <li className="skill__data">Team Work</li>
          <div className="skill__bar">
            <div
              className="skill__bar__fill animation-teamwork"
              style={{ width: skills.TeamWork + "%" }}
            />
          </div>

          <li className="skill__data">Problem Solving</li>
          <div className="skill__bar">
            <div
              className="skill__bar__fill animation-problem-solving"
              style={{ width: skills.Problem + "%" }}
            />
          </div>
          <li className="skill__data">Orgranizing</li>
          <div className="skill__bar">
            <div
              className="skill__bar__fill animation-orgranizing"
              style={{ width: skills.Orgranizing + "%" }}
            />
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
