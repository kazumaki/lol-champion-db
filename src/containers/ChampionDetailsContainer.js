import React from 'react';
import { Link } from 'react-router-dom';
import OuterContainer from '../components/OuterContainer';
import ChampionDetails from '../components/ChampionDetails';
import style from '../styles/ChampionDetails.module.css';

class ChampionDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'fetching',
      champion: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const championId = match.params.id;

    fetch(`http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion/${championId}.json`)
      .then(result => result.json())
      .then(data => {
        this.setState({ champion: data.data[championId], status: 'success' });
      })
      .catch({ champion: undefined, status: 'error' });
  }

  render() {
    const { champion, status } = this.state;

    switch (status) {
      case 'success':
        return (
          <OuterContainer>
            <Link className={style.backLink} to="/champions">
              <div className={style.backButton} />
            </Link>
            <ChampionDetails champion={champion} />
          </OuterContainer>
        );

      case 'fetching':
        return (
          <OuterContainer>
            <Link className={style.backLink} to="/champions">
              <div className={style.backButton} />
            </Link>
            <h1>Fetching</h1>
          </OuterContainer>
        );

      case 'error':
        return (
          <OuterContainer>
            <Link className={style.backLink} to="/champions">
              <div className={style.backButton} />
            </Link>
            <h1>Errro</h1>
          </OuterContainer>
        );

      default:
        return (
          <h1>Unknown Error</h1>
        );
    }
  }
}


export default ChampionDetailsContainer;
