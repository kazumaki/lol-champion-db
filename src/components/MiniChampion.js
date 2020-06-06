import React from 'react';
import style from '../styles/MiniChampion.module.css';

const MiniChampion = ({ champion, handleChampionClick, selected }) => {
  const styles = selected ? `${style.image} ${style.champion} ${style.selected}` : `${style.image} ${style.champion}`;
  return (
    <div className={`${style.square}`}>
      <img onClick={() => handleChampionClick(champion)} className={styles} src={`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/${champion.image.full}`} alt={ champion.name }/>
      <span>{champion.name}</span>
    </div>
  )
}

export default MiniChampion;