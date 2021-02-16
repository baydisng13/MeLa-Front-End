import React from 'react'
import style from './css/login.module.css'
import {Link} from "react-router-dom";
const Login = () => {
    return (
        <div>

            <h1 className={style.heading}>Login</h1>

            <form action="" method="post">
                <div className={style.formrow}>
                    <label for="">Email</label>
                    <input required type="email" name="" id=""/>
                </div>
                <div className={style.formrow}>
                    <label for="">Password</label>
                    <input required type="password" name="" id=""/>
                </div>
                <div className={style.formrow}>
                    <button>Login</button>
                </div>
            </form>

            <Link className={style.donthave} to="/signup">I Don't Have Account</Link>

        </div>
    )
}

export default Login
