import React from 'react';
import style from '../styles/OuterContainer.module.css';

const OuterContainer = props => {
  const { children } = props;
  return (
    <div className={style.outerContainer}>
      <div className={style.container}>
        {children}
      </div>
    </div>
  );
};

export default OuterContainer;
