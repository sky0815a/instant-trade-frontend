import React, { useState } from 'react'
// import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

 function UpdateItem() {
    const  { id } = useParams();
    console.log(id);
    const BASE_URL = 'http://localhost:8080/item'
    const [updateForm, setUpdateForm]= useState({

    type: "",
    cost: "",
    STR: "",
    DEX: "",
    Mana: "",

   })
   const getItem = async (fn) => {
    try {
        const response = await fetch(BASE_URL);
        const allItem = await response.json();

    } catch (err) {
        console.log(err);
    }
};
   const updateItem = async (itemData)=>{
    try {
        console.log(itemData);
        const updatedItem = await fetch (`${BASE_URL}/${id}`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(itemData)
        })
        getItem()
    }catch(err){
        console.log(err)
    }
   }
    const handleSubmit = async (e) => {
       console.log(updateForm);
        e.preventDefault()
       await updateItem(updateForm)
       setUpdateForm ({
        type: "",
        cost: "",
        STR: "",
        DEX: "",
        Mana: "",
        })
      
    }
    const handleChange = (e)=>{
        const data = {...updateForm, [e.target.name]: e.target.value}
        setUpdateForm(data)
       }
    return (
        <div>
            <h2>Update Item Info</h2>
            <form onSubmit={handleSubmit}>
                <label for="type">Type: Ring or Amulet: </label>
                <input type="text" value={updateForm.type}  name="type" onChange={handleChange} />
                <br />
                <label for="cost">Cost: </label>
                <input type="text" value={updateForm.cost} name="cost" onChange={handleChange} />
                <br />
                <label for="STR">STR: </label>
                <input type="text" value={updateForm.STR} name="STR" onChange={handleChange} />
                <br />
                <label for="Dex">DEX: </label>
                <input type="text" value={updateForm.DEX} name="DEX" onChange={handleChange} />
                <br />
                <label for="Mana">Mana: </label>
                <input type="text" value={updateForm.Mana} name="Mana" onChange={handleChange} />
                <br />
                <br /><br />
                <input type="submit" /> 
                <Link to= '/'><button>back</button></Link>
            </form>
        </div>
    )
}


export default UpdateItem











