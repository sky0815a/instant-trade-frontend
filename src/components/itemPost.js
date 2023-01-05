import React, { useState } from 'react'
import { Link } from 'react-router-dom';

 function AddItem() {
    const BASE_URL = 'http://localhost:8080/item'
    const [newForm, setNewForm]= useState({

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
   const addLoca = async (itemData)=>{
    try {
        console.log(itemData);
        const newItem = await fetch (BASE_URL, {
            method:"POST",
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
       console.log(newForm);
        e.preventDefault()
        const newLoca= await addLoca(newForm)
       setNewForm ({
        type: "",
        cost: "",
        STR: "",
        DEX: "",
        Mana: "",
        })
      
    }
    const handleChange = (e)=>{

        const data = {...newForm, [e.target.name]: e.target.value}
        setNewForm(data)
       }
    return (
        <div>
            <h2>Add Item with Options</h2>
            <form onSubmit={handleSubmit}>
                <label for="type">Type: Ring or Amulet: </label>
                <input type="text" value={newForm.type}  name="type" onChange={handleChange} />
                <br />
                <label for="cost">Cost: </label>
                <input type="text" value={newForm.cost} name="cost" onChange={handleChange} />
                <br />
                <label for="STR">STR: </label>
                <input type="text" value={newForm.STR} name="STR" onChange={handleChange} />
                <br />
                <label for="Dex">DEX: </label>
                <input type="text" value={newForm.DEX} name="DEX" onChange={handleChange} />
                <br />
                <label for="Mana">Mana: </label>
                <input type="text" value={newForm.Mana} name="Mana" onChange={handleChange} />
                <br />
                <br /><br />
                <input type="submit" /> 
                <Link to= '/'><button>back</button></Link>
            </form>
        </div>
    )
}


export default AddItem











