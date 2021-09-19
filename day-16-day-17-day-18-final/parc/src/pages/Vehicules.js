 
import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../componenet/SideNav';

class VehiculesPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        user: null,
        vehicules : [],
        errMsg:"",


        query:""
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
      this.getParcVehicules();
  }


  getParcVehicules(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem('token'));

 
    var requestOptions = {
      method: 'GET',
      headers: myHeaders, 
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/api/vehicules/list", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)

        if (result.success === true) {
            this.setState({
                vehicules: result.data
            })
        }
      })
      .catch(error => console.log('error', error));
  }


  deleteVehicule(id){
    // API delete

    console.log(id);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem('token'));

    var raw = JSON.stringify({"id":id});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:8080/api/vehicules/delete", requestOptions)
    .then(response => response.json())
    .then(result => {
        if (result.success === true) {

            this.getParcVehicules();
        }else{
            this.setState({errMsg:"Something went wrong while deleting the vehicule"})
        }
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
                            <h6 class="m-0 font-weight-bold text-primary">Chercher</h6>
                        </div>


                        <div class="card-body">
                            <div  >
                                <label>Immatriculation</label>
                                <input type="search" className="form-control" onChange={ (e)=>{ this.setState({query:e.target.value})  } } />
                            </div>
                        </div>

                    </div>






                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">List</h6>
                        </div>


                        <div class="card-body">
                            <div class="table-responsive">
                                
                                {
                                    this.state.errMsg !== '' ?
                                    <div className="alert alert-danger">
                                        { this.state.errMsg }
                                    </div>
                                    :
                                    <div></div>

                                }
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                    
                                        <tr>
                                            <th>Marque</th>
                                            <th>Model</th>
                                            <th>Puissance</th>
                                            <th>Coleur</th>
                                            <th>PI</th>
                                            <th>CIN prop</th>
                                            <th>Nom & prénom prop</th>
                                            <th>Intervention(s)</th>
                                            
                                            <th>Actions</th> 

                                        </tr>
                                    </thead>
                                 
                                    <tbody> 


                                        {
                                             this.state.vehicules.filter((v)=> v.registrationPlate.indexOf(this.state.query) != -1 ).map((v)=>{
                                                return (
                                                    <tr> 
                                                        <td> {v.marque} </td>
                                                        <td> {v.model} </td>
                                                        <td> {v.pf} ch </td>
                                                        <td> <div style={ { width:20, height:20 , backgroundColor:v.color != '' ? v.color:"#000" } }></div> </td>
                                                        <td> {v.registrationPlate}  </td>
                                                        <td> {v.cinOwner}  </td>
                                                        <td> {v.fullnameOwner}  </td>
                                                        <td> <Link to= {"/vehicules/intervention/list/"+v._id} >Voir list</Link> </td>
                                                        <td>
                                                            <Link className="btn btn-info btn-sm" style={{marginRight:15}} to= { '/vehicules/update/'+v._id } >modifier</Link>
                                                            <button className="btn btn-danger btn-sm" onClick={ ()=>{this.deleteVehicule(v._id)} } >supprimer</button>

                                                            <br/>

                                                            <Link className="btn btn-primary btn-sm mt-3" to={"/vehicules/intervention/add/"+v._id} ><i className="fas fa-plus"></i> Intervention</Link> 
                                                        </td>
                                                        
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

export default VehiculesPage;
