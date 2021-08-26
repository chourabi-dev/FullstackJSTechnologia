import React from "react";
import ArticleItem from "./ArticleItem";
class Articles extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles:[
                { id:"1", didLike: true ,likes:15,content:"hello world, this is a small test !!", comments:6 },
                { id:"2", didLike: false ,likes:10,content:"hello world, this is a small test 2 !!", comments:8 }, 
                { id:"3", didLike: false ,likes:10,content:"hello world, this is a small test 2 !!", comments:8 }, 
                
                
            ]
        }
    }

    render(){
        return(
            <div className="container mt-5">

               
                    {
                        this.state.articles.map((a)=> 
                        
                        <ArticleItem 
                            id={ a.id }
                            didLike={ a.didLike }
                            likes={ a.likes }
                            content={ a.content }
                            comments={ a.comments } 

                            key={ a.id }
                        />)
                    }
                    
                 

 
                
            </div>
        );
    }
}

export default Articles;