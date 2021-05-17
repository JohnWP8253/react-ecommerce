import React, { useState } from 'react';
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'


function Login() {
    return (
        <div classname="login">
            <Link to='/'>
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>
        </div>
    )
}

export default Login
