import React from 'react';
import { Link } from 'react-router-dom';
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

export default LockInButton;
