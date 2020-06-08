import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/MiniChampion.module.css';

const MiniChampion = ({
  styles, imageSrc, champion, handleChampionClick,
}) => (
  <div className={`${style.square}`}>
    <button className={style.button} type="button" onClick={() => handleChampionClick(champion)} onKeyDown={() => handleChampionClick(champion)}>
      <img
        className={styles}
        src={imageSrc}
        alt={champion.name}
      />
    </button>
    <span style={{ textAlign: 'center' }}>{champion.name}</span>
  </div>
);

MiniChampion.propTypes = {
  styles: PropTypes.shape(
    {
      square: PropTypes.string.isRequired,
    },
  ).isRequired,
  imageSrc: PropTypes.string.isRequired,
  champion: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
    },
  ).isRequired,
  handleChampionClick: PropTypes.func.isRequired,
};

export default MiniChampion;
