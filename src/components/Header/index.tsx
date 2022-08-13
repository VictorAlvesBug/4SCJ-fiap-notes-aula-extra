import { useCallback, useState } from 'react';
import SortOption from '../SortOption';
import { HeaderStyled } from './styles';

export const sortOption = {
  default: 1,
  alphaAZ: 2,
  alphaZA: 3,
  urgentFirst: 4,
  urgentLast: 5,
};

interface HeaderProps {
  handleSort: (selectedSort: number) => void;
}

function Header({ handleSort }: HeaderProps) {
  const [sort, setSort] = useState(sortOption.default);

  const selectSortOption = useCallback((selectedSortOption: number) => {
    setSort((prevState) => {
      if (prevState === selectedSortOption) {
        selectedSortOption++;
      }
      handleSort(selectedSortOption);
      return selectedSortOption;
    });
  }, []);

  const selectedAlpha = useCallback(() => {
    switch (sort) {
      case sortOption.alphaAZ:
        return true;
        case sortOption.alphaZA:
          return false;
    
      default:
        return undefined;
    }
  }, [sort]);

  const selectedUrgent = useCallback(() => {
    switch (sort) {
      case sortOption.urgentFirst:
        return true;
        case sortOption.urgentLast:
          return false;
    
      default:
        return undefined;
    }
  }, [sort]);

  return (
    <HeaderStyled>
      <SortOption
        selected={selectedAlpha()}
        handleClick={() => {
          selectSortOption(sortOption.alphaAZ);
        }}
      >
        <span className="material-icons">sort_by_alpha</span>
      </SortOption>
      <SortOption
        selected={selectedUrgent()}
        handleClick={() => {
          selectSortOption(sortOption.urgentFirst);
        }}
      >
        <span className="material-icons">error_outline</span>
      </SortOption>
    </HeaderStyled>
  );
}

export default Header;
