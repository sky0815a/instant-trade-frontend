import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Trade() {
    const [trade, setTrade] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8080/item')
          .then((response) => response.data)
          .then((response) => {
            console.log(response)
            setTrade(response) 
          })
    }, []);

    return (
        <div>
            <div className="button">
                <Link to = '/itemPost'> <button> Add Item </button> </Link>
            </div>
            <div className="main">
                {trade.map((element) => {
                    return( 
                        <div className="container">
                            <div>Game: {element.Game}</div>
                            <div>PW: {element.PW}</div>
                            <div>Type: {element.type}</div>
                            <div>Price: {element.cost}</div>
                            <div>STR: {element.STR}</div>
                            <div>DEX: {element.DEX}</div>
                            <div>Vital: {element.Vital}</div>
                            <div>Energy: {element.Energy}</div>
                            <div>Faster Cast Rate: {element.Faster_Cast_Rate}</div>
                            <div>All Skill LV: {element.All_Skill_LV}</div>
                            <Link to = {`item/${element._id}`}><button> View Item </button>
                            <div>{element.item}</div></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )

    

    // return (
    //     <div>
    //         <div className="button">
    //             <Link to = '/itemPost'> <button> Add Item </button> </Link>
    //         </div>
    //         <div className="main">
    //             {trade.map((element) => {
    //                 return( 
    //                     <div className="container">
    //                         <Link to = {`item/${element._id}`}><img src={element.images}/>
    //                         <div>{element.item}</div></Link>
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     </div>
    // )
}