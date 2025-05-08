// pages/Login.js
import React, { useState } from "react";
import api from "../api";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate()
  const [form, setForm] = useState({
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Mobile number validation
  //   if (!/^\d{11}$/.test(form.mobile)) {
  //     setError("Mobile number must be exactly 11 digits.");
  //     return;
  //   }

  //   // Simulated password check (yeh backend pe actual check hoga)
  //   if (form.mobile !== "03123456789" || form.password !== "1234") {
  //     setError("Incorrect mobile number or password.");
  //     return;
  //   }

  //   setError("");
  //   setSuccess("Login successful!");

  //   // Reset form
  //   setForm({
  //     mobile: "",
  //     password: "",
  //   });
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!/^\d{11}$/.test(form.mobile)) {
      setError("Mobile number must be exactly 11 digits.");
      return;
    }
  
    try {
      const response = await api.post("/users/login", {
        email: `${form.mobile}@yourapp.com`,  // same logic as Signup
        password: form.password
      });
      console.log("response -> ",response);
      
  
      setSuccess("Login successful!");
      setError("");
      localStorage.setItem("token", response.data.token);  // store JWT
      localStorage.setItem("userId", response.data.userId);  // store JWT
      console.log("Trying navigate")
      nav("/")
  
      setForm({
        mobile: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Login failed.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to Your Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
