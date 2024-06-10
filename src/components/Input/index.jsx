import React from 'react';
import "./style.scss";

const Input = (props) => {
    const { error, ...inputProps } = props;
    return (
        <div className='input-container'>
            <input
            className='input'
                {...inputProps}
            />
            {error && <span className='error'>{error}</span>}
        </div>
    );
};

export default Input;
