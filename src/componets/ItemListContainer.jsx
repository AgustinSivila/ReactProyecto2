import React from 'react';
import './ItemListContainer.css';
import { Card, CardGroup } from 'react-bootstrap';
import acdc1 from './acdc/imagen1.jpg';
import acdc2 from './acdc/imagen2.jpg';
import acdc3 from './acdc/imagen3.jpg';
import acdc4 from './acdc/imagen4.jpg';
import { Link } from 'react-router-dom';


const images = [
  { id: 1, src: acdc1, alt: 'imagen1', title: '74\'Jailbreak', description: '1974', price: 10 },
  { id: 2, src: acdc2, alt: 'imagen2', title: 'High Voltage', description: '1975', price: 15 },
  { id: 3, src: acdc3, alt: 'imagen3', title: 'Dirty Deeds Done Dirt Cheap', description: '1976', price: 20 },
  { id: 4, src: acdc4, alt: 'imagen4', title: 'Let There Be Rock', description: '1977', price: 25 },

];

function ItemListContainer({ greeting }) {
  return (
    <div>
      <div className="mb-3">
        <Link to="/" className="btn btn-primary">Menú Principal</Link>
      </div>
      <h2>{greeting}</h2>
      <p>CD's disponibles</p>
      <CardGroup>
        {images.map((image) => (
          <Card key={image.id}>
            <Card.Img variant="top" src={image.src} alt={image.alt} />
            <Card.Body>
              <Card.Title>{image.title}</Card.Title>
              <Card.Text>
                {image.description}
              </Card.Text>
              <Link to={`/item/${image.id}`} className="btn btn-primary">Detalles</Link>
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



