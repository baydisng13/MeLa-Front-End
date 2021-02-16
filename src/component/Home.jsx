import React from 'react'
import style from './css/main.module.css'
import HomeCard from './mini/HomeCard'
import Nav from "./mini/Nav";




const Home = () => {
    return (
        <div>
            
            <h1 className={style.mainheading}>Home</h1>


            <div className={style.hotel}>

                <HomeCard name="Kaldis Cafe" location="6 kilo" />
                <HomeCard name="Romina" location="4 kilo" />
                <HomeCard name="Dink Dounat" location="Kebena" />
                
                
            </div>
                

            <Nav/>

        </div>
    )
}

export default Home
