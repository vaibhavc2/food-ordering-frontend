import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type PropTypes = ComponentProps<"div">;

const Container = ({ children, className, ...restProps }: PropTypes) => {
  return (
    <div className={twMerge("", className)} {...restProps}>
      {children}
    </div>
  );
};

export default Container;
