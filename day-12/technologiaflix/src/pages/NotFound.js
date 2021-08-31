import React from 'react';
import { Link } from "react-router-dom"

class NotFound extends React.Component {
    constructor(props){
        super(props)
    }
  
  
  
    render(){
      return(
        <div className="text-center">
            <h1>Oups, looks like you are consulting an old link <Link to="/movies">back to home</Link> </h1>
        </div>
      );
    }
  
  }
  
  export default NotFound;