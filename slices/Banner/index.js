import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

const Banner = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.title} />
    <PrismicLink field={slice.primary.buttonLink}>My Link</PrismicLink>
    <img
      src={slice.primary.bannerHero.url}
      alt={slice.primary.bannerHero.alt}
    />
  </section>
);

export default Banner;
