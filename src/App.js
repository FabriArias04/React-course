import React, { BrowserRouter, Routes, Route } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryName' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;