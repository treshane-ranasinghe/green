import React from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Alocasia Pink dragon plant sapling",
    price: 79.99,
    image: "/assets/NA1.jpg",
  },
  {
    id: 2,
    name: "Syngonium Red Vein Plant Sapling",
    price: 199.99,
    image: "/assets/NA2.jpg",
  },
  {
    id: 3,
    name: "Ecofriendly Stylish Pot 4-Inch",
    price: 129.99,
    image: "/assets/NA3.jpg",
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
