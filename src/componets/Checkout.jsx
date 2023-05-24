import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "./firebaseConfig";


function Checkout({ cart, clearCart }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log('Checkout component rendering');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email !== emailConfirmation) {
      alert('Los correos electrónicos no coinciden');
      return;
    }

    // Objeto order para guardar en Firestore
    const order = {
      name,
      lastName,
      phone,
      email,
      items: cart,
      total,
      date: new Date(),
    };

    try {
      // Guardar la orden en Firestore y obtener el order id
      const docRef = await addDoc(collection(db, 'orders'), order);
      alert(`¡Orden realizada con éxito! Tu ID de orden es: ${docRef.id}`);
      clearCart(); // Limpiar el carrito después de realizar el pedido
    } catch (error) {
      console.error('Error al guardar la orden: ', error);
      alert('Ocurrió un error al guardar la orden. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity} unidades
          </li>
        ))}
      </ul>
      <p>Total de la orden: ${total}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Confirmar correo electrónico"
          value={emailConfirmation}
          onChange={(e) => setEmailConfirmation(e.target.value)}
          required
        />
        <button type="submit">Confirmar pedido</button>
      </form>
      <button onClick={clearCart}>Clear</button>
    </div>
  );
}

export default Checkout;
