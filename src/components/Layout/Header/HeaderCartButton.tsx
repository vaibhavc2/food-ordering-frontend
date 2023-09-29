import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../../UI/Button";

const HeaderCartButton = () => {
  return (
    <Button className="mr-[6%] h-12 w-40 border-none bg-red-950 sm:mr-[8%] lg:w-56">
      <span className="mx-1 inline-block h-[14px] lg:mx-3 lg:h-4 lg:text-xl">
        {FaCartShopping()}
      </span>
      <span className="mx-1 inline-block lg:mx-3 lg:text-lg lg:font-semibold">
        Food Cart
      </span>
      <span className="mx-1 inline-block rounded-full bg-yellow-600 px-2 lg:mx-3 lg:px-[0.6rem] lg:text-lg lg:font-semibold">
        3
      </span>
    </Button>
  );
};

export default HeaderCartButton;
