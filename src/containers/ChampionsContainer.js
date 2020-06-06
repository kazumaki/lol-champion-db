import React from 'react';
import { requestChampions, changeSelectedChampion } from '../actions';
import MiniChampion from '../components/MiniChampion';
import ChampionList from '../components/ChampionList';
import { connect } from 'react-redux';

class ChampionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChampionClick = this.handleChampionClick.bind(this);
  }

  componentDidMount() {
    const { requestChampions } = this.props;
    requestChampions();
  }

  handleChampionClick(champion) {
    const { changeSelectedChampion } = this.props;
    changeSelectedChampion(champion);
  }

  render() {
    let { champions } = this.props;
    champions = champions.data.map(
      champion => {
        const selected = champion.name === champions.selectedChampion.name;
        return (
          <MiniChampion
            key={champion.name}
            handleChampionClick={this.handleChampionClick}
            champion={champion}
            selected={selected}
          />
        )
      },
    );
    return (
      <ChampionList champions={champions} />
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    requestChampions: () => requestChampions(dispatch),
    changeSelectedChampion: champion => dispatch(changeSelectedChampion(champion)),
  }
);

const mapStateToProps = state => {
  if (state.nameFilter === '') {
    return {
      champions: state.champions,
    };
  }

  const data = state.champions.data.filter(
    champion => champion.name.toLowerCase().startsWith(state.nameFilter),
  );
  const champions = { ...state.champions, data };
  return { champions };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsContainer);