import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getStoredAuth, saveAuth } from "../../utils/auth";

const API_BASE_URL = process.env.REACT_APP_API_URL || "";

const initialFormState = {
  fullName: "",
  email: "",
  password: "",
};

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mode, setMode] = useState(location.pathname === "/login" ? "login" : "signup");
  const [formData, setFormData] = useState(initialFormState);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMode(location.pathname === "/login" ? "login" : "signup");
    setErrorMessage("");
    setSuccessMessage("");
  }, [location.pathname]);

  useEffect(() => {
    if (getStoredAuth()?.token) {
      setSuccessMessage("You are already signed in.");
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const switchMode = (nextMode) => {
    navigate(nextMode === "login" ? "/login" : "/signup");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (mode === "signup" && !formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !formData.password.trim()) {
      setErrorMessage("Email and password are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const endpoint = mode === "login" ? "/auth/login" : "/auth/signup";
      const payload =
        mode === "login"
          ? {
              email: formData.email,
              password: formData.password,
            }
          : formData;

      const response = await axios.post(`${API_BASE_URL}${endpoint}`, payload);

      saveAuth({
        token: response.data.token,
        user: response.data.user,
      });

      setFormData(initialFormState);
      setSuccessMessage(
        mode === "login"
          ? "Welcome back. You are now logged in."
          : "Your account is ready. You are now logged in."
      );

      navigate("/", { replace: true });
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Something went wrong while authenticating."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="auth-shell">
      <div className="auth-panel">
        <div className="auth-copy">
          <p className="auth-eyebrow">TradeWave account</p>
          <h1>{mode === "login" ? "Log in to continue trading" : "Create your account"}</h1>
          <p className="auth-description">
            {mode === "login"
              ? "Access your TradeWave profile with your email and password."
              : "Sign up to save your profile and start using authenticated TradeWave features."}
          </p>
          <img
            className="auth-illustration"
            src="/media/images/signup.png"
            alt="TradeWave signup illustration"
          />
        </div>

        <div className="auth-card">
          <div className="auth-toggle" role="tablist" aria-label="Authentication mode">
            <button
              type="button"
              className={mode === "signup" ? "active" : ""}
              onClick={() => switchMode("signup")}
            >
              Sign up
            </button>
            <button
              type="button"
              className={mode === "login" ? "active" : ""}
              onClick={() => switchMode("login")}
            >
              Log in
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {mode === "signup" ? (
              <label>
                Full name
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Alex Morgan"
                />
              </label>
            ) : null}

            <label>
              Email
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </label>

            <label>
              Password
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </label>

            {errorMessage ? <p className="auth-message error">{errorMessage}</p> : null}
            {successMessage ? <p className="auth-message success">{successMessage}</p> : null}

            <button className="auth-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? "Please wait..."
                : mode === "login"
                  ? "Log in"
                  : "Create account"}
            </button>
          </form>

          <p className="auth-switch-copy">
            {mode === "login" ? "Need an account?" : "Already have an account?"}{" "}
            <Link to={mode === "login" ? "/signup" : "/login"}>
              {mode === "login" ? "Sign up" : "Log in"}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
