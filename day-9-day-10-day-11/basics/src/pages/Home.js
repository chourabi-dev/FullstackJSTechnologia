import { Link } from "react-router-dom"

function Home(){
    const memebers = [
        { id:"1", name:"chourabi taher 1" },
        { id:"2", name:"chourabi taher 2" },
        { id:"3", name:"chourabi taher 3" },
        
    ]
    return <div>
        <h1>Members</h1>
        <ul>
            {
                memebers.map((m)=>
                <li>
                    <Link to={ "/profile/"+m.id } ><p> {m.name} </p></Link>
                </li>)
            }
        </ul>
    </div>
}

export default Home;