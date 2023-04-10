import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams, Link } from 'react-router-dom';
import acdc1 from './acdc/imagen1.jpg';
import acdc2 from './acdc/imagen2.jpg';
import acdc3 from './acdc/imagen3.jpg';
import acdc4 from './acdc/imagen4.jpg';

const items = [
  { id: 1, src: acdc1, alt: 'imagen1', title: '74\'Jailbreak', description: '1974', price: 10, category: 1 },
  { id: 2, src: acdc2, alt: 'imagen2', title: 'High Voltage', description: '1975', price: 15, category: 1 },
  { id: 3, src: acdc3, alt: 'imagen3', title: 'Dirty Deeds Done Dirt Cheap', description: '1976', price: 20, category: 2 },
  { id: 4, src: acdc4, alt: 'imagen4', title: 'Let There Be Rock', description: '1977', price: 25, category: 2 },
];

function ItemDetailContainer() {
  const { id, categoryId } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);
  
  useEffect(() => {
    
    const filteredItems = items.filter(item => item.category === parseInt(categoryId));
    setCategoryItems(filteredItems);
  }, [categoryId]);

  let item;
  if (categoryId) {
    
    item = categoryItems.find((item) => item.id === parseInt(id));
  } else {
    
    item = items.find((item) => item.id === parseInt(id));
  }

  return (
    <div>
      <ItemDetail item={item} />
      <Link to="/category/1" className="btn btn-primary">Volver a la lista de productos</Link>
    </div>
  );
}

export default ItemDetailContainer;
