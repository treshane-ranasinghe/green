import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const mockProducts = [
      { id: 1, name: "Ecofriendly Stylish Pot 4-Inch", price: 59.99, image: `${process.env.PUBLIC_URL}/assets/NA3.jpg` },
      { id: 2, name: "Sansevieria bacularis plant Sapling", price: 129.99, image: `${process.env.PUBLIC_URL}/assets/NA2.jpg` },
      { id: 3, name: "Snake Plant Sapling", price: 199.99, image: `${process.env.PUBLIC_URL}/assets/NA1.jpg` },
      { id: 3, name: "Snake Plant Sapling", price: 199.99, image: `${process.env.PUBLIC_URL}/assets/NA1.jpg` },
    
    ];
    setProducts(mockProducts);
    setFiltered(mockProducts);
  }, []);

  const handleFilter = () => {
    const result = products.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );
    setFiltered(result);
  };

  return (
    <section className="products-section">
      <h2>Products</h2>
      <div className="products-layout">
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
          <p className="price-display">Price: ${minPrice.toFixed(2)} — ${maxPrice.toFixed(2)}</p>

          <button className="filter-button" onClick={handleFilter}>Filter</button>
        </div>

        <div className="products-grid">
          {filtered.map(product => (
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
  );
}
