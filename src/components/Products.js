import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Mock product data - replace with your API call
    const mockProducts = [
      { id: 1, name: "Stylish Sneakers", price: 59.99, image: "https://via.placeholder.com/250x180?text=Sneakers" },
      { id: 2, name: "Leather Jacket", price: 129.99, image: "https://via.placeholder.com/250x180?text=Jacket" },
      { id: 3, name: "Smart Watch", price: 199.99, image: "https://via.placeholder.com/250x180?text=Watch" },
      { id: 4, name: "Sunglasses", price: 79.99, image: "https://via.placeholder.com/250x180?text=Sunglasses" },
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
