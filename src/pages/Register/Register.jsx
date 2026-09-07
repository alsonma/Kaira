import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted");
  };

  return (
    <div className="register-page">

      {/* ================= LEFT SIDE ================= */}

      <div className="register-container">

        <div className="register-box">

          <div className="register-heading">

            <p>JOIN OUR COMMUNITY</p>

            <h2>Create Account</h2>

            <span>
              Create your account and start discovering
              your personal style.
            </span>

          </div>


          {/* ================= FORM ================= */}

          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="register-form-row">

              <div className="register-input">

                <label>First Name</label>

                <input
                  type="text"
                  placeholder="First name"
                  required
                />

              </div>

              <div className="register-input">

                <label>Last Name</label>

                <input
                  type="text"
                  placeholder="Last name"
                  required
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="register-input">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />

            </div>


            {/* PHONE */}

            <div className="register-input">

              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                required
              />

            </div>


            {/* PASSWORD */}

            <div className="register-input">

              <label>Password</label>

              <div className="register-password">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="register-input">

              <label>Confirm Password</label>

              <div className="register-password">

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* TERMS */}

            <div className="register-terms">

              <label>

                <input
                  type="checkbox"
                  required
                />

                <span>
                  I agree to the Terms & Conditions and
                  Privacy Policy.
                </span>

              </label>

            </div>


            {/* BUTTON */}

            <button
              type="submit"
              className="register-button"
            >
              CREATE ACCOUNT
            </button>

          </form>


          {/* ================= LOGIN ================= */}

          <div className="already-account">

            <p>
              Already have an account?
            </p>

            <Link to="/login">
              SIGN IN
            </Link>

          </div>


          {/* ================= HOME ================= */}

          <div className="register-home">

            <Link to="/">
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>


      {/* ================= RIGHT IMAGE ================= */}

      <div className="register-image">

        <div className="register-image-content">

          <p>WELCOME TO OUR WORLD</p>

          <h1>
            Find your
            <br />
            style.
          </h1>

          <span>
            Create an account to save your favorites,
            track your orders, and enjoy a better shopping experience.
          </span>

        </div>

      </div>

    </div>
  );
}

export default Register;
