import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { ChevronDown } from "lucide-react";
import { FiSearch, FiUser } from "react-icons/fi";


export default function Header() {
  const { cartItems, toggleCart } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // You can navigate or filter products using `searchQuery`
    console.log("Search for:", searchQuery);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShopifyX</Link>
      </div>

      <nav className="nav-links">
        {/* Dropdowns as before */}
        <div className="dropdown">
          <Link to="/">Home</Link>
        </div>

        <div className="dropdown">
          <Link to="/products">Plants<ChevronDown size={16} /></Link>
          <div className="dropdown-content">
            <Link to="/products/air">Air Purifying Plants</Link>
            <Link to="/products/aromatic">Aromatic Plants</Link>
            <Link to="/products/cactus">Cactus and succulents</Link>
            <Link to="/products/flowering">Flowering Plants</Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/about">Seeds<ChevronDown size={16} /></Link>
          <div className="dropdown-content">
            <Link to="/seeds/flower">Flower Seeds</Link>
            <Link to="/seeds/vegetable">Vegetable Seeds</Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/about">Plant Care<ChevronDown size={16} /></Link>
          <div className="dropdown-content">
            <Link to="/care/fertilizers">Fertilizers</Link>
            <Link to="/care/growth">Growth Promoters</Link>
            <Link to="/care/pest">Pest Control</Link>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" aria-label="Search">
          <FiSearch />
        </button>
      </form>

      {/* Admin Login */}
      <Link to="/login" className="admin-login-btn" title="Admin Login">
        <FiUser size={20} />
      </Link>

      {/* Cart */}
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
