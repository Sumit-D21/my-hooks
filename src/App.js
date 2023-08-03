import React, { Component } from 'react';
import './App.css';
import ClassCounter from './component/ClassCounter';
import HooksCounter from './component/HooksCounter';
import HookCountersTwo from './component/HookCounters2';
import HookCounterThree from './component/HookCounterThree';
import MouseContainer from './component/MouseContainer';
import IntervalHookCounter from './component/IntervalHookCounter';
import DataFetching from './component/DataFetching';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataFetching/>
        {/* <IntervalHookCounter/> */}
        {/* <MouseContainer/> */}
        {/* <HookCounterThree/> */}
        {/* <HookCountersTwo/> */}
        {/* <HooksCounter/> */}
        {/* <ClassCounter/> */}
      </div>
    );
  }
}

export default App;
