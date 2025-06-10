import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartDrawer() {
  const { cartItems, removeFromCart, isCartOpen, toggleCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={toggleCart} aria-label="Close cart">×</button>
      </div>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div>
                  <strong>{item.name}</strong> <br />
                  ${item.price.toFixed(2)} × {item.quantity}
                </div>
                <button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total:</strong> ${totalPrice.toFixed(2)}
          </div>
          <button className="checkout-button">Checkout</button>
        </>
      )}
    </div>
  );
}
