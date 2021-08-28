import React from "react";

const compStyle = {
    inputStyle: { color: 'red'},
     
}


class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            email:'',
            selectedCountry:'TN',
            remmeberMe: false,
            options:[
                { id:"TN" , name:"Tunisia" },
                { id:"GER" , name:"Germany" },
                { id:"US" , name:"United States" },
                
                
            ],

            supp : [
                { id:"FR", name:"frites" },
                { id:"OL", name:"olive" },
                { id:"TOM", name:"Tomato" },
                
                
            ],
            selectedSupp: []
        }
    }


    selectSupp(id){
       let tmp = this.state.selectedSupp;

      
       
       let found = false;
        
       for (let i = 0; i < tmp.length; i++) {
           const supp = tmp[i];

           if (supp === id) {
               found = true;
               // remove
               tmp.splice(i,1);
               this.setState({
                   selectedSupp: tmp
               })
           }
           
       }

       if (found === false) {
        tmp.push(id);

        this.setState({
         selectedSupp: tmp
        })
       }

       console.log(tmp);
    }



    render(){
        return (
        <div className="container">
            <div className="mb-3">
                <label>Username 

                    {
                        this.state.username === '' ?
                        <span className="text-danger">*</span> :
                        <span></span>

                    }
                    
                    
                    </label>
                <input type="text" 

                    className={this.state.username === '' ? 'form-control border-danger' : 'form-control border-success'}
                    value = { this.state.username }
                    onChange={ (event)=>{
                    const txt = event.target.value;

                    this.setState({
                        username:txt
                    })
                    
                } } />
            </div>


            <div className="mb-3">
                <label>Email 

                    {
                        this.state.email === '' ?
                        <span className="text-danger">*</span> :
                        <span></span>

                    }
                    
                    
                    </label>
                <input type="text" 
                   
                    style = { compStyle.inputStyle }
                    className={this.state.email === '' ? 'form-control border-danger' : 'form-control border-success'}
                    value = { this.state.email }
                    onChange={ (event)=>{
                    const txt = event.target.value;

                    this.setState({
                        email:txt
                    })
                    
                } } />
            </div>

            
            <div className="mb-3">
                <label>Country  </label>

                <select className="form-control" onChange={ (e)=>{ this.setState({selectedCountry: e.target.value}) } } value={this.state.selectedCountry}>
                    <option value="">Please choose a value</option>
                    {
                        this.state.options.map((c)=> <option value={c.id} >{c.name}</option> )
                    }
                </select>
                
            </div>


            <div className="mb-3">
                <label>Remmeber me   <input onChange={ (e)=>{ this.setState({remmeberMe: e.target.checked}) } } checked={ this.state.remmeberMe } type="checkbox" /> </label>
                
                
                
            </div>

            <hr/>


            <ul>
                {
                    this.state.supp.map((s)=> <li> { s.name } <input onChange= { ()=>{
                        this.selectSupp(s.id);
                    } } type="checkbox" /> </li> )
                }
            </ul>

            <hr/>
            <h6>Selected supplement</h6>
            <ul>
                {
                    this.state.selectedSupp.map((s)=> <li> { s }  </li> )
                }
            </ul>
            
            



            <button 
                disabled={ ( this.state.username === '' ||  this.state.email === '' ) ? true : false }
                className="btn btn-primary" onClick={ ()=>{
                console.log(this.state);

            } } > show value in console </button>
        </div>
        );
    }
}

export default Forms;