import React, { useState } from 'react';
import { Wrapper } from './styles';
import searchIcon from '../../assets/icons/search.svg';

function AdminSearch({onChange, placeholder }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(e); 
  }

  return (
    <Wrapper>
      <Wrapper.Input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange} 
      />
      <img src={searchIcon} alt='search icon' />
    </Wrapper>
  );
}

export default AdminSearch;
