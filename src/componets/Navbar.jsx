import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          AC/DC Store
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/category/1">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <CartWidget />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/item/:id">
                Item
                
              </Link>
           
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
