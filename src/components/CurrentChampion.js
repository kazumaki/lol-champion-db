import React from 'react';
import { connect } from 'react-redux';
import LockInButton from './LockInButton';

class CurrentChampion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedChampion } = this.props;
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>{selectedChampion.name || 'N/A'}</h1>
        <LockInButton selectedChampion={selectedChampion} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedChampion: state.champions.selectedChampion,
});

export default connect(mapStateToProps, null)(CurrentChampion);
