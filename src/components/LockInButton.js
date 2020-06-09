import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../styles/LockInButton.module.css';

const LockInButton = ({ selectedChampion }) => {
  const styles = selectedChampion.name ? style.button : `${style.button} ${style.buttonDisabled}`;
  const button = <button type="button" className={styles}>Lock in</button>;

  if (selectedChampion.name) {
    return (
      <Link to={`/champion/${selectedChampion.id}`}>
        { button }
      </Link>
    );
  }

  return (
    button
  );
};

LockInButton.propTypes = {
  selectedChampion: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default LockInButton;
