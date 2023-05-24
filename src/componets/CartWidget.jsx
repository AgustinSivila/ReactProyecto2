import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { Link } from "react-router-dom";


function CartWidget({ itemCount, onCartClick, onClearCart }) {
  return (
    <div className="cart-widget">
      <div className="cart-icon" onClick={onCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' }} />
        <span className="cart-badge">{itemCount}</span>
      </div>
      <div className="clear-cart">
      <button onClick={onClearCart}>
  <FontAwesomeIcon icon={faTrash} />
  Clear Cart
</button>
      </div>
    </div>
  );
}

export default CartWidget;


