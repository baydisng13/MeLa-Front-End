import React from "react";
import style from "./css/search.module.css";
import Nav from "./mini/Nav";
import Trending from "./mini/Trending";

const Search = () => {
  return (
    <div>
      <h1 className={style.mainheading}>Discover</h1>

      <form method="post" className={style.searchform}>
        <input type="search" placeholder="Search For Food" name="" id="" />
        <button type="submit">
          <i className="gg-search"></i>
        </button>
      </form>

      <div className={style.tranding}>
          
        <Trending link="/h/discount" title="Discount" />
        <Trending link="/f/<100" title="< 100 ETB" />
        <Trending link="/f/100-200" title="100 - 200 ETB" />
        <Trending link="/f/>100" title="> 200 Etb" />
        <Trending link="/t/Burger" title="Burger" />
        <Trending link="/s/Pizza" title="Pizza" />
        <Trending link="/t/Breakfast" title="Breakfast" />
        <Trending link="/t/Lunch" title="Lunch" />
        <Trending link="/t/Dinner" title="Dinner" />
        <Trending link="/t/Snack" title="Snack" />


      </div>

      <Nav />
    </div>
  );
};

export default Search;
