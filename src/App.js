import React, { Component } from 'react';
import './App.css';
import Card from 'react-playing-card'

let deck = [
          {"S": "C", "R": "2"},
          {"S": "D", "R": "4"},
          {"S": "D", "R": "6"},
          {"S": "D", "R": "8"},
          {"S": "D", "R": "10"},
          {"S": "H", "R": "Q"},
          {"S": "C", "R": "K"},
          {"S": "S", "R": "A"}
]

class App extends Component { 

  state = {
    suit: deck[0].S,
    rank: deck[0].R,
  }




  shuffle(array) {
      array.sort(() => Math.random() - 0.5)
      return array
  }


  render() {
    return (
      <div>
      <Card rank={this.state.rank} suit={this.state.suit}/>
      </div>
    );
  }
}

export default App;
