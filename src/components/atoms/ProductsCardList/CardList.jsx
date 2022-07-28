// import useLocalStorage from '@/base/hooks/useLocalStorage';
import { favoriteState, productsState } from '@/base/context/Atoms/atomstate';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { handleFavoriteUpdate } from '@/base/functions/functions';
import Links from '../Link';
import * as styles from './styles.module.scss';

export const CardList = ({
  coverImage,
  title,
  description,
  price,
  rating,
  sizes,
  slug,
}) => {
  const favorite = useRecoilValue(favoriteState);
  return (
    <div className={styles.card}>
      <Links path={`/products/${slug}`}>
        <div className={styles.cardImg}>
          <Image
            src={coverImage.url}
            layout='fill'
            alt={coverImage.fileName}
            unoptimized={true}
          />
        </div>
      </Links>
      <div className={styles.cardBody}>
        <h2>{title}</h2>
        <p className={styles.desc}>{description.substring(0, 35) + '...'}</p>
        <div className={styles.price}>${price}</div>
        <div className={`${styles.ratingWrap} flex align-center`}>
          <span>
            <img src='/images/icons/Star-brown.svg' alt='star icon' />
          </span>
          <p>{rating.toFixed(1)} Ratings</p>
        </div>
        {sizes.length > 0 && (
          <div className={`flex align-center`}>
            <p>Sizes</p>
            <div className={`${styles.size} flex align-center`}>
              {sizes.map((size, index) => (
                <span className='flex align-center justify-center' key={index}>
                  {size.keyword}
                </span>
              ))}
            </div>
          </div>
        )}
        <div
          className={styles.favorite}
          onClick={() => handleFavoriteUpdate(slug)}
        >
          {favorite.find((item) => item.slug === slug) ? (
            <img src='/images/icons/Heart-full.svg' />
          ) : (
            <img src='/images/icons/Heart-brown.svg' alt='favorite icon' />
          )}
        </div>
      </div>
    </div>
  );
};
