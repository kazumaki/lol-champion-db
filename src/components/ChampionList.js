import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/ChampionsList.module.css';

const ChampionList = ({ champions, status }) => {
  switch (status) {
    case 'success':
      return (
        <div className={`${style.container} ${style.scrollStyle}`}>
          {champions}
        </div>
      );

    default:
      return <div className={style.loader} />;
  }
};

ChampionList.propTypes = {
  champions: PropTypes.arrayOf(
    PropTypes.instanceOf(React.Component),
  ).isRequired,
  status: PropTypes.string.isRequired,
};

export default ChampionList;
