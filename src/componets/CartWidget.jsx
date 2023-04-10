import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



function CartWidget() {
  return (
    
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="badge">3</span>
    </div>
  );
}

export default CartWidget;
