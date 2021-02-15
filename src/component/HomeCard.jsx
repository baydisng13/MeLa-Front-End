import React from 'react'
import style from './css/homecard.module.css'

const HomeCard = (props) => {
    return (
        <div className={style.hotelcard}>
                    <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <h3 className={style.companyname}>{props.name} </h3>
                    <h5 className={style.companylocation}>{props.location} </h5>  
                </div>
    )
}

export default HomeCard
