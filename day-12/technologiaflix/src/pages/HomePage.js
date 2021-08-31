import React from 'react';
import NavBar from '../components/Navbar';



import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '@material-ui/core';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true
        }

        this.searchFor = this.searchFor.bind(this);
    }

    componentDidMount() {
        this.getMoviesList();
    }

    getMoviesList() {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=hhdsci7ad3ajelv6s3hmtbstsd");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        this.setState({
            isLoading:true
        })

        fetch("https://yts.mx/api/v2/list_movies.json", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.data.movies);
                this.setState({
                    movies: result.data.movies,
                    isLoading : false
                })

            })
            .catch(error => console.log('error', error));
    }

    searchFor(query) {
        // search from the server
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=hhdsci7ad3ajelv6s3hmtbstsd");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        this.setState({
            isLoading:true
        })

        fetch("https://yts.mx/api/v2/list_movies.json?query_term=" + query, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.data.movies != null) {
                    this.setState({
                        movies: result.data.movies,
                        isLoading : false
                    })
                }
            })
            .catch(error => console.log('error', error));
    }


    render() {
        return (
            <div>
                <NavBar searchFn={this.searchFor} />
                {
                    this.state.isLoading === true ?
                    <LinearProgress color="secondary" />
                    :
                    <div></div>
                }


                <div className="container mt-5">
                    {
                        this.state.isLoading !== true ?

                        <div className="row">
                        {
                            this.state.movies.map((m) => {
                                return (
                                    <div className="col-sm-6 col-md-4" key={m.id}>
                                        <Card  >
                                            <CardActionArea>
                                                <CardMedia
                                                    style={{ height: 500 }}
                                                    image={m.large_cover_image}
                                                    title={m.title}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {m.title}
                                                    </Typography>

                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary" onClick={() => {
                                                    console.log(this.props.history.push("/movies/details/" + m.id));
                                                }} >
                                                    details
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </div>

                                );
                            })
                        }
                    </div>

                    :


                    <div className="text-center">
                           
                    </div>
                    }
                </div>


            </div>
        );
    }

}

export default Home;
