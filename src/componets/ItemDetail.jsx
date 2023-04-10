import React from 'react';

function ItemDetail({ item }) {
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.src} alt={item.alt} />
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
}

export default ItemDetail;

