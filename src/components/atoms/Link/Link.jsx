import React from "react";
import Link from "next/link";
export const Link = ({ children, type, path, variant }) => {
  return (
    <Link href={path} passhref>
      <a>{children}</a>
    </Link>
  );
};
