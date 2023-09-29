import React from "react";
import Container from "./Container";

const Backdrop = () => {
  return (
    <Container className="fixed left-0 top-0 z-10 h-full w-full bg-[rgba(0,0,0,0.75)]" />
  );
};

export default Backdrop;
