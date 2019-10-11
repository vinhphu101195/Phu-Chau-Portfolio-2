import React from "react";
import avatar from "./img/avatar-new.jpg";

const Profile = () => {

  return (
    <section className="profile">
      <img
        src={avatar}
        alt="Seen on logo 1"
        className="profile__avatar"
        width="300rem"
      />
      <div className="profile__infor">
        <div className="profile__text">
          <h4 className="heading-4">
            <i className="fa fa-user icon" aria-hidden="true"></i>
            Information
          </h4>
          &nbsp;&nbsp;&nbsp; My name is Phu Chau, I'm studying at Turku
          University of Applied Sciences in Finland. I have 1 years experience
          building and maintaining responsive websites in the recruiting
          industry.
          <br></br>
          <br></br>
          Proficient in HTML, CSS, JavaScript; plus modern libraries and
          frameworks such as React, Redux, React Router, Nodejs. Passionate
          about learning new things and outsite activity.
          <br></br>
          <br></br>
          <h4 className="heading-4 loadSkills">
            <i className="fa fa-code icon" aria-hidden="true"></i>
            Experience
          </h4>
          06.2018 - 07.2019: Student Assistant of TUAS as Web developer.
        </div>
      </div>
    </section>
  );
};

export default Profile;
