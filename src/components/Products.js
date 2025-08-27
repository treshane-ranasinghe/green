import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Footer from "./Footer";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useContext(CartContext);
  const location = useLocation();

  // Load products
  useEffect(() => {
    const mockProducts = [
      { id: 1, name: "Ecofriendly Stylish Pot 4-Inch", price: 59.99, image: `${process.env.PUBLIC_URL}/assets/NA3.jpg` },
      { id: 2, name: "Sansevieria bacularis plant Sapling", price: 129.99, image: `${process.env.PUBLIC_URL}/assets/NA2.jpg` },
      { id: 3, name: "Snake Plant Sapling", price: 199.99, image: `${process.env.PUBLIC_URL}/assets/NA4.jpg` },
      { id: 4, name: "Ecofriendly Stylish Pot 4-Inch", price: 59.99, image: `${process.env.PUBLIC_URL}/assets/NA3.jpg` },
      { id: 5, name: "Sansevieria bacularis plant Sapling", price: 129.99, image: `${process.env.PUBLIC_URL}/assets/NA2.jpg` },
      { id: 6, name: "Snake Plant Sapling", price: 199.99, image: `${process.env.PUBLIC_URL}/assets/NA1.jpg` },
    ];
    setProducts(mockProducts);
    setFiltered(mockProducts);
  }, []);

  // Update search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchQuery(params.get("search")?.toLowerCase() || "");
  }, [location.search]);

  // Filter products whenever search query or price changes
  useEffect(() => {
    const result = products.filter(
      (p) =>
        p.price >= minPrice &&
        p.price <= maxPrice &&
        p.name.toLowerCase().includes(searchQuery)
    );
    setFiltered(result);
  }, [products, minPrice, maxPrice, searchQuery]);

  // Manual filter button
  const handleFilterClick = () => {
    const result = products.filter(
      (p) =>
        p.price >= minPrice &&
        p.price <= maxPrice &&
        p.name.toLowerCase().includes(searchQuery)
    );
    setFiltered(result);
  };

  return (
    <>
      <section className="products-section">
        <div className="hero-section">
          <img
            src={`${process.env.PUBLIC_URL}/assets/aboutus.jpg`}
            alt="Green Plants"
            className="hero-image"
          />
          <div className="hero-text">
            <h1>Bring Nature Home 🌱</h1>
            <p>Explore our eco-friendly plant collection</p>
          </div>
        </div>

        <div className="products-layout">
          {/* Filter Sidebar */}
          <div className="filter-sidebar">
            <h3>Filter by price</h3>
            <div className="price-inputs">
              <div>
                <label>Min price</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
              </div>
              <span>-</span>
              <div>
                <label>Max price</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
            <p className="price-display">
              Price: ${minPrice.toFixed(2)} — ${maxPrice.toFixed(2)}
            </p>

            {/* Filter Button */}
            <button className="filter-button" onClick={handleFilterClick}>
              Apply Filter
            </button>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filtered.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} loading="lazy" />
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
