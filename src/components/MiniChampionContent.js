import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/MiniChampion.module.css';

const MiniChampionContent = ({
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

MiniChampionContent.propTypes = {
  styles: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  champion: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
    },
  ).isRequired,
  handleChampionClick: PropTypes.func.isRequired,
};

export default MiniChampionContent;
