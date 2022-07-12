import Button from "@/components/atoms/button";
import NextImage from "@/components/atoms/NextImage";
import RichText from "@/components/atoms/RichText";
import * as styles from "./styles.module.scss";
export const ChatwithUs = ({ items }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.img}>
        <NextImage field={items[0].iconImg} />
      </div>
      <div className={styles.desc}>
        <RichText field={items[0].description} />
      </div>
      <Button urlPath='#' variants='default' text={items[0].buttonText} />
    </section>
  );
};
