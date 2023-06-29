import React, { Component } from 'react';
import './App.css';
import ClassCounter from './component/ClassCounter';
import HooksCounter from './component/HooksCounter';
import HookCountersTwo from './component/HookCounters2';
import HookCounterThree from './component/HookCounterThree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HookCounterThree/>
        {/* <HookCountersTwo/> */}
        {/* <HooksCounter/> */}
        {/* <ClassCounter/> */}
      </div>
    );
  }
}

export default App;
