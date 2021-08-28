import React from "react"; 

/*function Profile(){

    const urlParams = useParams();

    

    const id = urlParams.id;

    // HTTP REQUEST SERVER + ID + id

    return <h1>Profile world {id} </h1>
}

*/

class Profile extends React.Component{
    constructor(props){
        super(props);

        console.log(props);

        this.state = {
            id: props.match.params.id
        }
    }


    render(){
        return <h1>Profile world {this.state.id} </h1>
    }
}






export default Profile;