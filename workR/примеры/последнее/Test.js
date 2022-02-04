import React from "react";
import logoImg from './logo.svg';


class Test extends React.Component{
    constructor(props) {
        super();

        this.state ={
            flag:true
        }
    }
    render () {
        console.log(this.state.flag );
        return(
            <div>Test component {this.props.name}<div onClick={() => this.setState({flag: !this.state.flag})}>Click 2 </div></div>
        )
    }
}
export default Test;