import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import itemUpdate from "./itemUpdate"

export default function ItemID(props) {
  const { id } = useParams();
  const [ItemID, setItemID] = useState([]);
  const URL = `http://localhost:8080/item/${id}`;
  const getItem = async () => {
    try {
      const response = await fetch(URL);
      const itemData = await response.json();
      setItemID(itemData);
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();

  const updateItem = async () => {
    console.log('update button being hit updateItem() ItemID.js ')
    try {
      const options = {
        method: "PUT",
      };

      const response = await fetch(URL, options);
      const updatedItem = await response.json();

      navigate(`/item/${id}/update`);
    } catch (err) {
      navigate(URL);
    }
  };

  const removeItem = async () => {
    try {
      const options = {
        method: "DELETE",
      };

      const response = await fetch(URL, options);
      const deletedItem = await response.json();

      navigate("/");
    } catch (err) {
      navigate(URL);
    }
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      <div className="container">
        <div>Type: {ItemID.type}</div>
        <div>Price: {ItemID.cost}</div>
        <div>STR: {ItemID.STR}</div>
        <div>DEX: {ItemID.DEX}</div>
        <div>Mana: {ItemID.Mana}</div>
        <div>
          <button className="delete" onClick={removeItem}>
            Remove Item
          </button>
          <Link to="/item/`${id}`/update"> 
          <button className="update" onClick={updateItem}>
            Update Item
          </button>
          </Link>
          <Link to="/">
            <button>back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
