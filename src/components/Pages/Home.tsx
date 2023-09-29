import React, { Fragment } from "react";
import HomeImageContainer from "../Layout/HomeImageContainer";
import Meals from "../Meals/Meals";

const Home = () => {
  return (
    <Fragment>
      <HomeImageContainer />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default Home;
