import React, { FormEventHandler, useState } from 'react';
import { FilterInputStyled } from './styles';

interface FilterInputProps {
  handleTextType: React.FormEventHandler;
  placeholder?: string;
}

function FilterInput({ handleTextType, ...rest }: FilterInputProps) {
  return (
    <FilterInputStyled onInput={handleTextType} {...rest} />
  );
}

export default FilterInput;
