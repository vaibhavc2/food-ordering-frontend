import React, { Fragment } from "react";
import Navbar from "../UI/Navbar";
import Image from "../UI/Image";
import Container from "../UI/Container";

const Header = () => {
  return (
    <Fragment>
      <Navbar />
      <Container styles={"w-[100%] h-[25rem] z-0 overflow-hidden"}>
        <Image
          src="/src/assets/header-img.jpg"
          alt="restaurant brand image - khao piyo"
          styles={"w-[110%] h-[100%] cover"}
        />
      </Container>
    </Fragment>
  );
};

export default Header;
