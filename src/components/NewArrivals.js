// src/components/NewArrivals.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const sampleProducts = [
  {
    id: 1,
    name: "Alocasia Pink dragon plant sapling",
    price: 79.99,
    image: `${process.env.PUBLIC_URL}/assets/NA1.jpg`,
  },
  {
    id: 2,
    name: "Syngonium Red Vein Plant Sapling",
    price: 199.99,
    image: `${process.env.PUBLIC_URL}/assets/NA4.jpg`,
  },
  {
    id: 3,
    name: "Ecofriendly Stylish Pot 4-Inch",
    price: 129.99,
    image: `${process.env.PUBLIC_URL}/assets/NA3.jpg`,
  },
  {
    id: 4, // Changed from 3 to 4 to avoid duplicate IDs
    name: "Ecofriendly Stylish Pot 4-Inch",
    price: 129.99,
    image: `${process.env.PUBLIC_URL}/assets/NA5.jpg`,
  },
];

export default function NewArrivals() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Optional: Show a notification or feedback
  };

  return (
    <section className="products-section">
      <h2>New Arrivals</h2>
      <div className="products-grid">
        {sampleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}