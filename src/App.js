import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Footer from './components/footer';
import Title from './components/title';
import Trade from './components/trade';
import ItemPost from "./components/itemPost"
import ItemID from "./components/itemID"
import ItemUpdate from "./components/itemUpdate"

function App() {
  return (
    <div className="App">
      <Title />
      <Routes>
        <Route exact path="/" element={<Trade />} />
        <Route exact path="/itemPost" element={<ItemPost />} />
        <Route exact path="/item/:id" element={<ItemID />} />
        <Route exact path="/item/:id/update" element={<ItemUpdate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;