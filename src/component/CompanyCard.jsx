import React from "react";
import style from "./css/homecard.module.css";
import { Link } from "react-router-dom";

const CompanyCard = (props) => {
  return (
    <div className={style.hotelcard}>
      <img
        src={props.pic}/>
      <div className={style.body}>
        <h3 className={style.companyname    }>{props.name}     </h3>
        <h4 className={style.companylocation}>{props.location} </h4>
      </div>
    </div>
  );
};

export default CompanyCard;
