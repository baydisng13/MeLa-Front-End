import React from "react";
import style from "../css/company.module.css";
import { Link } from "react-router-dom";

const FoodCard = (props) => {
  
  const a1= "/h/" + props.tag1
  const a2= "/h/" + props.tag2
  const a3= "/h/" + props.tag3
  const a4= "/h/" + props.tag4

  return (
    <div className={style.hotelcard}> 
      <img
        src={props.pic}/>
      <div className={style.body}>
        <h3 className={style.foodname    }>{props.name}     </h3>
        <h4 className={style.foodprice}>{props.price} </h4>
      </div>
      <div className={style.tag}>
        <Link to={a1}>{props.tag1}</Link>
        <Link to={a2}>{props.tag2}</Link>
        <Link to={a3}>{props.tag3}</Link>
        <Link to={a4}>{props.tag4}</Link>
      </div>
    </div>
  );
};

export default FoodCard;
