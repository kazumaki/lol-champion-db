import React from 'react';
import MiniChampion from './MiniChampion';
import style from '../styles/ChampionsList.module.css'

const ChampionList = ({champions}) => {
  return (
    <div className={`${style.container} ${style.scrollStyle}`}>
      {champions}
    </div>
  );
};

export default ChampionList;
