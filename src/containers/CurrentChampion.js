import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LockInButton from '../components/LockInButton';

const CurrentChampion = ({ selectedChampion }) => {
  const { name } = selectedChampion;
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{name || 'N/A'}</h1>
      <LockInButton selectedChampion={selectedChampion} />
    </div>
  );
};

const mapStateToProps = state => ({
  selectedChampion: state.champions.selectedChampion,
});

CurrentChampion.propTypes = {
  selectedChampion: PropTypes.shape(
    {
      name: PropTypes.string,
    },
  ).isRequired,
};

export default connect(mapStateToProps, null)(CurrentChampion);
