// src/pages/CheckoutPage.js
import React from "react";
import { useLocation } from "react-router-dom";


export default function CheckoutPage() {
  const location = useLocation();
  const { total } = location.state || { total: 0 };

  return (
    <div className="checkout-page">
      <h2>Payment Details</h2>
      <p>Total: ${total.toFixed(2)}</p>

      {/* Replace this section with real payment form or Stripe integration */}
      <form className="payment-form">
        <input type="text" placeholder="Cardholder Name" required />
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="MM/YY" required />
        <input type="text" placeholder="CVV" required />
        <button type="submit">Pay ${total.toFixed(2)}</button>
      </form>
    </div>
  );
}
