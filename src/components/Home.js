import React from 'react';
import { Link } from 'react-router-dom';
import OuterContainer from './OuterContainer';
import style from '../styles/Home.module.css';

const Home = () => (
  <OuterContainer>
    <Link className={style.link} to="/champions">
      <div className={style.button}>
        Champions
      </div>
    </Link>
    <Link className={style.link} to="/about">
      <div className={style.button}>
        About
      </div>
    </Link>
  </OuterContainer>
);

export default Home;
