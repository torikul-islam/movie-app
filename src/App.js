import React, {Component} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import Movies from "./components/common/Movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound"
import Navbar from "./components/common/Navbar";
import MovieForm from "./components/MovieForm";
import LoginForm from "./components/loginForm";
import './App.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <main className="container">
                    <Switch>
                        <Route path="/login/" component={LoginForm} exact/>
                        <Route path="/movies/:id/" component={MovieForm}/>
                        <Route path="/movies/" component={Movies} exact/>
                        <Route path="/customers/" component={Customers} exact/>
                        <Route path="/rentals/" component={Rentals} exact/>
                        <Route path="/not-found/" component={NotFound} exact/>
                        <Redirect from="/" to="/movies/" exact/>
                        <Redirect to="/not-found/"/>
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
