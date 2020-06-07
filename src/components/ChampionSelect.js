import React from 'react';
import SearchChampionForm from './SearchChampionForm';
import style from '../styles/ChampionSelect.module.css';
import CurrentChampion from './CurrentChampion';
import ChampionsContainer from '../containers/ChampionsContainer';
import OuterContainer from './OuterContainer';

const ChampionSelect = () => (
  <OuterContainer>
    <SearchChampionForm />
    <ChampionsContainer />
    <CurrentChampion />
  </OuterContainer>
);

export default ChampionSelect;
