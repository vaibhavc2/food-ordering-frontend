import React, { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type navTypes = {
  children?: ReactNode;
} & ComponentProps<"nav">;

const Navbar = ({ children, className, ...restProps }: navTypes) => {
  return (
    <nav className={twMerge("", className)} {...restProps}>
      {children ? children : <header></header>}
    </nav>
  );
};

export default Navbar;
