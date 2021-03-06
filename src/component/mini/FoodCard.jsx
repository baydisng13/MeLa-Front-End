import React from "react";
import style from "../css/company.module.css";
import { Link } from "react-router-dom";

const FoodCard = (props) => {
  
  

  return (
    <div className={style.hotelcard}> 
      <img
        src={props.pic}/>
      <div className={style.body}>
        <h3 className={style.foodname    }>{props.name}     </h3>
        <h4 className={style.foodprice}>{props.price} </h4>
      </div>
      <div className={style.tag}>
        <Link to={"/tag/" + props.tag1}>{props.tag1}</Link>
        <Link to={"/tag/" + props.tag2}>{props.tag2}</Link>
        <Link to={"/tag/" + props.tag3}>{props.tag3}</Link>
        <Link to={"/tag/" + props.tag4}>{props.tag4}</Link>
      </div>
    </div>
  );
};

export default FoodCard;
