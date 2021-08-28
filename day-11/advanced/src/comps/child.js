import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg:props.msg,
            responseFN : props.responseFN
        }

        console.log(props);
    }



    render(){
        return (
            <div>
                <h1>hello i'm the child</h1>
                <p>
                    message from the parent : {this.state.msg}
                </p>


                <button onClick = { ()=>{

                    this.state.responseFN("response from the child");


                } } >unsware</button>
                    
            </div>
        );
    }
}


export default Child;