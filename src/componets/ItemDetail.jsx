import React from 'react';

function ItemDetail({ item, handleRemoveOneFromCart }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.src} alt={item.alt} />
      <p>{item.description}</p>
      <p>{item.price}</p>
    
      <button onClick={handleRemoveOneFromCart}>Eliminar del carrito</button>
    </div>
  );
}

export default ItemDetail;


