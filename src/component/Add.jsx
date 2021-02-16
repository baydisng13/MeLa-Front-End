import React from "react";
import {Link} from "react-router-dom";
import main from "./css/main.module.css";
import style from "./css/add.module.css";
import Nav from "./mini/Nav";

const Add = () => {
  return (
    <div>
      <h1 className={main.mainheading}>Add Menu</h1>

      <form action="" method="post">
        <div className={style.formrow}>
          <label for="">Category</label>
          <select placeholder="choose the type of fooo" type="text" name="" required id="">
            <option value="" required>Choose The Type</option>
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
          <input type="Text" required className={style.inputapp} name="name" />
        </div>
        <div className={style.formrow}>
          <label for="">Food Price</label>
          <input type="number" required className={style.inputapp} name="price" />
        </div>
        <div className={style.formrow}>
          <label for="">Tag</label>
          <input type="Text" required className={style.inputapp} name="tag" />
          {/* <input type="text" value="" data-role="tagsinput" maxlength="5"></input>  */}
        </div>
        <div className={style.formrow}>
          <label for="">Food Picture</label>
          <input type="file" required className={style.customfileinput} name='Picture' />
        </div>
        <div className={style.formrow}>
          <button type="submit">Add</button>
        </div>
      </form>

      <Nav/>
    </div>
  );
};

export default Add;
