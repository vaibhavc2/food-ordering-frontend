import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  className,
  ...restProps
}: ComponentProps<"button">) => {
  return (
    <button
      type="button"
      className={twMerge("rounded-xl border border-white p-2", className)}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
