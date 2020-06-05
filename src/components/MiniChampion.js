import React from 'react';
import style from '../styles/MiniChampion.module.css';

const MiniChampion = ({ champion }) => {
  return (
    <div className={style.square}>
      <img className={style.image} src={`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/${champion.image.full}`} alt={ champion.name }/>
      <h6>{champion.name}</h6>
    </div>
  )
}

export default MiniChampion;