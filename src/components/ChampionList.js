import React from 'react';
import MiniChampion from './MiniChampion';
import style from '../styles/ChampionsList.module.css';

const ChampionList = ({ champions, status }) => {
  switch (status) {
    case 'success':
      return (
        <div className={`${style.container} ${style.scrollStyle}`}>
          {champions}
        </div>
      );

    default:
      return <div className={style.loader} />;
  }
};

export default ChampionList;
