import * as styles from "./styles.module.scss";

export const CartItemCard = () => {
  return (
    <div className={`${styles.card} flex`}>
      <div className={styles.cardImg}>
        <img src='/images/test-image.png' alt='product image' />
      </div>
      <div className={styles.cardDetails}>
        <h3>lamerei</h3>
        <p className={styles.desc}>Recycle Boucle Knit Cardigan Pink</p>
        <div className={`${styles.action} flex justify-between align-center`}>
          <div className={`${styles.minus} flex justify-center align-center`}>
            <img src='/images/icons/minus-dark.svg' alt='' />
          </div>
          4
          <div className={styles.plus}>
            <img src='/images/icons/Plus-dark.svg' alt='' />
          </div>
        </div>
        <p className={styles.price}>$240</p>
      </div>
    </div>
  );
};
