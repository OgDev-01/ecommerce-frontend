import NextImage from '@/components/atoms/NextImage';
import RichText from '@/components/atoms/RichText';
import * as styles from './styles.module.scss';

export const TweetUs = ({ items }) => {
  const { description, iconImg } = items[0];
  return (
    <section>
      <div className={styles.img}>
        <NextImage field={iconImg} />
      </div>
      <div className={styles.desc}>
        <RichText field={description} />
      </div>
    </section>
  );
};
