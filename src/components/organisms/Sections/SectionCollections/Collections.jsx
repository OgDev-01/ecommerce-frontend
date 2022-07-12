import NextImage from "@/components/atoms/NextImage";
import RichText from "@/components/atoms/RichText";
import * as styles from "./styles.module.scss"

export const Collections = ({ title, video, landscapeImg, portraitImg }) => {
  return (
    <section className={styles.wrapper}>
      <div>
        <h2>
          <RichText field={title} />
        </h2>
      </div>
      <div className={styles.landscape}>
        <NextImage field={landscapeImg} />
      </div>
      <div className={styles.portrait}>
        <NextImage field={portraitImg} />
      </div>
      <div className={styles.video}>
        <NextImage field={video} />
      </div>
    </section>
  );
};
