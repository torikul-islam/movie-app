import React, {Component} from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {}
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    };

    validate = () => {
        const options = {abortEarly:false};

        const {error} = Joi.validate(this.state.account, this.schema,options );
        if (!error) return null;

        const errors={};
        for (let item of error.details){
            errors[item.path[0]] = item.message;
        }
        return errors;


    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        //call the server
        console.log("Submitted");
    };

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};


        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    };

    render() {
        const {account, errors} = this.state;
        return (
            <div>
                <h1>Login form</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        value={account.username}
                        label="Username"
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        value={account.password}
                        label="Password"
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
