import React from "react";

import Image from "../UI/Image";
import Container from "../UI/Container";
import headerImage from "../../assets/header-img.png";
import foodImage from "../../assets/food.png";

const HomeImageContainer = () => {
  return (
    <Container className="z-0 h-[25rem] w-[100%] overflow-hidden bg-[#f9e5ca]">
      <Image
        src={headerImage}
        alt="Khao Piyo Aish Karo"
        className="cover h-[100%] w-[110%] translate-x-4 translate-y-4 rotate-6"
      />
      <Image
        src={foodImage}
        alt="Tasty Punjabi Food Icon"
        className="absolute top-[12.75rem] w-[50%]"
      />
    </Container>
  );
};

export default HomeImageContainer;
