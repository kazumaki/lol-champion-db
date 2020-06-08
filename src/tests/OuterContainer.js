import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import style from '../styles/OuterContainer.module.css';

const OuterContainer = ({ children }) => (
  <div className={style.outerContainer}>
    <div className={style.container}>
      {children}
    </div>
  </div>
);

OuterContainer.defaultProps = {
  children: {},
};

OuterContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape(
      {},
    ),
    PropTypes.arrayOf(
      PropTypes.shape(
        {},
      ),
    ),
  ]),
};

export default OuterContainer;
