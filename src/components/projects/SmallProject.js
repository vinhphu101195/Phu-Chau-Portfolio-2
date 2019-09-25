import React from "react";

const SmallProject = () => {
  return (
    <div class="home">
      <img src="img/house-1.jpeg" alt="House 1" class="home__img" />

      <h5 class="home__name">Beautiful Familiy House</h5>
      <div class="home__location">
        <p>USA</p>
      </div>
      <div class="home__rooms">
        <p>5 rooms</p>
      </div>
      <div class="home__area">
        <p>
          325 m<sup>2</sup>
        </p>
      </div>
      <div class="home__price">
        <p>$1,200,000</p>
      </div>
      <button class="btn home__btn">Contact realtor</button>
    </div>
  );
};

export default SmallProject;
