import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'

class App extends Component {


  shuffle(array) {
      array.sort(() => Math.random() - 0.5)
      return array
  }


  render() {
    return (
      <div>
      <Card></Card>
      </div>
    );
  }
}

export default App;
