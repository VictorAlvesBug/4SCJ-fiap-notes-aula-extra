import React, { useState } from 'react';
import { SortOptionStyled } from './styles';

interface SortOptionProps {
  children: React.ReactNode;
  handleClick: () => void;
  selected?: boolean;
}

function SortOption({ children, handleClick, selected }: SortOptionProps) {
  let className = '';

  if (selected) {
    className = 'selected-forward';
  } else if (selected !== undefined) {
    className = 'selected-backward';
  }
  return (
    <SortOptionStyled className={className} onClick={handleClick}>
      {children}
    </SortOptionStyled>
  );
}

export default SortOption;
