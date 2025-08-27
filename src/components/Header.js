import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
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

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen({});
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.jpg`}
            alt="Logo"
            className="logo-img"
          />
        </NavLink>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-links desktop">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>

        <div className="dropdown">
          <NavLink to="/products" className="nav-link">
            Plants <ChevronDown size={16} />
          </NavLink>
          <div className="dropdown-content">
            <NavLink to="/products/air" className="nav-link">Air Purifying Plants</NavLink>
            <NavLink to="/products/aromatic" className="nav-link">Aromatic Plants</NavLink>
            <NavLink to="/products/cactus" className="nav-link">Cactus & Succulents</NavLink>
          </div>
        </div>

        <div className="dropdown">
          <NavLink to="/pots" className="nav-link">
            Pots <ChevronDown size={16} />
          </NavLink>
          <div className="dropdown-content">
            <NavLink to="/pots/grc" className="nav-link">GRC Pots</NavLink>
            <NavLink to="/pots/fiber" className="nav-link">Fiber Pots</NavLink>
            <NavLink to="/pots/cement" className="nav-link">Cement Pots</NavLink>
          </div>
        </div>

        <div className="dropdown">
          <NavLink to="/maintenance" className="nav-link">
            Plant Maintenance <ChevronDown size={16} />
          </NavLink>
          <div className="dropdown-content">
            <NavLink to="/maintenance/fertilizers" className="nav-link">Fertilizers</NavLink>
            <NavLink to="/maintenance/growth" className="nav-link">Growth Promoters</NavLink>
            <NavLink to="/maintenance/pest" className="nav-link">Pest Control</NavLink>
          </div>
        </div>

        <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
        <NavLink to="/gifting" className="nav-link">Gifting</NavLink>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`nav-links mobile ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeMenu} className="nav-link">Home</NavLink>

        <div className="dropdown">
          <span onClick={() => toggleDropdown("plants")}>Plants <ChevronDown size={16} /></span>
          {dropdownOpen["plants"] && (
            <div className="dropdown-content mobile-dropdown">
              <NavLink to="/products/air" onClick={closeMenu} className="nav-link">Air Purifying Plants</NavLink>
              <NavLink to="/products/aromatic" onClick={closeMenu} className="nav-link">Aromatic Plants</NavLink>
              <NavLink to="/products/cactus" onClick={closeMenu} className="nav-link">Cactus & Succulents</NavLink>
            </div>
          )}
        </div>

        <div className="dropdown">
          <span onClick={() => toggleDropdown("pots")}>Pots <ChevronDown size={16} /></span>
          {dropdownOpen["pots"] && (
            <div className="dropdown-content mobile-dropdown">
              <NavLink to="/pots/grc" onClick={closeMenu} className="nav-link">GRC Pots</NavLink>
              <NavLink to="/pots/fiber" onClick={closeMenu} className="nav-link">Fiber Pots</NavLink>
              <NavLink to="/pots/cement" onClick={closeMenu} className="nav-link">Cement Pots</NavLink>
            </div>
          )}
        </div>

        <div className="dropdown">
          <span onClick={() => toggleDropdown("maintenance")}>Plant Maintenance <ChevronDown size={16} /></span>
          {dropdownOpen["maintenance"] && (
            <div className="dropdown-content mobile-dropdown">
              <NavLink to="/maintenance/fertilizers" onClick={closeMenu} className="nav-link">Fertilizers</NavLink>
              <NavLink to="/maintenance/growth" onClick={closeMenu} className="nav-link">Growth Promoters</NavLink>
              <NavLink to="/maintenance/pest" onClick={closeMenu} className="nav-link">Pest Control</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/gallery" onClick={closeMenu} className="nav-link">Gallery</NavLink>
        <NavLink to="/gifting" onClick={closeMenu} className="nav-link">Gifting</NavLink>
      </nav>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button><FiSearch /></button>
      </div>

      {/* Admin Login */}
      <NavLink to="/login" className="admin-login-btn" title="Admin Login">
        <FiUser size={20} />
      </NavLink>

      {/* Cart */}
      <button className="cart-button" onClick={toggleCart} aria-label="Open cart">
        <ShoppingCart size={24} />
        {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
      </button>
    </header>
  );
}
