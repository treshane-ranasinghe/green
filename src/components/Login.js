import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      alert("Signing Up...");
      return;
    }

    // Hardcoded authentication
    if (email === "ABC" && password === "123") {
      alert("Login successful! Redirecting to dashboard...");
      setError("");
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid credentials. Please use username: ABC, password: 123");
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${process.env.PUBLIC_URL}/assets/slide02.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="form-box">
        <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
        {error && <div className="error-message" style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input 
              type="text" 
              placeholder="Full Name" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required 
            />
          )}
          <input 
            type={isSignUp ? "email" : "text"} 
            placeholder={isSignUp ? "Email" : "Username"} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>
        <p className="toggle">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span onClick={toggleForm} style={{cursor: 'pointer', color: 'blue', textDecoration: 'underline'}}>
            {isSignUp ? " Sign In" : " Sign Up"}
          </span>
        </p>
        {!isSignUp && (
          <p style={{marginTop: '10px', fontSize: '12px', color: '#ccc'}}>
            Demo credentials: username: ABC, password: 123
          </p>
        )}
      </div>
    </div>
  );
}