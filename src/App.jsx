import React from 'react';
import Navbar from './componets/navbar'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ItemListContainer from './componets/ItemListContainer';
import CartWidget from './componets/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ItemDetailContainer from './componets/ItemDetailContainer';





function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Navbar />} />
     <Route path='/category/:id' element={<ItemListContainer />} />
     <Route path='/item/:id' element={<ItemDetailContainer />} />
  
</Routes>

    </BrowserRouter>
  );
}

export default App;
