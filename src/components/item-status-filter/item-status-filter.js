import React from 'react';
import PropTypes from 'prop-types';

import './item-status-filter.css';

const ItemStatusFilter = ({ filter, onFilterChange }) => {
  const buttons = [
    { code: 0, label: 'All' },
    { code: 1, label: 'Active' },
    { code: 2, label: 'Done' },
  ];

  const mappedBtns = buttons.map(({ code, label }) => {
    const isActive = filter === code;
    const btnExtraStyle = isActive ? 'btn-info' : 'btn-outline-secondary';
    return (
      <button type="button" className={`btn ${btnExtraStyle}`} key={code} onClick={() => onFilterChange(code)}>
        {label}
      </button>
    );
  });
  return <div className="btn-group">{mappedBtns}</div>;
};

ItemStatusFilter.propTypes = {
  filter: PropTypes.number,
  onFilterChange: PropTypes.func,
};

ItemStatusFilter.defaultProps = {
  filter: 0,
  onFilterChange: () => {},
};

export default ItemStatusFilter;
