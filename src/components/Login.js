import React, { useState } from "react";


export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isSignUp ? "Signing Up..." : "Signing In...");
    // Add API call logic here
  };

  return (
    <div className="auth-container">
      <div className="form-box">
        <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>
        <p className="toggle">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span onClick={toggleForm}>
            {isSignUp ? " Sign In" : " Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}
