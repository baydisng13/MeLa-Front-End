import React, {useState} from "react";
import style from "./css/search.module.css";
import Nav from "./mini/Nav";
import Trending from "./mini/Trending";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";

const Search = ( props ) => {

   const [name , setname ] = useState()

   const send = event =>{
    event.preventDefault();
    let link =  "/name/" + name
    props.history.push(link);
  }
  
  return (
    <div>
      <h1 className={style.mainheading}>Discover</h1>

      <form onSubmit={send} className={style.searchform}>
        <input onChange={ event =>{
            const { value } = event.target;
            setname(value)
          }} type="search" placeholder="Search For Food" name="" id="" />
        <button type="submit">
          <i className="gg-search"></i>
        </button>
      </form>

      <div className={style.tranding}>
          
        <Trending search="" link="/tag/discount" title="Discount" />
        <Trending search="?from=1&upto=100" link="/range/" title="< 100 ETB" />
        <Trending search="?from=100&upto=200" link="/range/" title="100 - 200 ETB" />
        <Trending search="?from=200&upto=2000" link="/range/" title="> 200 Etb" />
        <Trending search="" link="/tag/burger" title="Burger" />
        <Trending search="" link="/tag/Pizza" title="Pizza" />
        <Trending search="" link="/tag/Breakfast" title="Breakfast" />
        <Trending search="" link="/tag/Lunch" title="Lunch" />
        <Trending search="" link="/tag/Dinner" title="Dinner" />
        <Trending search="" link="/tag/Snack" title="Snack" />


      </div>

      <Nav />
    </div>
  );
};

export default Search;
