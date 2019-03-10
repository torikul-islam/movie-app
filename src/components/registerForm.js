import React from 'react';
import Form from './common/form';
import Joi from "joi-browser";

class RegisterForm extends Form {
    state = {
        data: {
            username: "",
            password: "",
            name: ""
        },
        errors: {}
    };

    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name")
    };

    doSubmit = () => {
        console.log("submitted register");
    };

    render() {
        return (
            <div>
                <h1>Register form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("name", "Name")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}
 
export default RegisterForm;