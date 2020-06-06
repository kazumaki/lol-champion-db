import React from 'react';
import { Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import style from '../styles/LockInButton.module.css';

class LockInButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {

  }

  render() {
    const { selectedChampion } = this.props;
    const styles = selectedChampion.name ? style.button : `${style.button} ${style.buttonDisabled}`;
    const button = <button className={styles}>Lock in</button>;

    if (selectedChampion.name) {
      return (
        <Link to={`/champion/${selectedChampion.name}`}>
          { button }
        </Link>
      );
    }

    return (
      button
    );
  }
}

export default LockInButton;
