import React, { useState } from 'react'
import style from './css/login.module.css'
import {Link} from "react-router-dom";  


const Login = () => {

    const [login, setlogin] = useState({});
    
    const handleSubmit = (event) => {
        if (event) {
        event.preventDefault();
        console.log(login)
        }
    }

    const handleInputChange = (event) => {
        event.persist();
        setlogin(login => ({...login, [event.target.name]: event.target.value}));
    }

    return (
        <div>

            <h1 className={style.heading}>Login</h1>

            {/* this is where the home icon go  */}

            <a href="/home" className={style.log}>
                <i class="gg-home"></i>
            </a>


            <form onSubmit={handleSubmit}>
                <div className={style.formrow}>
                    <label for="">Email</label>
                    <input onChange={handleInputChange} value={login.email} required type="email" name="email" id=""/>
                </div>
                <div className={style.formrow}>
                    <label for="">Password</label>
                    <input onChange={handleInputChange} value={login.password} required type="password" name="password" id=""/>
                </div>
                <div className={style.formrow}>
                    <button type="submit">Login</button>
                </div>
            </form>

            <Link className={style.donthave} to="/signup">I Don't Have Account</Link>

        </div>
    )
}

export default Login
