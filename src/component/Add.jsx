import React from "react";
import {Link} from "react-router-dom";
import main from "./css/main.module.css";
import style from "./css/add.module.css";

const Add = () => {
  return (
    <div>
      <h1 className={main.mainheading}>Add Menu</h1>

      <form action="" method="post">
        <div className={style.formrow}>
          <label for="">Category</label>
          <select type="text" name="" id="">
            <option value="">Breakfast</option>
            <option value="">Brunch</option>
            <option value="">Chicken</option>
            <option value="">Donuts</option>
            <option value="">Drinks</option>
            <option value="">Fasting</option>
            <option value="">Healthy</option>
            <option value="">Ice Cream</option>
            <option value="">Pizza</option>
            <option value="">Salads</option>
            <option value="">Sandwiches</option>
            <option value="">Vegetarian</option>
            <option value="">Other</option>
          </select>
        </div>
        <div className={style.formrow}>
          <label for="">Food Name</label>
          <input type="Text" className={style.inputapp} id="" />
        </div>
        <div className={style.formrow}>
          <label for="">Food Price</label>
          <input type="number" className={style.inputapp} id="" />
        </div>
        <div className={style.formrow}>
          <label for="">Tag</label>
          <input type="Text" className={style.inputapp} id="" />
          {/* <input type="text" value="" data-role="tagsinput" maxlength="5"></input>  */}
        </div>
        <div className={style.formrow}>
          <label for="">Food Picture</label>
          <input type="file" className={style.customfileinput} />
        </div>
        <div className={style.formrow}>
          <button type="submit">Add</button>
        </div>
      </form>

      {/* this is the nav */}
      <nav className={style.nav}>
        <Link to="/home">
          <i className="gg-home"></i>
        </Link>
        <Link to="/add">
          <i className="gg-add"></i>
        </Link>
        <Link to="/search">
          <i className="gg-search"></i>
        </Link>
      </nav>
    </div>
  );
};

export default Add;
