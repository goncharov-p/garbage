import React from "react";
import logoImg from './logo.svg';


function Header ({url,name,author}){
    return (
        <div>
            <img src={url}></img>
            <h1>{name}</h1>
            <h1>{author}</h1>
        </div>
    )
}
export default Header;