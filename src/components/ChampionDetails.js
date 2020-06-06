import React from 'react';

const ChampionDetails = (props) => {
  console.log(props);
  return (
    <h1>{props.match.params.name}</h1>
  )
}

export default ChampionDetails;