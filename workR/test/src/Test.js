import React from "react";
import logoImg from './logo.svg';


function Test({name,logo}){
    return (
        <div>
            <h1>{name}</h1>
            {logo 
            ? <img src={logoImg} className="App-logo" alt="logo" /> 
            :<span>Not logo</span>}
        </div>
    )
}
export default Test;