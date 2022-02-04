import React from "react";
import logoImg from './logo.svg';


class Test extends React.Component{
    constructor(props) {
        super();

        this.state ={
            flag:true,
        }
    }
    render () {
        console.log(this.state.flag );
        if(this.state.flag){
            <div style={{background:'red', height:'40vh'}}> </div>
        }else{
            <div style={{background:'blue'}}> </div>
        }
        return(
            <button onClick={() => this.setState({flag: !this.state.flag})} >button</button>
        )
    }
}
export default Test;