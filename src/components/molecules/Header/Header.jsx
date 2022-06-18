import React from "react";
import * as styles from "./styles.module.scss"

export const Header = () => {
  return <header>{/* Header section goes in here */}

  <div className="container">
     <div className={styles.headContents}>
       <div className="hamBurger">
           <img src={"images/icons/Menu.png"} alt="" />
       </div>
        <div className="logo">
           <img src={"images/vectors/Logo.png"} alt="" />
        </div>
        <div className={styles.logos}>
            <img src={"images/icons/Search.png"} alt="" />
            <img src={"images/icons/shopping-bag.png"} alt="" />
        </div>
     </div>
    </div>  
  </header>;
};
