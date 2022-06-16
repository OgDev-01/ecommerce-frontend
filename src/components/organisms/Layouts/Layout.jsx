import React from "react";

const Layout = ({ children }) => {
  return (
    <div className='main-wrapper'>
      <header>Page header</header>
      {/* pages content */}
      <main>{children}</main>
      <footer>Page Footer</footer>
    </div>
  );
};

export default Layout;
