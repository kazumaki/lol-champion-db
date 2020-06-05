import React from 'react';
import ChampionsList from "./ChampionsList"
import SearchChampionForm from "./SearchChampionForm"
import style from '../styles/ChampionSelect.module.css';

const ChampionSelect = () => {
  return (
    <div className={style.container}>
      <SearchChampionForm />
      <ChampionsList />
    </div>
  )
}

export default ChampionSelect;