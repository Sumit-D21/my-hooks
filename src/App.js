import React, { Component } from 'react';
import './App.css';
import ClassCounter from './component/ClassCounter';
import HooksCounter from './component/HooksCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HooksCounter/>
        {/* <ClassCounter/> */}
      </div>
    );
  }
}

export default App;
