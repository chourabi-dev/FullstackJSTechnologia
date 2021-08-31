import { NavLink } from "react-router-dom";

function NavBar(props) {
    console.log(props);
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TechnologiaFlix</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page"  to="/movies">Home</NavLink>
              </li>
               
            </ul>
            {
                props.searchFn != null ?
                <form className="d-flex">
              <input onChange={ (e)=>{ props.searchFn(e.target.value) } }  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            :<div></div>

            
            }
          </div>
        </div>
      </nav>
    );
}

export default NavBar;