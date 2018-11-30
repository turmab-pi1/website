import React, { Component } from 'react';
import './App.css';
import Panel from './components/panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel panelColor={"red"} />
        <Panel panelColor={"blue"} />
        <Panel panelColor={"green"} />
      </div>
    );
  }
}

export default App;
