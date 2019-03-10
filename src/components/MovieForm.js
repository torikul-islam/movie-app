import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {getGenres} from "../services/fakeGenreService";
import {getMovies, saveMovie} from "../services/fakeMovieService";


class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: "",
        },
        genres: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number In Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate"),
    };

    componentDidMount() {
        const genres = getGenres();
        this.setState({genres});

        const movieId = this.props.match.params.id;
        if (movieId === "new") return ;

        const movie =getMovies();
        if (!movie) return this.props.history.replace('/not-found');
        this.setState({data: this.mapToViewModel(movie)});
    }

    mapToViewModel=(movie)=>{
      return {
          _id: movie._id,
          title: movie.title,
          genreId: movie.genreId,
          numberInStock: movie.numberInStock,
          dailyRentalRate: movie.dailyRentalRate
      }
    };

    doSubmit =()=>{
      saveMovie(this.state.data);

      this.props.history.push("/movies/");
    };

    render() {
        return (
            <div>
                <h1>Movie form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "Genre", this.state.genres)}
                    {this.renderInput("numberInStock", "Number In Stock", "Number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default MovieForm;
