import React, { useState  } from 'react';
import logo from './logo.svg';
import Test from './Test';
import Company from './Company';
import './App.scss';

function App() {

  const [flag,setFlag] = useState();
 
  const testButton = () =>{
    console.log('yes');
  }

  const changeValue =(e,index) => {
    console.log(e.target.value);
    console.log(index);
  }

  const focusFunction = () => {
    console.log("focus");
  }

  const blurFunction = () => {
    console.log("blur");
  }
  return (
    <div className="App">
      <div onClick={() => setFlag(!flag)}>click</div>
      {flag ? <Test name="test" /> : <Test name="test company" /> } 
      <button onClick={() => testButton()}> button</button> 
      <input 
        onChange={(e) => changeValue(e,4)} 
        onFocus={focusFunction} 
        onBlur={blurFunction}
      />
    </div>
  );
}

export default App;
