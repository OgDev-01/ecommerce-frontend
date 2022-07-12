import NextImage from "@/components/atoms/NextImage";
import RichText from "@/components/atoms/RichText";
import SocialLink from "@/components/atoms/socialLink";
import * as styles from "./styles.module.scss";
export const FollowUs = ({ primary, items }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        <RichText field={primary.title} />
      </div>
      <div className={`${styles.social} flex justify-center`}>
        <SocialLink urlPath={primary.socialIcon.url} socialName='instagram' />
      </div>
      <div className={`${styles.cardWrap} container flex justify-evenly`}>
        {Array.isArray(items) &&
          items.length > 0 &&
          items.map((item, index) => (
            <div key={index} className={styles.img}>
              <NextImage field={item.followCardImg} />
            </div>
          ))}
      </div>
    </section>
  );
};
