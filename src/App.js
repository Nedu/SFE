import React, { Component } from 'react';

import Header from './Components/Header';
import { styles } from './styles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={styles.Container}>
        <Header />
          
      </div>
    );
  }
}

export default App;
