import React from "react";
import Heading from "../UI/Heading";

import styles from "./styles/MealsSummary.module.css";

const { summary } = styles;

const MealsSummary = () => {
  return (
    <section
      className={`${summary} mt-[-3rem] bg-white bg-opacity-40 bg-clip-padding backdrop-blur-sm backdrop-filter sm:mt-[-6rem] lg:scale-125 xl:mt-[-10rem] xl:h-[15rem]`}
    >
      <Heading className="m-5 underline">
        Delicious Punjabi style Food, Delivered To You
      </Heading>
      <p className="mb-3 xl:m-5 xl:mt-7">
        Choose from a variety of dishes and meals from our broad selection of
        Original Desi Punjabi Food List.
      </p>
      <p className="italic">
        All our meals are cooked with high-quality organic ingredients with all
        the Desi-Tadka you'd need by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
