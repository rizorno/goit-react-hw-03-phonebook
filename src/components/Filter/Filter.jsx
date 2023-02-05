import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './filter.module.scss';

function Filter({ filter, value }) {
  const idElement = nanoid();

  return (
    <label className={css.label}>
      Find contacts by name or by number
      <input
        id={idElement}
        onChange={filter}
        value={value}
        name="filter"
        title="Find contacts by name or by number"
        required
        autoComplete="off"
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
