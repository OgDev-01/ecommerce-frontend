import React from "react";

const Brandsponsor = ({ slice }) => (
  <section>
    {slice?.items?.map((item, i) => (
      <img src={item.brandimage.url} alt={item.brandimage.alt} />
    ))}
  </section>
);

export default Brandsponsor;
