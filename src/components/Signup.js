import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import { Validate } from './Validate';
import "./Signup.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastify } from './toastify';


const Signup = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confrimPassword: "",
        isAccepted: false

    });

    const [errors, setErrors] = useState({})
    const [focus, setFocus] = useState({})

    useEffect(() => {
        setErrors(Validate(data, "Signup"))
    }, [errors])

    // console.log(errors);

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({...data, [event.target.name] : event.target.checked})
        } else {
            setData({...data, [event.target.name] : event.target.value})
        }
    }

    const focusHandler = event => {
        setFocus({...focus, [event.target.name] : true})
    }

    const submitHandler = event => {
        event.preventDefault()
        if (!Object.keys(errors).length) {
            toastify("you signed in successfull", "success")
        } else {
            toastify("Invalid data")
        }
    }

    return (
        <div className="Container">
            <form onSubmit={submitHandler} className={"formContainer"}>
                <h1 className="Header">Signup</h1>
                {Input("Name",
                 "text",
                 "name",
                 data.name,
                 changeHandler,
                 errors.name && focus.name && errors.name ,
                 focusHandler,
                 errors.name && focus.name ? "uncompleted" : "formInput")}
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
                {Input("ConfrimPassword",
                 "password",
                 "confrimPassword",
                 data.confrimPassword,
                 changeHandler,
                 errors.confrimPassword && focus.confrimPassword && errors.confrimPassword,
                 focusHandler,
                 errors.confrimPassword && focus.confrimPassword ? "uncompleted" : "formInput")}
                {Input("I accet terms of privacy policy",
                 "checkbox",
                 "isAccepted",
                 data.isAccepted,
                 changeHandler,
                 errors.isAccepted && focus.isAccepted && errors.isAccepted,
                 focusHandler,
                 errors.isAccepted && focus.isAccepted ? "uncompleted" : "formInput")}
                <div className='formButtons'>
                    <Link to='/login'>Login</Link>
                    <button type="submit">Signup</button>
                </div>
            </form>
            <ToastContainer /> 
        </div>
    );
};

export default Signup;