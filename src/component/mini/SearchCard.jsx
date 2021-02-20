import React from "react";
import style from "../css/SearchResult.module.css";
import { Link } from "react-router-dom";

const FoodCard = (props) => {
  return (
    <div className={style.hotelcard}> 
      <img
        src={props.pic}/>
      <div className={style.body}>
        <h3 className={style.foodname}>{props.name}     </h3>
        <h4 className={style.foodprice}>{props.price} </h4>
      </div>
      <div className={style.subinfo}>
        <h4 className={style.companyname}>{props.companyname} </h4>
        <h5 className={style.companyname}>{props.companylocation} </h5>
        
      </div>
    </div>
  );
};

export default FoodCard;
