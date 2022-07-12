import HorizontalLine from "@/components/atoms/horizontalLine";
import NextImage from "@/components/atoms/NextImage";
import RichText from "@/components/atoms/RichText";
import OpenIllustration from "@/components/molecules/OpenIllustration";
import * as styles from "./styles.module.scss";

export const OpenFashion = ({ primary, items }) => {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.brandLogo} flex justify-center`}>
        <NextImage field={primary.brandLogo} />
      </div>
      <div className={`${styles.desc} container`}>
        <RichText field={primary.description} />
      </div>
      <HorizontalLine />
      <div className='container flex justify-between'>
        {Array.isArray(items) &&
          items.length > 0 &&
          items.map((item, index) => (
            <OpenIllustration key={index} {...item} />
          ))}
      </div>
      <div className={`${styles.lineRope} flex justify-center`}>
        <NextImage field={primary.lineRope} />
      </div>
    </section>
  );
};
