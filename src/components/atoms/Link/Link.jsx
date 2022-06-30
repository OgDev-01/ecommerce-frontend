import React from "react";
import Link from "next/link";
export const Links = ({ children, target, path, rel }) => {
  return (
    <Link href={path} passhref>
      <a target={target} rel={rel}>
        {children}
      </a>
    </Link>
  );
};
