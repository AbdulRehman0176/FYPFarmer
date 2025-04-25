import React, { useState } from "react";

// Dummy API call placeholder
const api = {
  addSeeds: async (data) => {
    // Yeh backend developer POST API yahan integrate karega
    console.log("Sending to backend:", data);
    return { success: true, id: Date.now(), ...data };
  },
};

const SeedsBuy = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    city: "",
    mobile: "",
  });
  const [posts, setPosts] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.addSeeds(formData);
    if (response.success) {
      setPosts([...posts, response]);
      setFormData({ name: "", quantity: "", city: "", mobile: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
    
      <button
        onClick={() => setShowForm(true)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 "
      >
        Add Seeds
      </button>

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
            placeholder="Quantity"
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
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
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

      <div className="mt-6 space-y-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-green-700">{post.name}</h2>
            <p className="text-sm">Quantity: {post.quantity}</p>
            <p className="text-sm">City: {post.city}</p>
            <p className="text-sm">Mobile: {post.mobile}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeedsBuy;
