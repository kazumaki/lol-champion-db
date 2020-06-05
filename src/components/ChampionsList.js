import React from 'react';
import { connect } from 'react-redux';
import { addChampion, requestChampions } from '../actions';
import MiniChampion from './MiniChampion';

class ChampionsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { requestChampions } = this.props;
    console.log(requestChampions);
    requestChampions();
  }

  receiveChampions(championsData) {
    const { addChampion } = this.props;
    const championsKeys = Object.keys(championsData.data);
    championsKeys.forEach(key => addChampion(championsData.data[key]));
  }

  render() {
    const { champions } = this.props;
    console.log(champions.status);
    return (
      <div>
      {champions.data.map( champion => <MiniChampion champion={champion} />)}
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => (
  {
    requestChampions: () => requestChampions(dispatch),
  }
);

const mapStateToProps = state => {
  if (state.nameFilter === '') {
    return {
      champions: state.champions,
    };
  }

  const data = state.champions.data.filter(champion => champion.name.toLowerCase().startsWith(state.nameFilter));
  const champions = { ...state.champions, data };
  return {champions};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsList);