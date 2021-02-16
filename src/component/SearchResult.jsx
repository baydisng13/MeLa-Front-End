import React from "react";
import style from "./css/SearchResult.module.css";

import SearchCard from "./mini/SearchCard";

const SearchResult = (props) => {
  
  return (
    <div>
      
      <h1 className={style.mainheading}>Romina</h1>

        <div className={style.hotel}>
   
          <SearchCard
            pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Burger"
            price="99.99 etb"
            companyname="Romina"
          />

          <SearchCard
            pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Burger"
            price="99.99 etb"
            companyname="Kaldis Cafe"
          />
          
          <SearchCard
            pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Burger"
            price="99.99 etb"
            companyname="Romina"
          />
          
          <SearchCard
            pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Burger"
            price="99.99 etb"
            companyname="Dink Donaut"
          />
        
        </div>
    
    </div>
  );
};

export default SearchResult;
