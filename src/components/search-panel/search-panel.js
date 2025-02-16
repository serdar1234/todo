import React from 'react';
import './search-panel.css';
import PropTypes from 'prop-types';

const SearchPanel = ({ onSearch }) => {
  const onSearchChange = (e) => {
    const q = e.target.value;
    onSearch(q);
  };

  return (
    <input type="text" className="form-control search-input" placeholder="type to search" onChange={onSearchChange} />
  );
};

SearchPanel.propTypes = {
  onSearch: PropTypes.func,
};

SearchPanel.defaultProps = {
  onSearch: () => {},
};

export default SearchPanel;
