import React from 'react'
import style from './css/main.module.css'
import HomeCard from './mini/HomeCard'
import Nav from "./mini/Nav";




const Home = () => {
    return (
        <div>
            
            <h1 className={style.mainheading}>Home</h1>
           

           {/* this is where the log in and the log out icons go  */}

            <a href="/login" className={style.log}>
                <i class="gg-log-in"></i>
            </a>

            <div className={style.hotel}>

                <HomeCard link="/c/kaldis" name="Kaldis Cafe" location="6 kilo" />
                <HomeCard link="/c/domina" name="Romina" location="4 kilo" />
                <HomeCard link="/c/Dink" name="Dink Dounat" location="Kebena" />
                
                
            </div>
                

            <Nav/>

        </div>
    )
}

export default Home
