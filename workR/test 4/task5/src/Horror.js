import React from "react";
import { 
    Routes, 
    Route, 
    Link, 
    Navigate} from 'react-router-dom';


const Horror = () => {
    return(
        <div>
         <ul>
       <Link to='/2010'><li >2010</li> </Link> 
       <Link to='/2011'><li >2010</li> </Link> 
       <Link to='/2012'><li >2010</li> </Link> 
        </ul>
        </div>
    );
}
export default Horror;