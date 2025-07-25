import React from "react";
import { useLocation } from "react-router-dom";


export default function CheckoutPage() {
  const { total, items } = useLocation().state || {};
  return (
    <div className="checkout-wrapper">
      <div className="checkout-container">
        <div className="checkout-form">
          <h2>Secure Checkout</h2>
          <form>
            <div className="section">
              <h3>Payment Details</h3>
              <input type="text" placeholder="Cardholder Name" required />
              <input type="text" placeholder="Card Number" required />
              <div className="small-inputs">
                <input type="text" placeholder="MM / YY" required />
                <input type="text" placeholder="CVV" required />
              </div>
            </div>
            <button className="checkout-btn">Pay ${total?.toFixed(2)}</button>
          </form>
        </div>
        <div className="order-summary">
          <h3>Your Order</h3>
          <ul>
            {items?.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity} — ${item.price}
              </li>
            ))}
          </ul>
          <div className="total">Total: ${total?.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
