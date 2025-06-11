import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const { cartItems, toggleCart } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShopifyX</Link>
      </div>

      <nav className="nav-links">
        <div className="dropdown">
          <Link to="/landing">
            Home 
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/about">
            Plants<ChevronDown size={16} className="dropdown-icon" />
          </Link>
          <div className="dropdown-content">
            <Link to="/products/electronics">Air Purifying Plants</Link>
            <Link to="/products/garden">Aromatic Plants</Link>
            <Link to="/products/garden">Cactus and succulents</Link>
            <Link to="/products/garden">Flowering Plants</Link>
            
          </div>
        </div>

        <div className="dropdown">
          <Link to="/about">
            Seeds<ChevronDown size={16} className="dropdown-icon" />
          </Link>
          <div className="dropdown-content">
            <Link to="/services/consulting">Flower Seeds</Link>
            <Link to="/services/delivery">vegetable Seeds</Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/about">
            Plant Care<ChevronDown size={16} className="dropdown-icon" />
          </Link>
          <div className="dropdown-content">
            <Link to="/plant-care/tips">Fertilizers</Link>
            <Link to="/plant-care/products">Growth Promoters</Link>
            <Link to="/plant-care/products">Pest Control</Link>
          </div>
        </div>
      </nav>

      <button
        className="cart-button"
        onClick={toggleCart}
        aria-label="Open cart"
      >
        <ShoppingCart size={24} />
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
        )}
      </button>
    </header>
  );
}
