import React from 'react';
import { Divider, Input } from 'antd';


function SearchFood(props) {
    const { onSearch } = props;


  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" onChange={(event) => onSearch(event.target.value)} />
    </>
  );
}

export default SearchFood;