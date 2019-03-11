import React from 'react';
import Joi from "joi-browser";
import Form from "../components/common/form";

class Dropdown extends Form {
    state = {
        data:{
            description: "",
            drop: ""
        },
        errors:{}
    };

    schema = {
        description: Joi.string().required().label("Des"),
        drop: Joi.string().required().label("drop"),
    };

    doSubmit=()=>{
        console.log(this.state.data)
    };

    options=[
      {"_id": 1, name: "one"},
      {"_id": 2, name: "two"},
      {"_id": 3, name: "three"},
    ];


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderSelect("drop", "drop", this.options)}
                    {this.renderTextArea("description", "Des")}
                    {this.renderButton("save")}
                </form>
            </div>
        );
    }
}

export default Dropdown;