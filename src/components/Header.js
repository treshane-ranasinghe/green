import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cartItems, toggleCart } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
  };

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.jpg`}
            alt="Logo"
            className="logo-img"
          />
        </Link>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Desktop Nav */}
      <nav className="nav-links desktop">
        <div className="dropdown">
          <Link to="/">Home</Link>
        </div>
        <div className="dropdown">
          <Link to="/products">
            Plants <ChevronDown size={16} />
          </Link>
          <div className="dropdown-content">
            <Link to="/products/air">Air Purifying Plants</Link>
            <Link to="/products/aromatic">Aromatic Plants</Link>
            <Link to="/products/cactus">Cactus & Succulents</Link>
            <Link to="/products/flowering">Flowering Plants</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/seeds">
            Seeds <ChevronDown size={16} />
          </Link>
          <div className="dropdown-content">
            <Link to="/seeds/flower">Flower Seeds</Link>
            <Link to="/seeds/vegetable">Vegetable Seeds</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/care">
            Plant Care <ChevronDown size={16} />
          </Link>
          <div className="dropdown-content">
            <Link to="/care/fertilizers">Fertilizers</Link>
            <Link to="/care/growth">Growth Promoters</Link>
            <Link to="/care/pest">Pest Control</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className={`nav-links mobile ${menuOpen ? "open" : ""}`}>
        <div className="dropdown">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </div>

        <div className="dropdown">
          <div
            className="dropdown-title"
            onClick={() => toggleDropdown("plants")}
          >
            Plants <ChevronDown size={16} />
          </div>
          <div className={`dropdown-content ${dropdownOpen["plants"] ? "show" : ""}`}>
            <Link to="/products/air" onClick={() => setMenuOpen(false)}>Air Purifying Plants</Link>
            <Link to="/products/aromatic" onClick={() => setMenuOpen(false)}>Aromatic Plants</Link>
            <Link to="/products/cactus" onClick={() => setMenuOpen(false)}>Cactus & Succulents</Link>
            <Link to="/products/flowering" onClick={() => setMenuOpen(false)}>Flowering Plants</Link>
          </div>
        </div>

        <div className="dropdown">
          <div
            className="dropdown-title"
            onClick={() => toggleDropdown("seeds")}
          >
            Seeds <ChevronDown size={16} />
          </div>
          <div className={`dropdown-content ${dropdownOpen["seeds"] ? "show" : ""}`}>
            <Link to="/seeds/flower" onClick={() => setMenuOpen(false)}>Flower Seeds</Link>
            <Link to="/seeds/vegetable" onClick={() => setMenuOpen(false)}>Vegetable Seeds</Link>
          </div>
        </div>

        <div className="dropdown">
          <div
            className="dropdown-title"
            onClick={() => toggleDropdown("care")}
          >
            Plant Care <ChevronDown size={16} />
          </div>
          <div className={`dropdown-content ${dropdownOpen["care"] ? "show" : ""}`}>
            <Link to="/care/fertilizers" onClick={() => setMenuOpen(false)}>Fertilizers</Link>
            <Link to="/care/growth" onClick={() => setMenuOpen(false)}>Growth Promoters</Link>
            <Link to="/care/pest" onClick={() => setMenuOpen(false)}>Pest Control</Link>
          </div>
        </div>
      </nav>

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

      <Link to="/login" className="admin-login-btn" title="Admin Login">
        <FiUser size={20} />
      </Link>

      <button className="cart-button" onClick={toggleCart} aria-label="Open cart">
        <ShoppingCart size={24} />
        {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
      </button>
    </header>
  );
}
