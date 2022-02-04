import React from "react";
import logoImg from './logo.svg';


function Company({company}){
    const{name,owner} = company;
    return (
        <div>
            <h1>{name}</h1>
            <span>{owner}</span>
        </div>
    )
}
export default Company;