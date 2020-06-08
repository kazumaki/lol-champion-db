import React from 'react';

const CHAMPION_TAGS = ['All', 'Assassin', 'Fighter', 'Mage', 'Marksman', 'Support', 'Tank'];

const FilterChampionForm = () => (
  <form>
    <input data-testid="name-filter" type="text" placeholder="Champion name" />
    <select data-testid="tag-filter">
      {CHAMPION_TAGS.map(
        tag => <option key={tag}>{tag}</option>,
      )}
    </select>
  </form>
);

export default FilterChampionForm;
