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
import { useRecoilValue } from 'recoil';
import * as styles from './styles.module.scss';
export const ProductsPage = () => {
  const isGrid = useRecoilValue(productDisplayViewState);
  const selectedCategory = useRecoilValue(selectedCategoryState);
  const filteredProducts = filterProductByCategory(selectedCategory);

  return (
    <section>
      <div className='container'>
        <div>
          <ProductFilters count={filteredProducts.length} />
          {isGrid ? (
            <div className={`${styles.gridWrap} flex`}>
              {filteredProducts.length > 0
                ? filteredProducts.map((product, index) => (
                    <CardGrid key={index} {...product} />
                  ))
                : 'No item in this category is Available'}
            </div>
          ) : (
            <div className={`${styles.listWrap}`}>
              {filteredProducts.length > 0
                ? filteredProducts.map((product, index) => (
                    <CardList key={index} {...product} />
                  ))
                : 'No item in this category is Available'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
