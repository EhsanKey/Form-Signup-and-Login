import React from 'react';
import "./Signup.css";


const Input = (label, type , name, value, changeHandler, error, focusHandler, classInput) => {
    if (type === "checkbox") {
        return (
            <div className="formField">
                <div className='checkBoxContainer'>
                    <label>{label}</label>
                    <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={changeHandler}
                    onFocus={focusHandler}
                    className={classInput}/> 
            </div> 
            {error && <span>{error}</span>}
        </div>
        )
    } else {
        return (
            <div className='formField'>
                <label>{label}</label>
                <input
                type={type}
                name={name}
                value={value}
                onChange={changeHandler}
                onFocus={focusHandler}
                className={classInput}/> 
            {error && <span>{error}</span>}
            </div> 
        )
    }
};

export default Input;



 