import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTasks }) => {
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
    searchTasks(e.target.value);
  };

  return (
    <div className="search-task">
      <input
        className="search-input"
        type='text'
        name='task'
        placeholder='Search your task ...'
        value={search}
        onChange={onChange}
      />
    </div>
  );
};

Search.propTypes = {
  searchTasks: PropTypes.func.isRequired,
};

export default Search;
