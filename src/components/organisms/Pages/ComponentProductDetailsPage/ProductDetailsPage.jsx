import { favoriteState } from '@/base/context/Atoms/atomstate';
import Button from '@/components/atoms/button';
import Carousel from '@/components/molecules/Carousel';
import { Markdown } from '@/components/molecules/Markdown/Markdown';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { filterProductByCategory } from '@/base/functions/functions';
import * as styles from './styles.module.scss';
import CardGrid from '@/components/atoms/ProductsCardGrid';
import HorizontalLine from '@/components/atoms/horizontalLine';
export const ProductDetailsPage = ({
  title,
  description,
  price,
  coverImage,
  productImages,
  colors,
  sizes,
  productDetails,
  productCategories,
  slug,
}) => {
  const favorite = useRecoilValue(favoriteState);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    setRelatedProducts(
      filterProductByCategory(
        (productCategories.length && productCategories[0].name) || 'New'
      )
    );
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <Carousel coverImg={coverImage} productImg={productImages} />
        <div className={styles.callToAction}>
          <h2>{title}</h2>
          <p className={styles.desc}>{description}</p>
          <div className={styles.price}>${price}</div>
          <div className={`${styles.actions} flex`}>
            <div className={`${styles.colorSelectWrap} flex align-center`}>
              <span>Color</span>
              <div className={`${styles.colorAction} flex `}>
                {colors.length > 0 &&
                  colors.map((color, index) => (
                    <span
                      onClick={() => setSelectedColor(index)}
                      className={selectedColor === index ? styles.active : ''}
                      key={index}
                      style={{ background: color.hex }}
                    ></span>
                  ))}
              </div>
            </div>
            <div className={`${styles.sizeSelectWrap} flex align-center`}>
              <span>Size</span>
              <div className={`${styles.sizeAction} flex`}>
                {sizes.length > 0 &&
                  sizes.map((size, index) => (
                    <span
                      onClick={() => setSelectedSize(index)}
                      className={`${
                        selectedSize === index && styles.active
                      } flex  align-center justify-center`}
                      key={index}
                    >
                      {size.keyword}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={`${styles.markdown} container`}>
        <Markdown content={productDetails.markdown} />
      </div>
      <Button
        type='add-to-cart'
        icon={
          favorite.find((fav) => fav.slug === slug)
            ? '/images/icons/Heart-filled-white.svg'
            : '/images/icons/Heart.svg'
        }
        slug={slug}
        text='Add to cart'
      />
      <br />
      <br />
      <section>
        <center>
          <h2>You may also like</h2>
        </center>
        <HorizontalLine />
        <div className='container'>
          <div className={`${styles.relatedWrap} flex`}>
            {relatedProducts.slice(0, 4).map((product, index) => (
              <CardGrid key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
