import React from "react";
import Footer from "../../molecules/Footer";
import { Header } from "../../molecules/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className='main-wrapper'>
      <Header />
      {/* pages content */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
