import React from "react";

const Input = ({name, label, value, error, type, onChange}) => {
    return (
        <div className="form-group">
            <div>
                <label htmlFor={name}>{label}</label>
                <input
                    value={value}
                    onChange={onChange}
                    id={name}
                    name={name}
                    type={type}
                    className="form-control"
                />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

export default Input;
