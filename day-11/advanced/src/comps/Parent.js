import React from "react";
import Child from "./child";

class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msgResponse:''
        }


        this.unsware = this.unsware.bind(this);
    }


    unsware(msg){
         this.setState({
            msgResponse:msg
         })

    }   


    render(){
        return (
            <div>
                <h1>hello i'm the parent</h1>

                    <p> response from the child: {this.state.msgResponse} </p>

                    <Child msg="hello child !!" responseFN = { this.unsware } />
            </div>
        );
    }
}


export default Parent;