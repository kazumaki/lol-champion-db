import React from 'react';
import SearchChampionForm from './SearchChampionForm';
import style from '../styles/ChampionSelect.module.css';
import CurrentChampion from './CurrentChampion';
import ChampionsContainer from '../containers/ChampionsContainer';

const ChampionSelect = () => (
  <div className={style.outerContainer}>
    <div className={style.container}>
      <SearchChampionForm />
      <ChampionsContainer />
      <CurrentChampion />
    </div>
  </div>
);

export default ChampionSelect;
