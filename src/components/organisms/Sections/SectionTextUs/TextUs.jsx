import Button from "@/components/atoms/button";
import NextImage from "@/components/atoms/NextImage";
import RichText from "@/components/atoms/RichText";
import * as styles from "./styles.module.scss";
export const TextUs = ({ items }) => {
  const { description, iconImg, buttonText } = items[0];
  return (
    <section>
      <div className={styles.img}>
        <NextImage field={iconImg} />
      </div>
      <div className={styles.desc}>
        <RichText field={description} />
      </div>

      <Button urlPath='#' ariants='default' text={buttonText} />
    </section>
  );
};
