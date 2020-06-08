import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LockInButton from './LockInButton';

const CurrentChampion = ({ selectedChampion }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>{selectedChampion.name || 'N/A'}</h1>
    <LockInButton selectedChampion={selectedChampion} />
  </div>
);

const mapStateToProps = state => ({
  selectedChampion: state.champions.selectedChampion,
});

CurrentChampion.propTypes = {
  selectedChampion: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default connect(mapStateToProps, null)(CurrentChampion);
