import React from "react";
import * as styles from "./styles.module.scss";
import Links from "../../atoms/Link";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className='container'>
        <div className={styles.headContents}>
          <div>
            <img src='images/icons/Menu.png' alt='' />
          </div>
          <div className={styles.logo}>
            <Links path='/'>
              <img src='images/vectors/Logo.png' alt='' />
            </Links>
          </div>
          <div className={styles.logos}>
            <span>
              <img src='images/icons/Search.png' alt='' />
            </span>

            <Links path='/cart'>
              <img src='images/icons/shopping-bag.png' alt='' />
            </Links>
          </div>
        </div>
      </div>
    </header>
  );
};
