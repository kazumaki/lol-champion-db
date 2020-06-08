import React from 'react';
import PropTypes from 'prop-types';
import OuterContainer from './OuterContainer';
import style from '../styles/ChampionDetails.module.css';

const ChampionDetails = ({ champion }) => {
  const imageSrc = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
  return (
    <OuterContainer>
      <div className={style.container}>
        <img className={style.loadingImage} src={imageSrc} alt={champion.id} />
        <div className={style.infoContainer}>
          <h1 className={style.championName}>{ champion.name }</h1>
          <div className={style.infoBox}>
            <h2>Info</h2>
            <ul className={style.infoList}>
              <li>{`Attack: ${champion.info.attack}`}</li>
              <li>{`Defense: ${champion.info.defense}`}</li>
              <li>{`Difficulty: ${champion.info.difficulty}`}</li>
              <li>{`Magic: ${champion.info.magic}`}</li>
            </ul>
          </div>
          <div className={style.infoBox}>
            <h2>Stats</h2>
            <ul className={style.infoList}>
              <li>{`Health Potions: ${champion.stats.hp}`}</li>
              <li>{`Mana Points: ${champion.stats.mp}`}</li>
              <li>{`Attack Damage: ${champion.stats.attackdamage}`}</li>
              <li>{`Armor: ${champion.stats.armor}`}</li>
            </ul>
          </div>
        </div>
      </div>
    </OuterContainer>
  );
};

ChampionDetails.propTypes = {
  champion: PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      info: PropTypes.shape(
        {
          attack: PropTypes.number.isRequired,
          defense: PropTypes.number.isRequired,
          difficulty: PropTypes.number.isRequired,
          magic: PropTypes.number.isRequired,
        },
      ),
      stats: PropTypes.shape(
        {
          hp: PropTypes.number.isRequired,
          mp: PropTypes.number.isRequired,
          attackdamage: PropTypes.number.isRequired,
          armor: PropTypes.number.isRequired,
        },
      ),
    },
  ).isRequired,
};

export default ChampionDetails;
