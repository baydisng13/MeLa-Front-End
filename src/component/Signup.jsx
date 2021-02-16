import React from 'react'
import style from './css/signup.module.css'
import {Link} from "react-router-dom";

const Signup = () => {
    return (
        <div>

            <h1 className={style.heading}>Sign up</h1>

            <form action="" method="post">
                <div className={style.formrow}>
                    <label for="">Company Name</label>
                    <input type="text" name="" id=""/>
                </div>
                <div className={style.formrow}>
                    <label for="">Email</label>
                    <input type="email" name="" id=""/>
                </div>
                <div className={style.formrow}>
                    <label for="">Password</label>
                    <input type="password" name="" id=""/>
                </div>
                <div className={style.formrow}>
                    <label for="">Confirm Password</label>
                    <input type="password" name="" id=""/>
                </div>
                <div className={style.formrow}>
                    <button>Sign Up</button>
                </div>
            </form>

            <Link className={style.donthave} to="/login">I Have Account</Link>

        </div>
    )
}

export default Signup
