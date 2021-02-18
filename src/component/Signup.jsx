import React, {useState} from 'react'
import style from './css/signup.module.css'
import {Link} from "react-router-dom";

const Signup = () => {

    const [signup, setsignup] = useState({});
    
    const handleSubmit = (event) => {
        if (event) {
        event.preventDefault();
        console.log(signup)
        }
    }

    const handleInputChange = (event) => {
        event.persist();
        setsignup(signup => ({...signup, [event.target.name]: event.target.value}));
    }

    return (
        <div>

            <h1 className={style.heading}>Sign up</h1>


            {/* this is where the home icon go  */}

            <a href="/home" className={style.log}>
                <i class="gg-home"></i>
            </a>

            
            <form onSubmit={handleSubmit}>
                <div className={style.formrow}>
                    <label for="">Company Name</label>
                    <input onChange={handleInputChange} value={signup.name} type="text" required name="name" id=""/>
                </div>
                <div className={style.formrow}>
                    <label for="">Email</label>
                    <input onChange={handleInputChange} value={signup.email} type="email" required name="email" id=""/>
                </div>
                <div className={style.formrow}>
                    <label for="">Password</label>
                    <input onChange={handleInputChange} value={signup.password} type="password" required name="password" id=""/>
                </div>
                <div className={style.formrow}>
                    <label for="">Confirm Password</label>
                    <input onChange={handleInputChange} value={signup.confirmPassword} type="password" required name="confirmPassword" id=""/>
                </div>
                <div className={style.formrow}>
                    <button type="submit">Sign Up</button>
                </div>
            </form>

            <Link className={style.donthave} to="/login">I Have Account</Link>

        </div>
    )
}

export default Signup
