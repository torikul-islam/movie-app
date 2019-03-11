import React from 'react';

const TextArea = ({name, value, label, onChange, error}) => {
    return (
        <div className="form-group">
            <div>
                <label htmlFor={name}>{label}</label>
                <textarea
                    className="form-control"
                    id={name}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

export default TextArea;