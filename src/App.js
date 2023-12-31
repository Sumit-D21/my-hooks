import React, { Component } from 'react';
import './App.css';
import ClassCounter from './component/ClassCounter';
import HooksCounter from './component/HooksCounter';
import HookCountersTwo from './component/HookCounters2';
import HookCounterThree from './component/HookCounterThree';
import MouseContainer from './component/MouseContainer';
import IntervalHookCounter from './component/IntervalHookCounter';
import DataFetching from './component/DataFetching';
import UsereducerCounter from './component/UsereducerCounter';
import DataFetchingReducer from './component/DataFetchingReducer';
import Parent from './component/useCallback/Parent';
import UseMemoCounter from './component/UseMemoCounter';
import UseRefInput from './component/UseRefInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UseRefInput/>
        {/* <UseMemoCounter/> */}
        {/* <Parent/> */}
        {/* <DataFetchingReducer/> */}
        {/* <UsereducerCounter/> */}
        {/* <DataFetching/> */}
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
