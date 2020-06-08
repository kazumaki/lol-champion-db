import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/MiniChampion.module.css';
import MiniChampion from './MiniChampion';

const imageSrc = 'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/';

const MiniChampionContainer = ({ champion, selected }) => {
  const defaultStyle = `${style.image} ${style.champion}`;
  const styles = selected ? `${defaultStyle} ${style.selected}` : defaultStyle;
  return (
    <MiniChampion styles={styles} imageSrc={`${imageSrc}${champion.image.full}`} champion={champion} />
  );
};

MiniChampionContainer.propTypes = {
  champion: PropTypes.shape(
    {
      image: PropTypes.shape(
        {
          full: PropTypes.string.isRequired,
        },
      ).isRequired,
    },
  ).isRequired,
  selected: PropTypes.bool.isRequired,
};

export default MiniChampionContainer;
