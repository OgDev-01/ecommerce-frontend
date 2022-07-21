import Filters from '@/components/atoms/Filters';
import { useRef, useState } from 'react';
import * as styles from './styles.module.scss';
import {
  searchToggle,
  recentSearchState,
} from '@/base/context/Atoms/atomstate';
import { useRecoilState, useSetRecoilState } from 'recoil';
export const SearchOverlay = () => {
  const setToggleSearch = useSetRecoilState(searchToggle);
  const inputRef = useRef(null);

  const [recentSearch, setRecentSearch] = useRecoilState(recentSearchState);

  const updateRecentSearch = (word) => {
    const lowerCaseWord = word.toLowerCase();
    if (!recentSearch.includes(lowerCaseWord))
      setRecentSearch((prev) => [...prev, lowerCaseWord]);
  };
  const updateInput = (keyword) => {
    inputRef.current.value = keyword;
  };

  const searchTerms = [
    'Trending',
    'Dress',
    'Bag',
    'Tshirt',
    'Beauty',
    'Accessories',
  ];

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateRecentSearch(inputRef.current.value);
            inputRef.current.value = null;
          }}
          className={styles.searchForm}
        >
          <input
            className={styles.searchInput}
            type='search'
            placeholder='search items'
            autoFocus
            onFocus={(e) => e.target.select()}
            ref={inputRef}
          />
          <span
            className={styles.close}
            onClick={() => setToggleSearch((prev) => !prev)}
          >
            <img src='/images/icons/Close.svg' alt='close icon' />
          </span>
        </form>
        {recentSearch.length > 0 && (
          <div className={styles.recentSearch}>
            <h3>Recent search</h3>
            <div className={styles.keywordsWrap}>
              {recentSearch &&
                recentSearch.flatMap((keyword, index) =>
                  keyword === '' || keyword === ' ' ? (
                    []
                  ) : (
                    <Filters
                      populateInput={updateInput}
                      key={index}
                      name={keyword}
                    />
                  )
                )}
            </div>
          </div>
        )}
        <div className={styles.popularSearch}>
          <h3>Popular search terms</h3>
          <div className={styles.termsWrap}>
            {searchTerms.length &&
              searchTerms.map((term, index) => (
                <div key={index} className={styles.term}>
                  {term}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
