import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../styles/BackButton.module.css';

const BackButton = ({ to }) => (
  <Link className={style.backLink} to={to}>
    <div className={style.backButton} />
  </Link>
);

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default BackButton;
