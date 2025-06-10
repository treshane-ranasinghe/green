// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section style={{ padding: 20 }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cartItems.map(item => (
          <li key={item.id} style={{ marginBottom: 10 }}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}{" "}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </section>
  );
}
