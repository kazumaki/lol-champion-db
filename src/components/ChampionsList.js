import React from 'react';
import { connect } from 'react-redux';
import { addChampion } from '../actions';
import MiniChampion from './MiniChampion';

class ChampionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      championData: {},
    };
  }

  componentDidMount() {
    this.fetchChampions();
  }

  fetchChampions() {
    fetch('http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json')
      .then(result => result.json())
      .then(data => {
        this.receiveChampions(data);
      })
      .catch(console.log);
  }

  receiveChampions(championsData) {
    const { addChampion } = this.props;
    const championsKeys = Object.keys(championsData.data);
    championsKeys.forEach(key => addChampion(championsData.data[key]));
  }

  render() {
    const { champions } = this.props;
    return (
      <div>
      {champions.map( champion => <MiniChampion champion={champion} />)}
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addChampion: champion => dispatch(addChampion(champion)),
  };
};

const mapStateToProps = state => {
  if (state.nameFilter === '') {
    return {
      champions: state.champions,
    };
  }

  const champions = state.champions.filter(champion => champion.name.toLowerCase().startsWith(state.nameFilter));
  console.log(champions);
  return {champions};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsList);