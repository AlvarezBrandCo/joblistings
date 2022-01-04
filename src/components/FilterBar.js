import React from 'react';

const FilterBar = ({keywords, onClick, clearClick}) => {
  return (
    <div className="filter-bar d-flex justify-content-between">
      <div className="filter-keywords-wrap">
        {keywords.map((x, i) => {
          return (
            <div key={i} className="filter-keyword" onClick={onClick}>
              {x}
            </div>
          )
        })
        }
      </div>
      <div className="clear" onClick={clearClick}>Clear</div>
    </div>
  )
}
export default FilterBar
