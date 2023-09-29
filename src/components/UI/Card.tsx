import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ children, className, ...restProps }: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge(
        "rounded-xl bg-red-900 bg-opacity-40 bg-clip-padding p-4 shadow-md backdrop-blur-sm backdrop-filter",
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Card;
