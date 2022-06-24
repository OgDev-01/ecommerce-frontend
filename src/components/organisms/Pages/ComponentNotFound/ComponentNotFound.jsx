import React from "react";
import * as styles from "./styles.module.scss";
//import Button from "../components/atoms/button";



const ComponentNotFound = (props) => {

  const spec = {
    // variants: "full-width",
    text: "Button",
    urlPath: "/",
    icon: {
      url: "/images/icons/shopping-bag-white.png",
      alt: "shopping bag",
      position: "left",
    },
  };
  

  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div>
              <h1>Page Not Found</h1>
          </div>
          
          <div>
               <img src="images/icons/vector.png" width='26px' className={styles.errorimage}alt="error logo" />
          </div>
          
          <div>
              <p>
                We can't find the page you looking for, it will return to the
              </p>
          </div>

          
          
        </div>
      </div>
    </section>
      
  )
}

export default ComponentNotFound;