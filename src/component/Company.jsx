import React from "react";
import main from "./css/main.module.css";
import style from "./css/company.module.css";

import FoodCard from "./mini/FoodCard";

const Company = (props) => {
  return (
    <div>
      <h1 className={style.mainheading}>Romina</h1>

      <div className={style.all}>
        <div className={style.con}>
          <h3>
            <i class="gg-info"></i> Description
          </h3>
          <p>
            best café to spend time with your friends and family they have a
            good customer services and the place is so classic so u can even
            meet
          </p>
        </div>

        <div className={style.con}>
          <h3>
            <i className="gg-pin"></i> Location
          </h3>

          <p>4 Killo</p>
        </div>

        <h2 className={style.menu}>Menu</h2>

        <h4 className={style.category}>
          <i className="gg-carousel"></i>Starter
        </h4>

        <div className={style.hotel}>
          <FoodCard
            pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Burger"
            location="99.99 etb"
            tag3="Burger"
            tag2="Fast_Food"
            tag1="Discount"
            tag4="Snack"
          />
          <FoodCard
            pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Burger"
            location="99.99 etb"
            tag4="Burger"
            tag2="Fast_Food"
            tag3="Discount"
            tag1="Snack"
          />
        </div>

        <h4 className={style.category}>
          <i className="gg-carousel"></i>Burger
        </h4>

        <div className={style.hotel}>
        <FoodCard
            pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Burger"
            location="99.99 etb"
            tag1="Burger"
            tag3="Fast_Food"
            tag2="Discount"
            tag4="Snack"
          />
          <FoodCard
            pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Burger"
            location="99.99 etb"
            tag1="Burger"
            tag2="Fast_Food"
            tag3="Discount"
            tag4="Snack"
          />
          <FoodCard
            pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Burger"
            location="99.99 etb"
            tag2="Burger"
            tag1="Fast_Food"
            tag3="Discount"
            tag4="Snack"
          />
          <FoodCard
            pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Burger"
            location="99.99 etb"
            tag1="Burger"
            tag2="Fast_Food"
            tag4="Discount"
            tag3="Snack"  
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
