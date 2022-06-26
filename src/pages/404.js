import React from 'react';
import ComponentNotFound from '../components/organisms/Pages/ComponentNotFound/ComponentNotFound';

const PageError = () => {
   const spec = {
     text: "Home Page",
     urlPath: "/",
     icon: {
       url: "/images/icons/arrow-left.png",
       alt: "arrow right",
       position: "left",
     },
   };
  return (
    <ComponentNotFound {...spec} />
  )
}

export default PageError;