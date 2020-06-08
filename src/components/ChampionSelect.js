import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/ChampionSelect.module.css';
import CurrentChampion from './CurrentChampion';
import ChampionsContainer from '../containers/ChampionsContainer';
import OuterContainer from './OuterContainer';
import FilterChampionFormContainer from '../containers/FilterChampionFormContainer';

const ChampionSelect = () => (
  <OuterContainer>
    <Link className={style.backLink} to="/">
      <div className={style.backButton} />
    </Link>
    <FilterChampionFormContainer />
    <ChampionsContainer />
    <CurrentChampion />
  </OuterContainer>
);

export default ChampionSelect;
