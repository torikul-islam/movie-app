import React, {Component} from "react";
import TableHeader from "./common/TableHeader";
import TableBody from "./common/TableBody";


class MoviesTable extends Component {
    columns = [
        {path: "title", label: "Title"},
        {path: "genre.name", label: "Genre"},
        {path: "numberInStock", label: "Stock"},
        {path: "dailyRentalRate", label: "Rate"},
        {key: "delete",
         content: movie=> <button
                onClick={() => this.props.onDelete(movie)}
                className="btn btn-danger btn-sm"
            >
                Delete
            </button> },

    ];


    render() {
        const {movies, sortColumn, onSort} = this.props;
        return (
            <table className="table">
                <TableHeader
                    columns = {this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                <TableBody
                    data ={movies}
                    columns={this.columns}
                />

            </table>
        );

    }
}

export default MoviesTable;
