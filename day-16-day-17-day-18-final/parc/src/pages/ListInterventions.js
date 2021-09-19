 
import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../componenet/SideNav';

class ListIntervention extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        user: null,
        interventions : [],
        errMsg:"",


        query:"",

        id:props.match.params.id
    }
  }



  getConnectedUserData(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem('token'));
    
 
    var requestOptions = {
      method: 'GET',
      headers: myHeaders, 
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/api/user/connected", requestOptions)
      .then(response => response.json())
      .then(result => { this.setState({user:result}) })
      .catch(error => console.log('error', error));
  }


  componentDidMount(){
      this.getConnectedUserData(); 


      this.getListInteventions();
  }


  getListInteventions(){
      let url = "http://localhost:8080/api/vehicules/inteventions/list?id="+this.state.id;

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", localStorage.getItem('token'));
      
   
      var requestOptions = {
        method: 'GET',
        headers: myHeaders, 
        redirect: 'follow'
      };
      
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => { 
            console.log(result);

            this.setState({interventions:result.data})
         })
        .catch(error => console.log('error', error));
  }

  
 
  render(){
    return (
        <div id="wrapper">

        <SideNav />

        <div id="content-wrapper" class="d-flex flex-column">
 
            <div id="content">

                
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                     
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                     
                     
                    <ul class="navbar-nav ml-auto">

                         

                         

                         

                        <div class="topbar-divider d-none d-sm-block"></div>

                         
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                                    {
                                        this.state.user === null ?
                                        'chargement...':
                                        this.state.user.fullname
                                    }
                                </span>
                                
                            </a>
                           
                             
                        </li>

                    </ul>

                </nav>
                 
                <div class="container-fluid">

                    
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Parc vehicules</h1>
                        <Link to="/vehicules/add"   class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus fa-sm text-white-50"></i> Add new vehicule</Link>
                    </div>



                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">List</h6>
                        </div>


                        <div class="card-body">
                            <div class="table-responsive">
                                
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                    
                                        <tr>
                                            <th>Description</th>
                                            <th>Montant</th>
                                            <th>Date</th> 
                                        </tr>
                                    </thead>
                                 
                                    <tbody> 

                                        {
                                            this.state.interventions.map((i)=>{
                                                return ( 
                                                <tr>
                                                    <td>{i.description}</td>
                                                    <td>{i.amount}</td>
                                                    <td>{i.date}</td>
                                                    
                                                    
                                                </tr> 
                                                );
                                            })
                                        }


                                        
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>



                </div> 

            </div> 
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer> 

        </div> 

    </div>
    );
  }
}

export default ListIntervention;
