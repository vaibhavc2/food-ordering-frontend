import React from "react";

import Image from "../UI/Image";
import Container from "../UI/Container";
import headerImage from "../../assets/header-img.png";
import foodImage from "../../assets/food.png";

const HomeImageContainer = () => {
  return (
    <Container className="z-0 ml-[-2rem] h-[25rem] w-[115%] overflow-hidden bg-[#f9e5ca] sm:h-[30rem] sm:w-[110%] lg:h-[40rem] lg:p-5">
      <Image
        src={headerImage}
        alt="Khao Piyo Aish Karo"
        className="cover h-[100%] w-[110%] translate-x-4 translate-y-4 rotate-6  overflow-hidden sm:h-[30rem] sm:w-[110%] lg:h-[40rem]"
      />
      <Image
        src={foodImage}
        alt="Tasty Punjabi Food Icon"
        className="absolute left-5 top-[14rem] h-40 w-[50%] sm:left-[8%] sm:top-64 sm:h-[14rem] sm:w-[17.5rem] lg:top-[22rem] lg:h-[18rem] lg:w-[32%] xl:top-[20rem] xl:h-[20rem] xl:w-[28%]"
      />
    </Container>
  );
};

export default HomeImageContainer;
