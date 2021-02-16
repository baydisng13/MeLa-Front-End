import React from 'react'
import {Link} from "react-router-dom";
import main from "./css/main.module.css";
import style from "./css/search.module.css";

const Search = () => {
    return (
        <div>
             <h1 className={style.mainheading}>Search</h1>


             <form method="post" className="searchform">
                 <input type="search" placeholder="searchSearch" name="" id=""/>
                 <button type="submit"> </button>
             </form>


        </div>
    )
}

export default Search
