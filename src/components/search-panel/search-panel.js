import React from 'react';
import './search-panel.css';

export default function SearchPanel({ onSearch }) {
  const onSearchChange = (e) => {
    const q = e.target.value;
    onSearch(q);
  }

  return (
    <input type="text"
      className="form-control search-input"
      placeholder="type to search" 
      onChange={onSearchChange}/>
  );
};