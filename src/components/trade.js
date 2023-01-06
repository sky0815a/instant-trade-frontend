import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";



export default function Trade() {
    const [trade, setTrade] = useState([]); 
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        const getAllItems = async () => {
            try {
                const url = 'https://instant-trade-backend.herokuapp.com/item'
                const { data } = await axios.get(url);
                setTrade( data )
            } catch(err) {
                console.log(err);
            }
        }
        getAllItems();
    },[]);

    return (
        <div>
            <div className="search">
                <input
                    type="text"
                    placeholder="Ring or Amulet"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <div className="button">
                    <Link to = '/itemPost'> <button type="button" className="btn btn-warning">Add Item</button> </Link>
                </div>
            </div>
            <div class="main">
                {trade.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.type.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val
                    }
                }).map((element) => {
                    return( 
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div>Type: {element.type}</div>
                                </div>
                                <div class="col">
                                    <div>Price: {element.cost}</div>
                                </div>
                                <div class="col">
                                    <div>Game: {element.Game}</div>
                                </div>
                                <div class="col">
                                    <div>PW: {element.PW}</div>
                                </div>
                            </div>
                            <div class="row">
                                <div>STR: {element.STR}</div>
                                <div>DEX: {element.DEX}</div>
                                <div>Vital: {element.Vital}</div>
                                <div>Energy: {element.Energy}</div>
                                <div>Faster Cast Rate: {element.Faster_Cast_Rate}</div>
                                <div>All Skill LV: {element.All_Skill_LV}</div>
                            </div>
                            <Link to = {`item/${element._id}`}><button type="button" className="btn btn-outline-warning">View Item</button>
                            <div>{element.item}</div></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}