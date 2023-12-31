import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Container = ({
  children,
  className,
  ...restProps
}: ComponentProps<"div">) => {
  return (
    <div className={twMerge("", className)} {...restProps}>
      {children}
    </div>
  );
};

export default Container;
