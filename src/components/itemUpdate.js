import React, { useState } from 'react'
// import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

function UpdateItem() {
    const { id } = useParams();
    console.log(id);
    const BASE_URL = 'https://instant-trade-backend.herokuapp.com/item'
    const [updateForm, setUpdateForm] = useState({

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
    const getItem = async (fn) => {
        try {
            const response = await fetch(BASE_URL);
            const allItem = await response.json();

        } catch (err) {
            console.log(err);
        }
    };
    const updateItem = async (itemData) => {
        try {
            console.log(itemData);
            const updatedItem = await fetch(`${BASE_URL}/${id}`, {
                method: "PUT",
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
        console.log(updateForm);
        e.preventDefault()
        await updateItem(updateForm)
        setUpdateForm({
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
        const data = { ...updateForm, [e.target.name]: e.target.value }
        setUpdateForm(data)
    }
    return (
        <div className='updateItem'>
            <h2>Update Item Info</h2>
            <form onSubmit={handleSubmit}>
                <label for="Game">Game Name: </label>
                <input type="text" value={updateForm.Game} name="Game" onChange={handleChange} placeholder={updateForm.Game} />
                <br />
                <label for="PW">Game PW: </label>
                <input type="text" value={updateForm.PW} name="PW" onChange={handleChange} />
                <br />
                <label for="type">Type: Ring or Amulet: </label>
                <input type="text" value={updateForm.type} name="type" onChange={handleChange} />
                <br />
                <label for="cost">Price: </label>
                <input type="text" value={updateForm.cost} name="cost" onChange={handleChange} />
                <br />
                <label for="STR">STR: </label>
                <input type="text" value={updateForm.STR} name="STR" onChange={handleChange} />
                <br />
                <label for="Dex">DEX: </label>
                <input type="text" value={updateForm.DEX} name="DEX" onChange={handleChange} />
                <br />
                <label for="Energy">Energy: </label>
                <input type="text" value={updateForm.Energy} name="Energy" onChange={handleChange} />
                <br />
                <label for="Faster_Cast_Rate">Faster Case Rate: </label>
                <input type="text" value={updateForm.Faster_Cast_Rate} name="Faster_Cast_Rate" onChange={handleChange} />
                <br />
                <label for="All_Skill_LV">All Skill LV: </label>
                <input type="text" value={updateForm.All_Skill_LV} name="All_Skill_LV" onChange={handleChange} />
                <br />
                <br /><br />
                <input type="submit" />
                <Link to='/'><button>back</button></Link>
            </form>
        </div>
    )
}

export default UpdateItem











