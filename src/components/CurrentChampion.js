import React from 'react';
import LockInButton from './LockInButton';

class CurrentChampion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentChampion: null };
  }

  render() {
    return (
      <div>
        <LockInButton />
      </div>
    )
  }
}

export default CurrentChampion;