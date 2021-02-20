import React, { useState, useEffect } from "react";
import style from "./css/company.module.css";
import axios from "axios";
import FoodCard from "./mini/FoodCard";
import load from "./Icon/loading1.gif"
import { useRouteMatch } from "react-router-dom";

const Company = (props) => {
  let match = useRouteMatch().params.id;
  console.log(match);
  
  const [data, setdata] = useState();
  
  useEffect(() => {
    async function getdata() {
      const res = await axios
      .get("http://localhost:8080/food/company/" + match)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
    }
    
    getdata();
  }, []);
  
  if (data == undefined) {
    return (
      <div>
        <h1 className={style.mainheading}>Home</h1>
        <div className={style.hotel}>
          <img src={load} width="50%" />
        </div>
      </div>
    );
  } else {

    console.log(data.foods);
    const li = data.foods
    return (
      <div>
        <h1 className={style.mainheading}>{data.company.name}</h1>

        <div className={style.all}>
          <div className={style.con}>
            <h3>
              <i class="gg-info"></i> Description
            </h3>

            <p>
              best Place to spend time with your friends and family they have a
              good customer services and the place is so classic so u can even
              meet
            </p>
          </div>

          <div className={style.con}>
            <h3>
              <i className="gg-pin"></i> Location
            </h3>

            <p>{data.company.address}</p>
          </div>

          <h2 className={style.menu}>Menu</h2>

          
 {/* <h4 className={style.category}>
            <i className="gg-carousel"></i>Burger
          </h4> */}

          <div className={style.hotel}>
          
            {li.map(food => 
              <FoodCard
              pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              name={food.name}
              price={food.price}
              tag1={food.tag[0]}
              tag2={food.tag[1]}
              tag3={food.tag[2]}
              tag4={food.tag[3]}
            />
              )}
            
          </div>

         
          
        </div>
      </div>
    );
  }
};

export default Company;
