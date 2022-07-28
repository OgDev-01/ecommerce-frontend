import { cartState } from '@/base/context/Atoms/atomstate';

import { useRouter } from 'next/router';
import {
  decrementQuantity,
  incrementQuantity,
  handleRemoveFromCart,
} from '@/base/functions/functions';
import { useSetRecoilState } from 'recoil';
import * as styles from './styles.module.scss';

export const CartItemCard = ({
  coverImage,
  title,
  slug,
  quantity,
  price,
  description,
}) => {
  const router = useRouter();
  const setCartOpen = useSetRecoilState(cartState);
  return (
    <div className={`${styles.card} flex`}>
      <div className={styles.close} onClick={() => handleRemoveFromCart(slug)}>
        <img src='/images/icons/Close.svg' alt='close icon' />
      </div>
      <div
        className={styles.cardImg}
        onClick={() => {
          router.push(`/products/${slug}`);
          setCartOpen((prev) => !prev);
        }}
      >
        <img src={coverImage.url} alt='product image' />
      </div>
      <div className={styles.cardDetails}>
        <h3>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={`${styles.action} flex justify-between align-center`}>
          <div
            className={`${styles.minus} flex justify-center align-center`}
            onClick={() => decrementQuantity(slug)}
          >
            <img src='/images/icons/minus-dark.svg' alt='minus icon' />
          </div>
          {quantity}
          <div className={styles.plus} onClick={() => incrementQuantity(slug)}>
            <img src='/images/icons/Plus-dark.svg' alt='plus icon' />
          </div>
        </div>
        <p className={styles.price}>${price * quantity}</p>
      </div>
    </div>
  );
};
