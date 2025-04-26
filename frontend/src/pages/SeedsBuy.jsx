import React, { useState, useEffect } from "react";
import api from "../api"; // ✅ Axios instance with baseURL

const SeedsBuy = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    city: "",
  });

  const [posts, setPosts] = useState([]);

  // ✅ Fetch all seeds with type 'buy'
  useEffect(() => {
    api
      .get("/seeds")
      .then((res) => {
        const onlyBuySeeds = res.data.filter((seed) => seed.type === "buy");
        setPosts(onlyBuySeeds);
      })
      .catch((err) => console.error("Error fetching seeds:", err));
  }, []);

  // ✅ Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "quantity" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  // ✅ Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const payload = {
        ...formData,
        type: "buy", // ✅ required by backend
      };

      const res = await api.post("/seeds", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPosts([...posts, res.data.seed]);
      setFormData({ name: "", quantity: "", city: "" });
      setShowForm(false);
    } catch (err) {
      console.error("Error submitting seed:", err);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <button
        onClick={() => setShowForm(true)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Seeds
      </button>

      {/* 🔲 Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded p-4 mt-4 space-y-3 border"
        >
          <input
            type="text"
            name="name"
            placeholder="Seed Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="text"
            name="quantity"
            placeholder="Quantity (kg)"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />

          <div className="flex justify-end space-x-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* 🟢 Posts Display */}
      <div className="mt-6 space-y-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-green-700">
              {post.name}
            </h2>
            <p className="text-sm">Quantity: {post.quantity}</p>
            <p className="text-sm">City: {post.city}</p>
            <p className="text-sm text-gray-500">
              Posted on: {new Date(post.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeedsBuy;
