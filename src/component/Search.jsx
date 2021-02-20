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
          
        <Trending link="/tag/discount" title="Discount" />
        <Trending link="/range/?from=1&upto=100" title="< 100 ETB" />
        <Trending link="/range/?from=100&upto=200" title="100 - 200 ETB" />
        <Trending link="/range/?from=200&upto=1000" title="> 200 Etb" />
        <Trending link="/tag/burger" title="Burger" />
        <Trending link="/tag/Pizza" title="Pizza" />
        <Trending link="/tag/Breakfast" title="Breakfast" />
        <Trending link="/tag/Lunch" title="Lunch" />
        <Trending link="/tag/Dinner" title="Dinner" />
        <Trending link="/tag/Snack" title="Snack" />


      </div>

      <Nav />
    </div>
  );
};

export default Search;
