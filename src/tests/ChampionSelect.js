import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/ChampionSelect.module.css';
import CurrentChampion from './CurrentChampion';
import ChampionsList from './ChampionsList';
import OuterContainer from './OuterContainer';
import FilterChampionForm from './FilterChampionForm';
import { miniChampions, selectedChampion } from './testValues';

const ChampionSelect = () => (
  <OuterContainer>
    <Link className={style.backLink} to="/">
      <div className={style.backButton} />
    </Link>
    <FilterChampionForm />
    <ChampionsList champions={miniChampions} status="success" />
    <CurrentChampion selectedChampion={selectedChampion} />
  </OuterContainer>
);

export default ChampionSelect;
