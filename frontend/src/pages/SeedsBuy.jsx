import React, { useState, useEffect } from "react";
import api from "../api"; // ✅ Axios instance with baseURL

const SeedsBuy = () => {
  const [cityFilter, setCityFilter] = useState("");

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
      <div className="mt-4 flex items-center justify-between space-x-3">
        <div>
          <input
            type="text"
            placeholder="Filter by City & Seeds Name"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="border rounded px-3 py-2 w-60"
          />
          <button
            onClick={() => setCityFilter("")}
            className="bg-gray-300 px-3 ml-2 py-2 rounded hover:bg-gray-400"
          >
            Clear
          </button>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Seeds
        </button>
      </div>

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
      <div className="mt-6 space-y-6">
      {posts
    .filter((post) => {
      const filterTerm = cityFilter.toLowerCase(); // User ka input lowercase mein
      const cityMatch = post.city.toLowerCase().includes(filterTerm);
      const seedMatch = post.name.toLowerCase().includes(filterTerm);
      return cityMatch || seedMatch; // Agar city ya seed name match ho, to filter ho jayega
    })
          .map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                {post.name}
              </h2>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-gray-700">
                <p className="text-base">
                  <span className="font-semibold">Quantity:</span>{" "}
                  {post.quantity}
                </p>
                <p className="text-base">
                  <span className="font-semibold">City:</span> {post.city}
                </p>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Posted on: {new Date(post.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SeedsBuy;
