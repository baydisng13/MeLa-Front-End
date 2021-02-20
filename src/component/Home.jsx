import React, { useEffect, useState } from "react";
import style from "./css/main.module.css";
import HomeCard from "./mini/HomeCard";
import Nav from "./mini/Nav";
import axios from "axios";
import load from "./Icon/loading1.gif"

const Home = () => {
  const [list, setlist] = useState();

  useEffect(() => {
    async function getlist() {
      const res = await axios
        .get("http://localhost:8080/company")
        .then((res) => setlist(res.data))
        .catch((err) => console.log(err));
    }

    getlist();
  }, []);

  if (list == undefined) {
      return(
        <div>
        <h1 className={style.mainheading}>Home</h1>
        <div className={style.hotel}>
        <img src={load} width="50%" />
        </div>
        </div>
        );
    } else {
      
        const li = list.compnaies
        // li.map(name => console.log(name))
    return (
      <div>
        <h1 className={style.mainheading}>Home</h1>

        {/* this is where the log in and the log out icons go  */}

        <a href="/login" className={style.log}>
          <i class="gg-log-in"></i>
        </a>

        <div className={style.hotel}>
          {console.log("**********0****")}
          {/* {li.map(name => <h2>{name}</h2>)} */}
          {li.map(name => <HomeCard link={"/c/" + name._id} name={name.name} location={name.address} /> )}
          
        </div>

        <Nav />
      </div>
    );
  }
};

export default Home;
