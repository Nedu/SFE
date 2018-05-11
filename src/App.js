import React, { Component } from 'react';

import Header from './Components/Header';
import EmailForm from './Components/EmailForm';
import { styles } from './styles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={styles.Container}>
        <Header />
        <EmailForm />  
      </div>
    );
  }
}

export default App;
