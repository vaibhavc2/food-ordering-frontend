import React, { Fragment, ReactNode } from "react";

import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import { createPortal } from "react-dom";

type ModalTypes = {
  children: ReactNode;
};

const backdropRoot = document.getElementById("backdrop-root");
const overlayRoot = document.getElementById("overlay-root");

const Modal = ({ children }: ModalTypes) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, backdropRoot as Element)}
      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        overlayRoot as Element
      )}
    </Fragment>
  );
};

export default Modal;
