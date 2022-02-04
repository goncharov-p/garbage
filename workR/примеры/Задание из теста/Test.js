import React, { useState  } from 'react';
import ComponentTestOne from "./ComponentTestOne"
import ComponentTestTwo from "./ComponentTestTwo"
import logoImg from './logo.svg';


function  Test() {

  const [text, setText] = useState('привет не нажато')
  const func =(text) => {
    setText(text)
  }
  return (
    <div className="App">
    
    <ComponentTestOne func={func}/> 
    <ComponentTestTwo func={func}/>
      {text}
      </div>
    );
}
export default Test;