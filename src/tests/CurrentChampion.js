import React from 'react';
import PropTypes from 'prop-types';
import LockInButton from './LockInButton';

const CurrentChampion = ({ selectedChampion }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>{selectedChampion.name || 'N/A'}</h1>
    <LockInButton selectedChampion={selectedChampion} />
  </div>
);

CurrentChampion.propTypes = {
  selectedChampion: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default CurrentChampion;
