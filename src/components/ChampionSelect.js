import React from 'react';
import { Link } from 'react-router-dom';
import SearchChampionForm from './SearchChampionForm';
import style from '../styles/ChampionSelect.module.css';
import CurrentChampion from './CurrentChampion';
import ChampionsContainer from '../containers/ChampionsContainer';
import OuterContainer from './OuterContainer';

const ChampionSelect = () => (
  <OuterContainer>
    <Link className={style.backLink} to="/">
      <div className={style.backButton} />
    </Link>
    <SearchChampionForm />
    <ChampionsContainer />
    <CurrentChampion />
  </OuterContainer>
);

export default ChampionSelect;
