import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

// Mock data for charts
const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 6000 },
  { month: "Apr", revenue: 8000 },
  { month: "May", revenue: 5000 },
  { month: "Jun", revenue: 9000 },
];

const userData = [
  { name: "New", value: 400 },
  { name: "Returning", value: 300 },
  { name: "Inactive", value: 200 },
];

const conversionData = [
  { day: "Mon", rate: 45 },
  { day: "Tue", rate: 52 },
  { day: "Wed", rate: 49 },
  { day: "Thu", rate: 61 },
  { day: "Fri", rate: 55 },
  { day: "Sat", rate: 70 },
  { day: "Sun", rate: 65 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("statistics");
  const [products, setProducts] = useState([
    { id: 1, name: "Organic Apples", price: 4.99, stock: 50, category: "Fruits" },
    { id: 2, name: "Fresh Spinach", price: 3.49, stock: 30, category: "Vegetables" },
    { id: 3, name: "Honey", price: 8.99, stock: 20, category: "Pantry" },
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "", category: "" });
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", price: "", stock: "", category: "" });

  const handleLogout = () => {
    navigate("/login");
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      id: products.length + 1,
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock),
      category: newProduct.category
    };
    setProducts([...products, product]);
    setNewProduct({ name: "", price: "", stock: "", category: "" });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    if (editingProduct?.id === id) {
      setEditingProduct(null);
      setEditForm({ name: "", price: "", stock: "", category: "" });
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setEditForm({
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: product.category
    });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const updatedProducts = products.map(product =>
      product.id === editingProduct.id
        ? {
            ...product,
            name: editForm.name,
            price: parseFloat(editForm.price),
            stock: parseInt(editForm.stock),
            category: editForm.category
          }
        : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
    setEditForm({ name: "", price: "", stock: "", category: "" });
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setEditForm({ name: "", price: "", stock: "", category: "" });
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Sidebar Navigation */}
      <div style={{
        width: "250px",
        background: "linear-gradient(180deg, #2d4b12 0%, #3b5998 100%)",
        color: "white",
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
        boxShadow: "2px 0 10px rgba(0,0,0,0.1)"
      }}>
        <div style={{ padding: "20px", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
          <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>🌿 Green Admin</h2>
          <p style={{ margin: "5px 0 0 0", opacity: 0.8, fontSize: "14px" }}>Welcome, ABC!</p>
        </div>

        <nav style={{ flex: 1, padding: "20px 0" }}>
          <div
            style={{
              padding: "15px 20px",
              cursor: "pointer",
              background: activeTab === "statistics" ? "rgba(255,255,255,0.2)" : "transparent",
              borderLeft: activeTab === "statistics" ? "4px solid #00C49F" : "4px solid transparent",
              marginBottom: "5px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
            onClick={() => setActiveTab("statistics")}
          >
            📊 <span>Statistics</span>
          </div>
          <div
            style={{
              padding: "15px 20px",
              cursor: "pointer",
              background: activeTab === "products" ? "rgba(255,255,255,0.2)" : "transparent",
              borderLeft: activeTab === "products" ? "4px solid #00C49F" : "4px solid transparent",
              marginBottom: "5px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
            onClick={() => setActiveTab("products")}
          >
            🛒 <span>Products</span>
          </div>
        </nav>

        <div style={{ padding: "20px", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "12px",
              background: "rgba(255,255,255,0.2)",
              border: "none",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {/* Header */}
        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h1 style={{ margin: 0, color: "#2d4b12" }}>
            {activeTab === "statistics" ? "Dashboard Overview" : "Product Management"}
          </h1>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span style={{ padding: "8px 16px", background: "#e8f5e8", borderRadius: "20px", color: "#2d4b12" }}>
              Admin
            </span>
          </div>
        </div>

        {activeTab === "statistics" && (
          <div>
            {/* Stats Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                <h3 style={{ margin: "0 0 10px 0", color: "#666" }}>Total Users</h3>
                <p style={{ fontSize: "32px", fontWeight: "bold", margin: 0, color: "#2d4b12" }}>1,234</p>
                <p style={{ margin: "5px 0 0 0", color: "#00C49F" }}>↑ 12% from last month</p>
              </div>
              <div style={{ background: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                <h3 style={{ margin: "0 0 10px 0", color: "#666" }}>Monthly Income</h3>
                <p style={{ fontSize: "32px", fontWeight: "bold", margin: 0, color: "#2d4b12" }}>$45,678</p>
                <p style={{ margin: "5px 0 0 0", color: "#00C49F" }}>↑ 8% from last month</p>
              </div>
              <div style={{ background: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                <h3 style={{ margin: "0 0 10px 0", color: "#666" }}>Conversion Rate</h3>
                <p style={{ fontSize: "32px", fontWeight: "bold", margin: 0, color: "#2d4b12" }}>5.2%</p>
                <p style={{ margin: "5px 0 0 0", color: "#FF8042" }}>↓ 2% from last month</p>
              </div>
            </div>

            {/* Charts */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "20px", marginBottom: "30px" }}>
              <div style={{ background: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                <h3>Revenue Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#2d4b12" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div style={{ background: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                <h3>User Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {userData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div style={{ background: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                <h3>Conversion Rate</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rate" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div>
            {/* Add Product Form */}
            <div style={{ background: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", marginBottom: "20px" }}>
              <h3>{editingProduct ? "Edit Product" : "Add New Product"}</h3>
              <form onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
                <input
                  type="text"
                  placeholder="Product Name"
                  value={editingProduct ? editForm.name : newProduct.name}
                  onChange={(e) => editingProduct 
                    ? setEditForm({...editForm, name: e.target.value})
                    : setNewProduct({...newProduct, name: e.target.value})
                  }
                  style={{ padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}
                  required
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={editingProduct ? editForm.price : newProduct.price}
                  onChange={(e) => editingProduct 
                    ? setEditForm({...editForm, price: e.target.value})
                    : setNewProduct({...newProduct, price: e.target.value})
                  }
                  style={{ padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}
                  required
                />
                <input
                  type="number"
                  placeholder="Stock"
                  value={editingProduct ? editForm.stock : newProduct.stock}
                  onChange={(e) => editingProduct 
                    ? setEditForm({...editForm, stock: e.target.value})
                    : setNewProduct({...newProduct, stock: e.target.value})
                  }
                  style={{ padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}
                  required
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={editingProduct ? editForm.category : newProduct.category}
                  onChange={(e) => editingProduct 
                    ? setEditForm({...editForm, category: e.target.value})
                    : setNewProduct({...newProduct, category: e.target.value})
                  }
                  style={{ padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}
                  required
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    type="submit"
                    style={{
                      padding: "12px",
                      background: "#2d4b12",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      flex: 1
                    }}
                  >
                    {editingProduct ? "Update Product" : "Add Product"}
                  </button>
                  {editingProduct && (
                    <button
                      type="button"
                      onClick={cancelEdit}
                      style={{
                        padding: "12px",
                        background: "#666",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold"
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Products Table */}
            <div style={{ background: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
              <h3>Product List ({products.length} products)</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#f8fafc" }}>
                      <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #eee" }}>ID</th>
                      <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #eee" }}>Name</th>
                      <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #eee" }}>Price</th>
                      <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #eee" }}>Stock</th>
                      <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #eee" }}>Category</th>
                      <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #eee" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} style={{ 
                        borderBottom: "1px solid #eee",
                        background: editingProduct?.id === product.id ? "#f0f8ff" : "transparent"
                      }}>
                        <td style={{ padding: "12px" }}>{product.id}</td>
                        <td style={{ padding: "12px", fontWeight: "500" }}>{product.name}</td>
                        <td style={{ padding: "12px" }}>${product.price.toFixed(2)}</td>
                        <td style={{ padding: "12px" }}>{product.stock}</td>
                        <td style={{ padding: "12px" }}>{product.category}</td>
                        <td style={{ padding: "12px" }}>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <button
                              onClick={() => handleEditProduct(product)}
                              style={{
                                padding: "8px 16px",
                                background: "#007bff",
                                color: "white",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontSize: "12px"
                              }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              style={{
                                padding: "8px 16px",
                                background: "#ff4757",
                                color: "white",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontSize: "12px"
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}