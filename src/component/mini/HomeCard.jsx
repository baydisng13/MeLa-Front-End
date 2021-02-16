import React from "react";
import style from "../css/homecard.module.css";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
  return (
    <Link to="/c/Romina" className={style.hotelcard}>
      <img
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
      <div className={style.body}>
        <h3 className={style.companyname    }>{props.name}     </h3>
        <h4 className={style.companylocation}>{props.location} </h4>
      </div>
    </Link>
  );
};

export default HomeCard;
