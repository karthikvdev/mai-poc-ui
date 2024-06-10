import React from 'react';
import "./style.scss";

const Button = (props) => {
    const { name, ...buttonProps } = props;
    return (
        <div className='button-container'>
            <button {...buttonProps}> {name}</button>
        </div>
    );
};

export default Button;
