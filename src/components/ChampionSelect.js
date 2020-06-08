import React from 'react';
import CurrentChampion from './CurrentChampion';
import ChampionsContainer from '../containers/ChampionsContainer';
import OuterContainer from './OuterContainer';
import FilterChampionFormContainer from '../containers/FilterChampionFormContainer';
import BackButton from './BackButton';

const ChampionSelect = () => (
  <OuterContainer>
    <BackButton to="/" />
    <FilterChampionFormContainer />
    <ChampionsContainer />
    <CurrentChampion />
  </OuterContainer>
);

export default ChampionSelect;
