import React, {Suspense, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import { Validate } from './Validate';
import "./Signup.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastify } from './toastify';


const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({})
    const [focus, setFocus] = useState({})

    useEffect(() => {
        setErrors(Validate(data))
    }, [errors])


    const changeHandler = event => {
            setData({...data, [event.target.name] : event.target.value})
    }

    const focusHandler = event => {
        setFocus({...focus, [event.target.name] : true})
    }

    const submitHandler = event => {
        event.preventDefault()
        if (!Object.keys(errors).length) {
            toastify("You've logged in", "success")
        } else {
            toastify("Invalid data")
        }
    }

    return (
        <div className="Container">
            <form onSubmit={submitHandler} className={"formContainer"}>
                <h1 className="Header">Login</h1>
                {Input("Email",
                 "text",
                 "email",
                 data.email,
                 changeHandler,
                 errors.email && focus.email && errors.email,
                 focusHandler,
                 errors.email && focus.email ? "uncompleted" : "formInput")}
                {Input("Password",
                 "password",
                 "password",
                 data.password,
                 changeHandler,
                 errors.password && focus.password && errors.password,
                 focusHandler,
                 errors.password && focus.password ? "uncompleted" : "formInput")}
                <div className='formButtons'>
                    <Link to='/signup'>Signup</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer /> 
        </div>
    );
};

export default Login;