import React, {useState} from "react";
import {Link} from "react-router-dom";
import main from "./css/main.module.css";
import style from "./css/add.module.css";
import Nav from "./mini/Nav";
import axios from 'axios';


const Add = () => {

  // const [newFoods, setnewFoods] = useState({});
  
  // const handleSubmit = (event) => {
  //   if (event) {
  //     event.preventDefault();

  //     const baseimg = btoa(newFoods.picture)

  //     axios.post(`http://`, { newFoods })
  //     .then(res => {
    //       console.log(res);
    //       console.log(res.data);
    //     })
  //     console.log(baseimg)
  //   }
  // }

  // const handleInputChange = (event) => {
    //   event.persist();
  //   setnewFoods(newFoods => ({...newFoods, [event.target.name]: event.target.value}));
  // }
  
  
  const [type , settype ] = useState()
  const [name , setname ] = useState()
  const [price , setprice ] = useState()
  const [tag , settag ] = useState()
  const [img, setImg] = useState()

  const send = event =>{
    event.preventDefault();
    const data = new FormData();
    data.append('type' , type)
    data.append('name' , name)
    data.append('price' , price)
    data.append('tag' , tag)
    data.append('img' , img)
    
    console.log("***************")
    console.log(data)
    console.log("***************")
    console.log(type)
    console.log(name)
    console.log(price)
    console.log(tag)

    console.log(img)
        axios.post(`https://httpbin.org/anything`, data )
        .then(res =>console.log(res))
        .catch(err => console.log(err))
  }
  

  return (
    <div>
      <h1 className={main.mainheading}>Add Menu</h1>

      <form  
      onSubmit={send} 
      >
        <div className={style.formrow}>
          <label for="">Category</label>
          <select defaultValue="Breakfast"  onChange={ event =>{
            const { value } = event.target
            settype(value)
          }} type="text" name="type"  required id="">
            <option value="Breakfast">Breakfast</option>
            
            <option value="Brunch">Brunch</option>
            <option value="Chicken">Chicken</option>
            <option value="Donuts">Donuts</option>
            <option value="Drinks">Drinks</option>
            <option value="Fasting">Fasting</option>
            <option value="Healthy">Healthy</option>
            <option value="Ice Cream">Ice Cream</option>
            <option value="Pizza">Pizza</option>
            <option value="Salads">Salads</option>
            <option value="Sandwiches">Sandwiches</option>
            <option value="Vegetarian">Vegetarian</option>
            <option defaultValue value="Other">Other</option>
          </select>
        </div>
        <div className={style.formrow}>
          <label for="">Food Name</label>
          <input type="Text" onChange={ event =>{
            const { value } = event.target;
            setname(value)
          }}  required className={style.inputapp} name="name" />
        </div>
        <div className={style.formrow}>
          <label for="">Food Price</label>
          <input type="number" onChange={ event =>{
            const { value } = event.target;
            setprice(value)
          }}  required className={style.inputapp} name="price" />
        </div>
        <div className={style.formrow}>
          <label for="">Tag</label>
          <input type="Text" onChange={ event =>{
            const { value } = event.target;
            settag(value.split(' '))
          }} required className={style.inputapp} name="tag" />
          {/* <input type="text" value="" data-role="tagsinput" maxlength="5"></input>  */}
        </div>
        <div className={style.formrow}>
          <label for="">Food Picture</label>
          <input type="file" 
            onChange={ event =>{
            const file = event.target.files[0]
            setImg(file)
          }}  required className={style.customfileinput} name='picture' />
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
