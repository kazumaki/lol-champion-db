import React from 'react';
import style from '../styles/MiniChampion.module.css';
import MiniChampion from '../components/MiniChampion';

const imageSrc = 'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/';

const MiniChampionContainer = ({ champion, handleChampionClick, selected }) => {
  const defaultStyle = `${style.image} ${style.champion}`;
  const styles = selected ? `${defaultStyle} ${style.selected}` : defaultStyle;
  return (
    <MiniChampion handleChampionClick={handleChampionClick} styles={styles} imageSrc={`${imageSrc}${champion.image.full}`} champion={champion} />
  );
};

export default MiniChampionContainer;
