import React from 'react';
import PropTypes from 'prop-types';

const CHAMPION_TAGS = ['All', 'Assassin', 'Fighter', 'Mage', 'Marksman', 'Support', 'Tank'];

const FilterChampionForm = ({
  nameFilter, tagFilter, handleNameChange, handleTagChange,
}) => (
  <form>
    <input type="text" placeholder="Champion name" value={nameFilter} onChange={handleNameChange} />
    <select value={tagFilter} onChange={handleTagChange}>
      {CHAMPION_TAGS.map(
        tag => <option key={tag}>{tag}</option>,
      )}
    </select>
  </form>
);

FilterChampionForm.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  tagFilter: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleTagChange: PropTypes.func.isRequired,
};

export default FilterChampionForm;
