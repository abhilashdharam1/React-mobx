import React, { Component } from 'react';
import BirdStore from './stores/BirdStore';
import {Provider} from 'mobx-react';
import Birds from './components/Birds';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider BirdStore={BirdStore}>
        <Birds />
      </Provider>
    );
  }
}

export default App;
