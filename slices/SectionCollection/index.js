import React from "react";
import { PrismicText } from "@prismicio/react";

const SectionCollection = ({ slice }) => (
  <section>
    <p>{slice.primary.heading}</p>
    <img
      src={slice.primary.landscapeImg.url}
      alt={slice.primary.landscapeImg.alt}
    />
    <img
      src={slice.primary.portraitImg.url}
      alt={slice.primary.portraitImg.alt}
    />
  </section>
);

export default SectionCollection;
