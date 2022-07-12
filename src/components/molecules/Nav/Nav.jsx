import HorizontalLine from "@/components/atoms/horizontalLine";
import { useRouter } from "next/router";
import Links from "@/components/atoms/Link";
import { socials } from "../Footer/Footer";
import SocialLink from "@/components/atoms/socialLink";
import { navState } from "@/base/context/Atoms/atomstate";
import { useRecoilState } from "recoil";

import * as styles from "./styles.module.scss";
export const Nav = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useRecoilState(navState);

  const nav_links = [
    { name: "Home", slug: "/" },
    { name: "Product", slug: "/product" },
    { name: "Blog", slug: "/blog" },
    { name: "About", slug: "/about" },
    { name: "Contact", slug: "/contact" },
  ];
  return (
    <nav className={styles.nav}>
      <div className='container'>
        <div onClick={() => setIsOpen(!isOpen)}>
          <img src='/images/icons/Close.svg' alt='close icon' />
        </div>
        <div className={styles.itemsWrap}>
          <div className={styles.menuTitle}>
            <h3>Menu</h3>
          </div>
          <ul className={styles.navList}>
            {nav_links.map((link, index) => (
              <li
                onClick={() => setIsOpen(!isOpen)}
                key={index}
                className={`${styles.navLink} ${
                  router.asPath === link.slug ? "active" : ""
                }`}
              >
                <Links path={link.slug} children={link.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contactLinks}>
          <a href='tel:+2348063348944'>
            {" "}
            <span>
              <img src='/images/icons/Call.svg' alt='' />
            </span>
            <span>(+234) 806-334-8944 </span>
          </a>
          <a href='#'>
            <span>
              <img src='/images/icons/Location.svg' alt='' />
            </span>
            <span>Store locator</span>
          </a>
        </div>
        <div className={styles.line}>
          <HorizontalLine />
        </div>
        <div className={styles.socialWrap}>
          {socials.map((social, index) => (
            <SocialLink
              key={index}
              urlPath={social.urlPath}
              socialName={social.socialName}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
