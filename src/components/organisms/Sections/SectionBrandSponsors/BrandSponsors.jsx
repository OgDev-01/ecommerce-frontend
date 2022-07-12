import NextImage from "@/components/atoms/NextImage";
import React from "react";

export const BrandSponsors = ({ brandImages }) => {
  return (
    <div>
      <NextImage field={brandImages} />
    </div>
  );
};
