import React from 'react'
import { Link } from "react-router-dom";
import style from "../css/search.module.css";

const Trending = (props) => {
    return (
        <div className={style.treandingcon}>
          <i class="gg-awards"></i> 
          <Link to={props.link}> {props.title} </Link>
        </div>
    )
}

export default Trending
