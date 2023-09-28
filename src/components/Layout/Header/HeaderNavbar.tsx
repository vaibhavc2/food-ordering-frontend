import React from "react";

import Navbar from "../../UI/Navbar";
import Heading from "../../UI/Heading";
import HeaderCartButton from "./HeaderCartButton";

const HeaderNavbar = () => {
  return (
    <Navbar className="fixed left-0 top-0 z-10 flex h-20 w-full items-center justify-between bg-red-800 px-5 text-white shadow sm:px-[10%]">
      <Heading className="">Khao-Piyo</Heading>
      <HeaderCartButton />
    </Navbar>
  );
};

export default HeaderNavbar;
