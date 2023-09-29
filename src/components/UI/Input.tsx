import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import Container from "./Container";

type InputTypes = {
  label: string;
  id: string;
} & ComponentProps<"input">;

const Input = ({ label, id, className, ...restProps }: InputTypes) => {
  return (
    <Container className="mb-[0.5rem] flex items-center">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={twMerge(
          "w-12 rounded border border-gray-400 pl-[0.5rem]",
          className
        )}
        {...restProps}
      />
    </Container>
  );
};

export default Input;
