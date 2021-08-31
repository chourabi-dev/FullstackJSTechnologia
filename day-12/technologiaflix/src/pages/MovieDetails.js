import { LinearProgress, Typography } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/Navbar';
class MovieDetails extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        
            this.state = {
                movie: null,
                isLoading: true,
                id: props.match.params.test
            }
    }


    componentDidMount() {
        this.getMovieDetails();

    }

    getMovieDetails() {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=hhdsci7ad3ajelv6s3hmtbstsd");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://yts.mx/api/v2/movie_details.json?movie_id="+this.state.id, requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    movie:result.data.movie,
                    isLoading:false
                })
            })
            .catch(error => console.log('error', error));
    }



    render() {
        return (
            <div>

                <NavBar searchFn={null} />

                {
                    this.state.isLoading === true ?
                    <LinearProgress color="secondary" />
                    :
                    <div></div>
                }

                {
                    this.state.movie !== null ?
                    <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <img style={{width:'100%'}} src={this.state.movie.large_cover_image} />
                        </div>
                        <div className="col-sm-12 col-md-9">
                            <h1>{this.state.movie.title}</h1>
                            <Typography>
                                {this.state.movie.description_full}
                            </Typography>

                                <section style={{marginTop:25}}>
                                {
                                        this.state.movie.torrents.map((t)=>{
                                            return <a style={{marginRight:15}} href={t.url} download className="btn btn-primary" >{ t.quality }</a>
                                        })
                                    }
                                </section>
                           
                            

                        </div>

                    </div>
                </div>
                :<div></div>
                }

            </div>
        );
    }

}

export default MovieDetails;