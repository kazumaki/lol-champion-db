import React from 'react';
import ChampionsList from "./ChampionsList"
import SearchChampionForm from "./SearchChampionForm"
import style from '../styles/ChampionSelect.module.css';
import CurrentChampion from './CurrentChampion';

const ChampionSelect = () => {
  return (
    <div className={style.container}>
      <SearchChampionForm />
      <ChampionsList />
      <CurrentChampion />
    </div>
  )
}

export default ChampionSelect;