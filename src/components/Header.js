import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cartItems, toggleCart } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShopifyX</Link>
      </div>
      <nav className="nav-links">
        <Link to="/about">Plants</Link>
        <Link to="/services">Seeds</Link>
        <Link to="/products">Pots & Planter</Link>
        <Link to="/plant care">Plant Care</Link>
      </nav>
      <button className="cart-button" onClick={toggleCart} aria-label="Open cart">
        <ShoppingCart size={24} />
        {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
      </button>
    </header>
  );
}
