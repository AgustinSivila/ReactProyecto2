import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useNavigate } from 'react-router-dom';


function Navbar({ cart, onCartClick }) {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="category">
         Productos
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to="category"> Home </Link>

            </li>
           
          </ul>
        </div>
        <CartWidget itemCount={itemCount} onCartClick={onCartClick} />
      </div>
    </nav>
  );
}

export default Navbar;
