import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AddItem() {
    const BASE_URL = 'https://instant-trade-backend.herokuapp.com/item'
    const [newForm, setNewForm] = useState({

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
    const addLoca = async (itemData) => {
        try {
            console.log(itemData);
            const newItem = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(itemData)
            })
            getItem()
        } catch (err) {
            console.log(err)
        }
    }
    const handleSubmit = async (e) => {
        console.log(newForm);
        e.preventDefault()
        const newLoca = await addLoca(newForm)
        setNewForm({
            Game: "",
            PW: "",
            type: "",
            cost: "",
            STR: "",
            DEX: "",
            Vital: "",
            Energy: "",
            Faster_Cast_Rate: "",
            All_Skill_LV: "",
        })

    }
    const handleChange = (e) => {

        const data = { ...newForm, [e.target.name]: e.target.value }
        setNewForm(data)
    }
    return (
        <div>
            <h2>Add Item with Options</h2>
            <form onSubmit={handleSubmit}>
                <label for="Game">Game Name: </label>
                <input type="text" value={newForm.Game} name="Game" onChange={handleChange} />
                <br />
                <label for="PW">Game PW: </label>
                <input type="text" value={newForm.PW} name="PW" onChange={handleChange} />
                <br />
                <label for="type">Type: Ring or Amulet: </label>
                <input type="text" value={newForm.type} name="type" onChange={handleChange} />
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
                <label for="Energy">Energy: </label>
                <input type="text" value={newForm.Energy} name="Energy" onChange={handleChange} />
                <br />
                <label for="Faster_Cast_Rate">Faster Case Rate: </label>
                <input type="text" value={newForm.Faster_Cast_Rate} name="Faster_Cast_Rate" onChange={handleChange} />
                <br />
                <label for="All_Skill_LV">All Skill LV: </label>
                <input type="text" value={newForm.All_Skill_LV} name="All_Skill_LV" onChange={handleChange} />
                <br />
                <br /><br />
                <input type="submit" />
                <Link to='/'><button>back</button></Link>
            </form>
        </div>
    )
}


export default AddItem











