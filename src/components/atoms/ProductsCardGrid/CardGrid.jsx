import { favoriteState, productsState } from '@/base/context/Atoms/atomstate';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import Links from '../Link';
import { handleFavoriteUpdate } from '@/base/functions/functions';
import * as styles from './styles.module.scss';
export const CardGrid = ({ coverImage, title, description, price, slug }) => {
  const favorite = useRecoilValue(favoriteState);
  const products = useRecoilValue(productsState);
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image src={coverImage.url} layout='fill' unoptimized={true} />
        <span onClick={() => handleFavoriteUpdate(slug)}>
          {favorite.find((item) => item.slug === slug) ? (
            <img src='/images/icons/Heart-full.svg' />
          ) : (
            <img src={'/images/icons/Heart-brown.svg'} alt='' />
          )}
        </span>
      </div>
      <div className={styles.cardContent}>
        <Links path={`/products/${slug}`} className={styles.cards}>
          <h3>{title}</h3>
          <p>{description.substring(0, 30) + '...'}</p>
          <div>${price}</div>
        </Links>
      </div>
    </div>
  );
};
