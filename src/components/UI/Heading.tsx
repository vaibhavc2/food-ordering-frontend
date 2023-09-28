import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Heading = ({
  children,
  className,
  ...restProps
}: ComponentProps<"h1">) => {
  return (
    <h1 className={twMerge("text-2xl font-bold", className)} {...restProps}>
      {children}
    </h1>
  );
};

export default Heading;
