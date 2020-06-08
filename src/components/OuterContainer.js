import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/OuterContainer.module.css';

const OuterContainer = ({ children }) => (
  <div className={style.outerContainer}>
    <div className={style.container}>
      {children}
    </div>
  </div>
);

OuterContainer.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.instanceOf(React.Component),
  ).isRequired,
};

export default OuterContainer;
