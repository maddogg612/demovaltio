import * as React from 'react';
import { actions, filters, useFilter } from '../store';

function FilterRow() {
  const activeFilter = useFilter();

  return (
    <div style={{ padding: 20 }}>
      {filters.map((filter) => (
        <button
          style={{ fontWeight: activeFilter === filter ? 'bold' : 'normal' }}
          onClick={() => {
            actions.toggleFilter(filter);
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterRow;
