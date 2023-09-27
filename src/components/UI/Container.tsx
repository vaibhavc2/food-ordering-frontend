import React, { ReactNode } from "react";

const Container = ({
  children,
  styles
}: {
  children: ReactNode;
  styles: string;
}) => {
  return <div className={styles}>{children}</div>;
};

export default Container;
