import React from 'react';
import { connect } from 'react-redux';
import { requestChampions, changeSelectedChampion } from '../actions';
import ChampionList from '../components/ChampionList';
import MiniChampionContainer from './MiniChampionContainer';
import champions from '../reducers/champions';

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
          <MiniChampionContainer
            key={champion.name}
            handleChampionClick={this.handleChampionClick}
            champion={champion}
            selected={selected}
          />
        );
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
  let { data } = state.champions;
  const { filter } = state;

  if (filter.name !== '') {
    data = data.filter(
      champion => champion.name.toLowerCase().startsWith(filter.name),
    );
  }

  if (filter.tag !== 'All') {
    data = data.filter(
      champion => champion.tags.includes(filter.tag),
    );
  }

  const champions = { ...state.champions, data };

  return { champions };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsContainer);
