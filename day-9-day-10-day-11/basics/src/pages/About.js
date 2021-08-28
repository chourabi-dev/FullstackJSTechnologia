import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Profs from "../componenets/Profs";
import Services from "../componenets/Services";

function About(){
    let route = useRouteMatch();

    return (
        <div>

            <h1>About page</h1>


                <ul> 
                    <li>
                        <Link to={ route.url+ "/profs"}>profs</Link>
                    </li> 
                    <li>
                        <Link to={ route.url+ "/service"} >service</Link>
                    </li> 
                    
                </ul>

            <Switch>
                <Route path={ route.url+'/profs' } component={ Profs   }  exact />
                <Route path={ route.url+'/service' } component={  Services   }  exact />
                
            </Switch>
        </div>
    );
    
    
}

export default About;



