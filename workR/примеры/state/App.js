import React, { useState  } from 'react';
import logo from './logo.svg';
import Test from './Test';
import Company from './Company';
import './App.scss';

function App() {

  const [flag,setFlag] = useState();
 

  return (
    <div className="App">
      <div onClick={() => setFlag(!flag)}>click</div>
      {flag ? <Test name="test" /> : <Test name="test company" /> } 
    </div>
  );
}

export default App;
