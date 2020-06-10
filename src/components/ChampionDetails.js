import React from 'react';
import PropTypes from 'prop-types';
import OuterContainer from './OuterContainer';
import ChampionDetailsContent from './ChampionDetailsContent';
import BackButton from './BackButton';

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

    fetch(`https://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion/${championId}.json`)
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
            <BackButton to="/champions" />
            <ChampionDetailsContent champion={champion} />
          </OuterContainer>
        );

      case 'fetching':
        return (
          <OuterContainer>
            <BackButton to="/champions" />
            <h1>Fetching</h1>
          </OuterContainer>
        );

      case 'error':
        return (
          <OuterContainer>
            <BackButton to="/champions" />
            <h1>Error</h1>
          </OuterContainer>
        );

      default:
        return (
          <h1>Unknown Error</h1>
        );
    }
  }
}

ChampionDetailsContainer.propTypes = {
  match: PropTypes.shape(
    {
      params: PropTypes.shape(
        {
          id: PropTypes.string.isRequired,
        },
      ).isRequired,
    },
  ).isRequired,
};

export default ChampionDetailsContainer;
