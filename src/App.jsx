import React, { useState, useEffect } from "react";
import Navbar from "./componets/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componets/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemDetailContainer from "./componets/ItemDetailContainer";
import Checkout from "./componets/Checkout";
import CategorySelection from "./componets/CategorySelection";

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  useEffect(() => {
    console.log("App: cart updated", cart);
  }, [cart]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCartClick = () => {
    setShowCheckout(!showCheckout);
  };

  return (
    <BrowserRouter>
       <Navbar cart={cart} itemCount={itemCount} onCartClick={handleCartClick} clearCart={clearCart} />
    
      <Routes>
  <Route path="/"  element={ <>
          <Navbar cart={cart} itemCount={itemCount} onCartClick={handleCartClick} clearCart={clearCart} />
        {showCheckout && <Checkout cart={cart} clearCart={clearCart} />}
        <ItemListContainer
          greeting="Welcome"
          addToCart={addToCart}
          cart={cart} />
      </> }  />
  <Route path="/category/:id" element={  <> <ItemListContainer addToCart={addToCart} cart={cart} /> </>  }/>
  <Route path="/item/:id" element={ <> <ItemDetailContainer addToCart={addToCart} /> </>   } />
  <Route path="/categoryselection" element={ <> <Navbar cart={cart} itemCount={itemCount} onCartClick={handleCartClick} clearCart={clearCart} />
     {showCheckout && <Checkout cart={cart} clearCart={clearCart} />}
       <CategorySelection onSelectCategory={handleCategorySelect} /> </> }/>
<Route path="/cart" element={<Checkout cart={cart} clearCart={clearCart} />} />
       
</Routes>

    </BrowserRouter>
  );
}

export default App;
