import React from 'react';
import OuterContainer from './OuterContainer';
import style from '../styles/About.module.css';
import BackButton from './BackButton';

const About = () => (
  <OuterContainer>
    <BackButton to="/" />
    <div className={style.container}>
      <h2 style={{ textAlign: 'center' }}>About</h2>
      <span style={{ textAlign: 'center' }}>
        Developed with: React & Redux and a bit of HTML & CSS.
        <br />
        This project is open source feel free to contribute to the repository.
        <a href="https://github.com/kazumaki/lol-champion-db" target="_blank" rel="noopener noreferrer">
          GitHub Repository.
        </a>
        <br />
        Developer:
        <a href="https://www.linkedin.com/in/vcamposcarvalho/" target="_blank" rel="noopener noreferrer">
          Vinicius Campos Carvalho
        </a>
        <br />
        This is a noncommercial project, all the content shown here is property of Riot Games Inc.
      </span>
    </div>
  </OuterContainer>
);

export default About;
