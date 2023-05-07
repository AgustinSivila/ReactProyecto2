import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';



function CartWidget({ itemCount, onCartClick }) {
  return (
    <div className="cart-widget" onClick={onCartClick}>
      <FontAwesomeIcon icon={faShoppingCart} style={{ color: "white" }} />
      <span className="badge">{itemCount}</span>
    </div>
  );
}

export default CartWidget;