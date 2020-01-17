import React from 'react';
import axios from 'axios';

class Players extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.dir(response.data);
      this.setState({
        players: response.data
      })
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="players">
        {this.state.players.map(player =>
          <div className="player-card" key={player.id} data-testid={`player-${player.id}`}>
            <h2>{player.name}</h2>
            <p>{player.country}</p>
            <h4>{player.searches}</h4>
          </div>
        )}
      </div>
    );
  }
}

export default Players;