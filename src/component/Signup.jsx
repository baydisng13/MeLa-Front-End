import React, {useState} from 'react'
import style from './css/signup.module.css'
import {Link} from "react-router-dom";
import axios from 'axios' 

const Signup = () => {

    const [signup, setsignup] = useState({});
    
    const handleSubmit = (event) => {
        if (event) {
        event.preventDefault();
        console.log(signup)
        axios.post(`http://localhost:8080/company`, signup )
        .then(res =>console.log(res))
        .catch(err => console.log(err))
        
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
                    <label for="">Location</label>
                    <input onChange={handleInputChange} value={signup.location} type="text" required name="location" id=""/>
                </div>
                <div className={style.formrow}>
                    <label for="">Category</label>
                    <select defaultValue="restaurant" onChange={handleInputChange} value={signup.category} type="text" required name="location" id="">
                        <option value="cafe">Cafe</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="bar">Bar</option>
                        <option value="cafe & restaurant">Cafe & Restaurant</option>
                        <option value="bar & restaurant">Bar & Restaurant</option>
                    </select>
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
