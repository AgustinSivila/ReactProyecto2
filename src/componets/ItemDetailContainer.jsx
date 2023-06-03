import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams, Link } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer({ addToCart, removeFromCart }) {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      const db = getFirestore();
      const itemRef = doc(db, 'items', id);
      const itemSnap = await getDoc(itemRef);

      if (itemSnap.exists()) {
        setItem({ ...itemSnap.data(), id: itemSnap.id });
      } else {
        console.log('No such item!');
      }
    };

    fetchItem();
  }, [id]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  const handleRemoveOneFromCart = () => {
    removeFromCart(item.id);
  };

  return (
    <div>
      {item ? (
        <ItemDetail item={item} handleRemoveOneFromCart={handleRemoveOneFromCart} />
      ) : (
        <p>Loading...</p>
      )}

      <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />

      <button onClick={handleAddToCart}>Agregar al carrito</button>

      <Link to="/category/:id" className="btn btn-primary">
        Volver a la lista de productos
      </Link>
    </div>
  );
}

export default ItemDetailContainer;



