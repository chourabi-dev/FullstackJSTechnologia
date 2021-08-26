import React from "react";

class ArticleItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content,
            didLike: props.didLike,
            id: props.id,
            likes: props.likes,
        }
    }

    componentDidMount(){
         
    }


    render(){
        return(
            <div className="mb-3">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">
                            {this.state.content}
                        </p>

                        <div className="row">
                            <div className="col">
                                <button onClick={
                                    ()=>{
                                        // set state did like , nbr likes

                                        this.setState({
                                            didLike:(! this.state.didLike),
                                            likes: this.state.didLike === true ? ( --this.state.likes ) :( ++this.state.likes ) 
                                        })
                                    }


                                }  className="btn btn-primary btn-sm">
                                    <span>{this.state.likes}  </span>
                                {
                                    this.state.didLike === false ?
                                    "j'aime":
                                    "je n'aime plus"
                                }
                                 </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary btn-sm">{this.state.comments} comment</button>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary btn-sm">share</button>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleItem;