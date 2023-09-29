import React, { ReactNode } from "react";
import Container from "./Container";

type ModalOverlayTypes = {
  children: ReactNode;
};

const ModalOverlay = ({ children }: ModalOverlayTypes) => {
  return (
    <Container className="fixed left-[5%] top-[30vh] z-30 w-[90%] rounded-xl bg-slate-50 p-4 shadow-lg sm:left-[10%] sm:w-[80%] lg:left-[20%] lg:w-[60%] xl:left-[30%] xl:w-[40%]">
      <div>{children}</div>
    </Container>
  );
};

export default ModalOverlay;
