import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cartItems, toggleCart } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  // Update searchQuery when navigating back/forward
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchQuery(params.get("search") || "");
  }, [location.search]);

  // Live search handler
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    navigate(`/products?search=${encodeURIComponent(value)}`);
  };

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.jpg`}
            alt="Logo"
            className="logo-img"
          />
        </Link>
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-links desktop">
        <Link to="/">Home</Link>

        <div className="dropdown">
          <span>
            Plants <ChevronDown size={16} className="dropdown-icon" />
          </span>
          <div className="dropdown-content">
            <Link to="/products/air">Air Purifying Plants</Link>
            <Link to="/products/aromatic">Aromatic Plants</Link>
            <Link to="/products/cactus">Cactus & Succulents</Link>
            
          </div>
        </div>

        <div className="dropdown">
          <span>
            Pots <ChevronDown size={16} className="dropdown-icon" />
          </span>
          <div className="dropdown-content">
            
            <Link to="/seeds/vegetable">GRC pots</Link>
            <Link to="/seeds/vegetable">fiber pots</Link>
            <Link to="/seeds/flower">cement pots</Link>
          </div>
        </div>

        <div className="dropdown">
          <span>
            Plant maintenance <ChevronDown size={16} className="dropdown-icon" />
          </span>
          <div className="dropdown-content">
            <Link to="/care/fertilizers">Gold</Link>
            <Link to="/care/growth">Silver</Link>
            <Link to="/care/pest">Diamond</Link>
          </div>
        </div>
         <Link to="/">Gallery</Link>
          <Link to="/">Gifting</Link>
      </nav>

      {/* Mobile Navigation (collapsible) */}
      {menuOpen && (
        <nav className="nav-links mobile">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <div className="dropdown">
            <span onClick={() => toggleDropdown("plants")}>
              Plants <ChevronDown size={16} />
            </span>
            {dropdownOpen["plants"] && (
              <div className="dropdown-content">
                <Link to="/products/air" onClick={() => setMenuOpen(false)}>Air Purifying Plants</Link>
                <Link to="/products/aromatic" onClick={() => setMenuOpen(false)}>Aromatic Plants</Link>
                <Link to="/products/cactus" onClick={() => setMenuOpen(false)}>Cactus & Succulents</Link>
                <Link to="/products/flowering" onClick={() => setMenuOpen(false)}>Flowering Plants</Link>
              </div>
            )}
          </div>

          <div className="dropdown">
            <span onClick={() => toggleDropdown("seeds")}>
              Seeds <ChevronDown size={16} />
            </span>
            {dropdownOpen["seeds"] && (
              <div className="dropdown-content">
                <Link to="/seeds/flower" onClick={() => setMenuOpen(false)}>Flower Seeds</Link>
                <Link to="/seeds/vegetable" onClick={() => setMenuOpen(false)}>Vegetable Seeds</Link>
              </div>
            )}
          </div>

          <div className="dropdown">
            <span onClick={() => toggleDropdown("care")}>
              Plant Care <ChevronDown size={16} />
            </span>
            {dropdownOpen["care"] && (
              <div className="dropdown-content">
                <Link to="/care/fertilizers" onClick={() => setMenuOpen(false)}>Fertilizers</Link>
                <Link to="/care/growth" onClick={() => setMenuOpen(false)}>Growth Promoters</Link>
                <Link to="/care/pest" onClick={() => setMenuOpen(false)}>Pest Control</Link>
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Live Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button>
          <FiSearch />
        </button>
      </div>

      {/* Admin / Login */}
      <Link to="/login" className="admin-login-btn" title="Admin Login">
        <FiUser size={20} />
      </Link>

      {/* Cart */}
      <button className="cart-button" onClick={toggleCart} aria-label="Open cart">
        <ShoppingCart size={24} />
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
        )}
      </button>
    </header>
  );
}
