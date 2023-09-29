import React, { Fragment } from "react";
import HomeImageContainer from "../Layout/HomeImageContainer";
import Meals from "../Meals/Meals";
import Cart from "../Cart/Cart";

const Home = () => {
  return (
    <Fragment>
      <Cart />
      <HomeImageContainer />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default Home;
