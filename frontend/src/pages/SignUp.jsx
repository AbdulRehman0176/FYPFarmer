import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
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

  //   if (!/^\d{11}$/.test(form.mobile)) {
  //     setError("Mobile number must be exactly 11 digits.");
  //     return;
  //   }

  //   if (form.password !== form.confirmPassword) {
  //     setError("Password and Confirm Password do not match.");
  //     return;
  //   }

  //   // API call yahan hoga in real
  //   console.log("Form Submitted:", form);

  //   setError("");
  //   setSuccess("Signup completed successfully!");

  //   // Optionally reset form:
  //   setForm({
  //     name: "",
  //     mobile: "",
  //     password: "",
  //     confirmPassword: "",
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!/^\d{11}$/.test(form.mobile)) {
      setError("Mobile number must be exactly 11 digits.");
      return;
    }
  
    if (form.password !== form.confirmPassword) {
      setError("Password and Confirm Password do not match.");
      return;
    }
  
    try {
      const response = await api.post("/users/register", {
        name: form.name,
        email: `${form.mobile}`,  // mobile as email workaround
        password: form.password,
        role: "farmer",                      // default role, or let user choose
        city: "",                            // empty for now
        cnic: "",                            // empty for now
        shop_name: ""                        // empty for now
      });
  
      setSuccess("Signup completed successfully!");
      setError("");
      setForm({
        name: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Signup failed.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Your Account
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
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link 
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
