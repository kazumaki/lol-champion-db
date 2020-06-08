import React from 'react';
import MiniChampionContainer from './MiniChampionContainer';

const champions = [
  {
    id: 'Aatrox',
    name: 'Aatrox',
    image: {
      full: 'Aatrox.png',
    },
    selected: false,
  },
  {
    id: 'Ahri',
    name: 'Ahri',
    image: {
      full: 'Ahri.png',
    },
    selected: true,
  },
];

const miniChampions = champions.map(
  champion => (
    <MiniChampionContainer
      key={champion.id}
      champion={champion}
      selected={champion.selected}
      handleChampionClick={() => {}}
    />
  ),
);

const selectedChampion = champions[0];

export { miniChampions, selectedChampion };
