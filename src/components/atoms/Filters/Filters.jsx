import { recentSearchState } from "@/base/context/Atoms/atomstate";
import { useSetRecoilState } from "recoil";
import { FiltersWithIcon } from "./Styles";
export const Filters = ({ name, populateInput }) => {
  const setRecentSearch = useSetRecoilState(recentSearchState);
  const removeRecentSearch = (keyword) => {
    setRecentSearch((prev) => prev.filter((key) => key !== keyword));
  };
  return (
    <FiltersWithIcon>
      <span onClick={() => populateInput(name)}>{name}</span>
      <span onClick={() => removeRecentSearch(name)}>
        <img src='/images/icons/Close.svg' alt='close icon' />
      </span>
    </FiltersWithIcon>
  );
};
