import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="login-page">

      {/* ================= LEFT SIDE ================= */}

      <div className="login-image">

        <div className="login-image-content">
          <p>WELCOME BACK</p>

          <h1>
            Your style.
            <br />
            Your story.
          </h1>

          <span>
            Sign in to discover your latest favorites
            and continue your shopping journey.
          </span>
        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div className="login-container">

        <div className="login-box">

          <div className="login-heading">

            <p>WELCOME BACK</p>

            <h2>Sign In</h2>

            <span>
              Enter your details to access your account.
            </span>

          </div>


          {/* ================= FORM ================= */}

          <form onSubmit={handleSubmit}>

            <div className="login-input">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />

            </div>


            <div className="login-input">

              <div className="password-label">

                <label>Password</label>

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>

              </div>

              <div className="password-field">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="show-password"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            <div className="remember-me">

              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

            </div>


            <button
              type="submit"
              className="login-button"
            >
              SIGN IN
            </button>

          </form>


          {/* ================= DIVIDER ================= */}

          <div className="login-divider">
            <span>OR</span>
          </div>


          {/* ================= REGISTER ================= */}

          <div className="register-link">

            <p>
              Don't have an account?
            </p>

            <Link to="/register">
              CREATE AN ACCOUNT
            </Link>

          </div>


          {/* ================= HOME ================= */}

          <div className="back-home">
            <Link to="/">
              ← Back to Home
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
