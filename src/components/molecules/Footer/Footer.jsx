import React from "react";
import HorizontalLine from "../../atoms/horizontalLine";
import { SocialLink } from "../../atoms/socialLink/SocialLink";
import Links from "../../atoms/Link";
import * as styles from "./styles.module.scss";
export const Footer = () => {
  const socials = [
    {
      urlPath: "https://www.twitter.com",
      socialName: "twitter",
    },
    {
      urlPath: "https://www.instagram.com",
      socialName: "instagram",
    },
    {
      urlPath: "https://www.youtube.com",
      socialName: "youtube",
    },
  ];
  const mainLinks = [
    { urlPath: "/about", name: "About" },
    { urlPath: "/contact", name: "Contact" },
    { urlPath: "/blog", name: "Blog" },
  ];
  return (
    <footer>
      <div className='container'>
        <div className={styles.mainFootWrap}>
          <div className={styles.socialWrap}>
            {socials.map((social, index) => (
              <SocialLink
                key={index}
                urlPath={social.urlPath}
                socialName={social.socialName}
              />
            ))}
          </div>
          <div className={styles.lineWrap}>
            <HorizontalLine />
          </div>
          <div className={styles.supportWrap}>
            <a href='#'>support@openui.design</a>
            <a href='#'>+60 825 876</a>
            <p>08:00 - 22:00 - Everyday</p>
          </div>
          <div className={styles.lineWrap}>
            <HorizontalLine />
          </div>
          <div className={styles.footerLinksWrap}>
            {mainLinks.map((link, index) => (
              <Links key={index} path={link.urlPath}>
                {link.name}
              </Links>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>Copyright© OpenUI All Rights Reserved.</p>
      </div>
    </footer>
  );
};
