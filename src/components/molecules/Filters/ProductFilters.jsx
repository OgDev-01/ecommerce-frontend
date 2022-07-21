import {
  productCategoriesState,
  productDisplayViewState,
  selectedCategoryState,
} from '@/base/context/Atoms/atomstate';
import { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import * as styles from './styles.module.scss';
export const ProductFilters = ({ count }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isGrid, setIsGrid] = useRecoilState(productDisplayViewState);
  const categories = useRecoilValue(productCategoriesState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );
  const [selectValue, setSelectValue] = useState('');
  const handleSelect = (value) => {
    setSelectedCategory(value);
    setDropdownOpen(false);
  };

  return (
    <div className={`${styles.wrapper} flex justify-between align-center`}>
      <div className={styles.count}>
        {`${count} ${count < 2 ? 'item' : 'items'}`}{' '}
      </div>
      <div className={`${styles.actionsWrap} flex`}>
        <div className={`${styles.filterAction} flex align-center`}>
          <div
            className={styles.action}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>{selectedCategory}</span>
            <img src='/images/icons/Down.svg' alt='polygon icon' />
          </div>
          {dropdownOpen && (
            <div className={styles.dropdown}>
              {categories.flatMap((cat, index) => (
                <p key={index} onClick={() => handleSelect(cat.name)}>
                  {cat.name}
                </p>
              ))}
            </div>
          )}
        </div>
        <div
          className={`${styles.action} flex align-center`}
          onClick={() => setIsGrid(!isGrid)}
        >
          {isGrid ? (
            <img src='/images/icons/Listview.svg' alt='list view icon' />
          ) : (
            <img src='/images/icons/grid-view.svg' alt='grid view icon' />
          )}
        </div>
      </div>
    </div>
  );
};
