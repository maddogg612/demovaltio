import * as React from 'react';
import { actions, filters, useFilter } from '../store';

function FilterRow() {
  const activeFilter = useFilter();

  return (
    <div style={{ padding: 0, marginTop: 10 }}>
      {filters.map((filter) => (
        <button
          style={{ fontWeight: activeFilter === filter ? 'bold' : 'normal', margin:  10 }}
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
