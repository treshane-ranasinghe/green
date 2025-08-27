// src/components/CheckoutPage.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CheckoutPage() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;
    const newQuantity = item.quantity + delta;
    if (newQuantity <= 0) return;
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-container">
        {/* LEFT: Payment Form */}
        <div className="checkout-form">
          <div className="checkout-header">
            <h2>Secure Checkout</h2>
            <div className="secure-indicator">
              <i className="fas fa-lock"></i>
              <span>Secure SSL Encryption</span>
            </div>
          </div>
          
          <div className="card-logos">
            <img
              src={`${process.env.PUBLIC_URL}/assets/visa.png`}
              alt="Visa"
              className="card-logo"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/mastercard.svg`}
              alt="MasterCard"
              className="card-logo"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/american-express.svg`}
              alt="American Express"
              className="card-logo"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/paypal.svg`}
              alt="PayPal"
              className="card-logo"
            />
          </div>

          <form>
            <div className="form-section">
              <h3>Contact Information</h3>
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="form-section">
              <h3>Shipping Address</h3>
              <div className="form-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="text" placeholder="Address" required />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" />
              <div className="form-row">
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="Postal Code" required />
              </div>
              <input type="text" placeholder="Country" required />
            </div>

            <div className="form-section">
              <h3>Payment Details</h3>
              <input type="text" placeholder="Cardholder Name" required />
              <input type="text" placeholder="Card Number" required />
              <div className="form-row">
                <input type="text" placeholder="MM / YY" required />
                <input type="text" placeholder="CVV" required />
              </div>
            </div>
            
            <div className="terms-agreement">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the Terms & Conditions and Privacy Policy</label>
            </div>
            
            <button className="checkout-btn">
              <i className="fas fa-lock"></i>
              Pay ${total.toFixed(2)}
            </button>
          </form>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="order-summary">
          <div className="summary-header">
            <h3>Order Summary</h3>
            <span>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
          </div>
          
          <div className="order-card">
            {cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty.</p>
            ) : (
              <div className="order-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="order-item">
                    <div className="item-image">
                      <img src={item.image || `${process.env.PUBLIC_URL}/assets/plant-placeholder.jpg`} alt={item.name} />
                    </div>
                    <div className="item-info">
                      <div className="item-name">{item.name}</div>
                      <div className="item-price">${item.price.toFixed(2)}</div>
                    </div>
                    <div className="order-controls">
                      <div className="quantity-controls">
                        <button
                          className="qty-btn"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          −
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="delete-btn"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>{total > 0 ? '$5.00' : 'Free'}</span>
              </div>
              <div className="total-row">
                <span>Tax</span>
                <span>${(total * 0.08).toFixed(2)}</span>
              </div>
              <div className="total-row grand-total">
                <span>Total</span>
                <span>${(total > 0 ? total + 5 + (total * 0.08) : 0).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="guarantee-badge">
              <i className="fas fa-shield-alt"></i>
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}