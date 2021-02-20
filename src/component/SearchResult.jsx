import React, { useState, useEffect } from "react";
import style from "./css/SearchResult.module.css";
import { useRouteMatch } from "react-router-dom";
import SearchCard from "./mini/SearchCard";
import load from "./Icon/loading1.gif";
import axios from "axios";
import { Link } from "react-router-dom";


const SearchResult = (props) => {
  let key = useRouteMatch().url;
  let keyword = useRouteMatch().params.keyword;

  const [data, setdata] = useState();

  useEffect(() => {
    async function getdata() {
      const res = await axios
        .get("http://localhost:8080/food/" + key)
        .then((res) => setdata(res.data))
        .catch((err) => console.log(err));
    }

    getdata();
  }, []);

  if (data == undefined) {
    return (
      <div>
        <h1 className={style.mainheading}>{keyword}</h1>
        <div className={style.hotel}>
          <img src={load} width="50%" />
        </div>
      </div>
    );
  }else if (data.foods[0] == undefined ) {
    return (
    <div>
        <h1 className={style.mainheading}>Oops</h1>
        <div className={style.hotel}>
          <Link to="/"> <h4 > No Result For {keyword}. Back to Home</h4></Link>
        </div>
      </div>
    )
  } else {
      console.log(data.foods);
      const li = data.foods

    return (
      <div>
        <h1 className={style.mainheading}>{keyword}</h1>

        <div className={style.hotel}>

          {li.map(food => 
          
          <SearchCard
            pic="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name={food.name}
            price={food.price }
            companyname={food.company_name }
            companylocation={food.company_address }
          /> )}

       

        </div>
      </div>
    );
  }
};

export default SearchResult;
