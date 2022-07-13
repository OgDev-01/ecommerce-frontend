import React from "react";
import { PrismicNextImage } from "@prismicio/next";
export const NextImage = ({ field, preload }) => {
  return <PrismicNextImage priority={preload || false} field={field} />;
};
