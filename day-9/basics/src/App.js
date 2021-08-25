import logo from './logo.svg';
import './App.css';
import MyComp from './componenets/MyComp';
import NavBar from './componenets/Navbar';
import Highlights from './componenets/Highlights';
import Footer from './componenets/Footer';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }


    setInterval(()=>{

      this.setState({
        date: new Date()
      })

    },1000)
    
  } 
  render() { 
    return (
      <div> 
        <span> { this.state.date.toISOString() } </span>
      </div>

    );
  }

    /**
   * 
   *     <NavBar />
  
        <Highlights />
        
        <Highlights />
        
  
        <Footer/>
   */

}

export default App;
