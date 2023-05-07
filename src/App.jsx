import React, { useState, useEffect } from "react";
import Navbar from "./componets/navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componets/ItemListContainer";
import CartWidget from "./componets/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemDetailContainer from "./componets/ItemDetailContainer";
import Checkout from "./componets/Checkout.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    console.log("App: cart updated", cart);
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleCartClick = () => {
    setShowCheckout(!showCheckout);
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} onCartClick={handleCartClick} />
      {showCheckout && <Checkout cart={cart} />}
      <Routes>
      <Route path="category" element={<ItemListContainer addToCart={addToCart} />} />
      <Route path="/category/:id" element={<ItemListContainer addToCart={addToCart} />}/>
        <Route path="/item/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
        <Route path="/" element={<CartWidget />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
