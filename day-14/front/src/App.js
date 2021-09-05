import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      username:"",
      password:''
    }
  }

  componentDidMount(){
    //



  }

  checkAuth(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem('accessToken'));
    
    var raw = JSON.stringify({"username":"admin","password":"admin"});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/vehicule/add", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  signIN(){
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"username":this.state.username,"password":this.state.password});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:8080/signin", requestOptions)
    .then(response => response.json())
    .then(result => {
      
      console.log(result)

      if (result.token != null) {
        localStorage.setItem('accessToken',result. token);
      }

    })
    .catch(error => console.log('error', error));
  }

  render(){
    return (
      <div className="App">
        <input type="text" onChange={ (e)=>this.setState({username:e.target.value}) } placeholder="username" />
        <input type="password" onChange={ (e)=>this.setState({password:e.target.value}) } placeholder="password" />
        <button onClick={ ()=>{ this.signIN() } } >CONNECT</button>



        <br/>


        <button onClick={ ()=>{ this.checkAuth(); } } >add vehicule</button>

      </div>
    );
  }




}

export default App;
