import React from "react";
import style from "../css/company.module.css";
import { Link } from "react-router-dom";

const FoodCard = (props) => {
  return (
    <div className={style.hotelcard}> 
      <img
        src={props.pic}/>
      <div className={style.body}>
        <h3 className={style.companyname    }>{props.name}     </h3>
        <h4 className={style.companylocation}>{props.location} </h4>
      </div>
      <div className={style.tag}>
        <span>{props.tag1}</span>
        <span>{props.tag2}</span>
        <span>{props.tag3}</span>
        <span>{props.tag4}</span>
      </div>
    </div>
  );
};

export default FoodCard;
