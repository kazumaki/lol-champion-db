import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/MiniChampion.module.css';
import MiniChampionContent from './MiniChampionContent';

const imageSrc = 'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/';

const MiniChampion = ({ champion, handleChampionClick, selected }) => {
  const defaultStyle = `${style.image} ${style.champion}`;
  const styles = selected ? `${defaultStyle} ${style.selected}` : defaultStyle;
  return (
    <MiniChampionContent handleChampionClick={handleChampionClick} styles={styles} imageSrc={`${imageSrc}${champion.image.full}`} champion={champion} />
  );
};

MiniChampion.propTypes = {
  champion: PropTypes.shape(
    {
      image: PropTypes.shape(
        {
          full: PropTypes.string.isRequired,
        },
      ).isRequired,
    },
  ).isRequired,
  handleChampionClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default MiniChampion;
