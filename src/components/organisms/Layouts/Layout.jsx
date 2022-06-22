import React from "react";
import { Header } from "../../molecules/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className='main-wrapper'>
      <Header />
      {/* pages content */}
      <main>{children}</main>
      <footer>Page Footer</footer>
    </div>
  );
};

export default Layout;
