import React from "react";

const Image = ({
  src,
  alt,
  styles
}: {
  src: string;
  alt: string;
  styles: string;
}) => {
  return <img src={src} alt={alt} className={styles} />;
};

export default Image;
