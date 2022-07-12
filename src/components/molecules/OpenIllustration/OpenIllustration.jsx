import NextImage from "@/components/atoms/NextImage";
import RichText from "@/components/atoms/RichText";
import propTypes from "prop-types";
import * as styles from "./styles.module.scss";
export const OpenIllustration = ({ illustrationImg, illustrationCaption }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardImg}>
        <NextImage field={illustrationImg} />
      </div>
      <div className={styles.cardCaption}>
        <RichText field={illustrationCaption} />
      </div>
    </div>
  );
};

OpenIllustration.propTypes = {
  illustrationImg: propTypes.object.isRequired,
  illustrationCaption: propTypes.array.isRequired,
};
