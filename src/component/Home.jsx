import React from 'react'
import style from './css/main.module.css'
import {Link} from "react-router-dom";
import HomeCard from './HomeCard'




const Home = () => {
    return (
        <div>
            
            <h1 className={style.mainheading}>Home</h1>


            <div className={style.hotel}>

                <HomeCard name="Kaldis" location="6 kilo" />
                <HomeCard name="Romina" location="4 kilo" />
                <HomeCard name="Dink Dounat" location="Kebena" />
                
                
            </div>
                

            {/* this is the nav */}
            <nav className={style.nav}>
            
                <Link to='/home'><i className="gg-home"></i></Link>
                <Link to="/login"><i className="gg-add"></i></Link>
                <Link to="/search"><i className="gg-search"></i></Link>
            
            </nav>


        </div>
    )
}

export default Home
