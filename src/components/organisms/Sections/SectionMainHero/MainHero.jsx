import React from "react";
import NextImage from "@/components/atoms/NextImage";
import RichText from "@/components/atoms/RichText";
import Links from "@/components/atoms/Link";

import * as styles from "./styles.module.scss";

export function MainHero({
  heroCaption,
  heroImage,
  heroLinkText,
  heroLinkUrlPath,
}) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.heroImage}>
        <NextImage preload={true} field={heroImage} />
      </div>

      <RichText field={heroCaption} className={styles.caption} />
      <div className={styles.buttonWrap}>
        <button className={styles.button}>
          <Links path={heroLinkUrlPath}>{heroLinkText}</Links>
        </button>
      </div>
    </section>
  );
}
