import React from 'react'
import style from '../css/main.module.css'
import {Link} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={style.nav}>
            
                <Link to='/home'><i className="gg-home"></i></Link>
                <Link to="/add"><i className="gg-add"></i></Link>
                <Link to="/search"><i className="gg-search"></i></Link>
            
            </nav>
    )
}

export default Nav
