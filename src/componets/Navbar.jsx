import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import './CartWidget.css';

function Navbar({ itemCount, onCartClick, clearCart, cart }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My Store
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="cart-widget">
          <Link to="/cart" className="nav-link">
            <CartWidget itemCount={itemCount} onCartClick={onCartClick} onClearCart={clearCart} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

