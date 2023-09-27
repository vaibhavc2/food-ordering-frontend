import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type PropTypes = {
  className?: string;
} & ComponentProps<"img">;

const Image = ({ className, ...restProps }: PropTypes) => {
  return <img className={twMerge("", className)} {...restProps} />;
};

export default Image;
