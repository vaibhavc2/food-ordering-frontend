import React, { Fragment } from "react";
import Navbar from "../UI/Navbar";
import Image from "../UI/Image";
import Container from "../UI/Container";

const Header = () => {
  return (
    <Fragment>
      <Navbar />
      <Container className="z-0 h-[25rem] w-[100%] overflow-hidden">
        <Image
          src="/src/assets/header-img.jpg"
          alt="restaurant brand image - khao piyo"
          className="cover h-[100%] w-[110%]"
        />
      </Container>
    </Fragment>
  );
};

export default Header;
