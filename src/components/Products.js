import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Mock product data - replace with your API call
    const mockProducts = [
      { id: 1, name: "Ecofriendly Stylish Pot 4-Inch", price: 59.99, image: "https://via.placeholder.com/250x180?text=Sneakers" },
      { id: 2, name: "Sansevieria bacularis plant Sapling", price: 129.99, image: "https://via.placeholder.com/250x180?text=Jacket" },
      { id: 3, name: "Snake Plant Sapling", price: 199.99, image: "https://via.placeholder.com/250x180?text=Watch" },
      
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <section className="products-section">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} loading="lazy" />
            <h3>{product.name}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
