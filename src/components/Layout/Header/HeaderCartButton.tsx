import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../../UI/Button";

const HeaderCartButton = () => {
  return (
    <Button className="mr-[6%] h-12 w-36 sm:mr-[8%]">
      <span className="mx-1 inline-block h-[14px]">{FaCartShopping()}</span>
      <span className="mx-1 inline-block">Food Cart</span>
      <span className="mx-1 inline-block">3</span>
    </Button>
  );
};

export default HeaderCartButton;
