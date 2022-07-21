import {
  favoriteState,
  productDisplayViewState,
  productsState,
  selectedCategoryState,
} from '@/base/context/Atoms/atomstate';
import { filterProductByCategory } from '@/base/functions/functions';
import CardGrid from '@/components/atoms/ProductsCardGrid';
import CardList from '@/components/atoms/ProductsCardList';
import ProductFilters from '@/components/molecules/Filters';
import { useRecoilValue, useRecoilState } from 'recoil';
import * as styles from './styles.module.scss';
export const ProductsPage = () => {
  const isGrid = useRecoilValue(productDisplayViewState);
  const products = useRecoilValue(productsState);
  const selectedCategory = useRecoilValue(selectedCategoryState);
  const filteredProducts = filterProductByCategory(products, selectedCategory);
  const [favorite, setFavorite] = useRecoilState(favoriteState);
  const handleFavorite = (allProduct, item) => {
    const initialItem = allProduct.filter((product) => product.slug === item);

    if (favorite.length === 0) {
      setFavorite(initialItem);
      return;
    } else {
      const exist = favorite.find((item) => item.slug === initialItem[0].slug);
      if (exist)
        setFavorite(
          favorite.filter((item) => item.slug !== initialItem[0].slug)
        );
      if (!exist) setFavorite((prev) => [...prev, initialItem[0]]);
    }
  };
  return (
    <section>
      <div className='container'>
        <div>
          <ProductFilters count={filteredProducts.length} />
          {isGrid ? (
            <div className={`${styles.gridWrap} flex`}>
              {filteredProducts.length > 0
                ? filteredProducts.map((product, index) => (
                    <CardGrid
                      handleFav={handleFavorite}
                      key={index}
                      {...product}
                    />
                  ))
                : 'No item in this category is Available'}
            </div>
          ) : (
            <div className={`${styles.listWrap}`}>
              {filteredProducts.length > 0
                ? filteredProducts.map((product, index) => (
                    <CardList
                      handleFav={handleFavorite}
                      key={index}
                      {...product}
                    />
                  ))
                : 'No item in this category is Available'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
