import logo from './logo.svg';
import './App.css';
import MyComp from './componenets/MyComp';
import NavBar from './componenets/Navbar';
import Highlights from './componenets/Highlights';
import Footer from './componenets/Footer';
import React from 'react';
import Articles from './componenets/Articles';
import Forms from './componenets/Forms';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       canPass : true
    } 

    //console.log("constructor");
    
  } 

  /*componentDidMount(){
    console.log("did mount");
  }

  componentDidUpdate(){
    console.log("did update");
  }

  componentWillUnmount(){
    console.log("unmount");
  }*/
 
  render() { 
     return (
       <div>
          {
            /*this.state.canPass === false ?
            <h3>sorry you can't pass</h3>
            :
            <h3>welcome </h3>*/
          }


          <Forms />
       </div>
     );
  }










  

    /**
   * 
   *     <NavBar />
  
        <Highlights />
        
        <Highlights />
        
  
        <Footer/>

        ************************************

             setInterval(()=>{

      this.setState({
        date: new Date()
      })

    },1000)
        <div> 
        <span> { this.state.date.toISOString() } </span>
      </div>*/

   

}

export default App;
