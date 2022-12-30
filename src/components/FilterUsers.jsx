import React from 'react';
import { setFilter } from 'redux/filter/filter-slice';
import { useDispatch } from 'react-redux';

export default function FilterUsers() {
  const dispatch = useDispatch();

  return (
    <label>
      Filter contacts by name
      <input
        type="text"
        onChange={e => dispatch(setFilter(e.target.value.toLowerCase()))}
      />
    </label>
  );
}
