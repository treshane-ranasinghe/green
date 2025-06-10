import React from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Stylish Sneakers",
    price: 79.99,
    image: "https://via.placeholder.com/250x180?text=Sneakers",
  },
  {
    id: 2,
    name: "Elegant Watch",
    price: 199.99,
    image: "https://via.placeholder.com/250x180?text=Watch",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 129.99,
    image: "https://via.placeholder.com/250x180?text=Backpack",
  },
];

export default function NewArrivals() {
  return (
    <section className="products-section">
      <h2>New Arrivals</h2>
      <div className="products-grid">
        {sampleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
