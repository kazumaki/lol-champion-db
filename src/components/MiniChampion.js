import React from 'react';
import style from '../styles/MiniChampion.module.css';

const MiniChampion = ({
  styles, imageSrc, champion, handleChampionClick,
}) => (
  <div className={`${style.square}`}>
    <img onClick={() => handleChampionClick(champion)} className={styles} src={imageSrc} alt={champion.name} />
    <span style={{ textAlign: 'center' }}>{champion.name}</span>
  </div>
);

export default MiniChampion;
