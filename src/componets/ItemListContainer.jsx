import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

function ItemListContainer({ greeting, addToCart }) {
  const { id: categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'items');

      let itemQuery;
      if (categoryId) {
        itemQuery = query(itemsCollection, where('categoryId', '==', parseInt(categoryId)));
      } else {
        itemQuery = itemsCollection;
      }

      const itemSnapshot = await getDocs(itemQuery);
      const itemList = itemSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setItems(itemList);
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div>
      <div className="mb-3">
        <Link to="/" className="btn btn-primary">Menú Principal</Link>
      </div>
      <h2>{greeting}</h2>
      <p>CD's disponibles</p>
      <CardGroup>
        {items.map((item) => (
          <Card key={item.id}>
            <Card.Img variant="top" src={item.src} alt={item.alt} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Card.Text>
                Precio: ${item.price}
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Link to={`/item/${item.id}`} className="btn btn-primary">
                  Detalles
                </Link>
                <button
                  onClick={() => addToCart(item)}
                  className="btn btn-primary"
                >
                  Agregar al carrito
                </button>
              </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default ItemListContainer;


