import React, { useEffect, useState } from "react";
import api from "../api";
import UserLayout from "../component/UserLayout";

const SeedsSale = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    city: "",
    image: null,
  });
  const [seeds, setSeeds] = useState([]);

  // 🔄 Fetch seeds of type 'sell'
  useEffect(() => {
    api
      .get("/seeds")
      .then((res) => {
        const filtered = res.data.filter((item) => item.type === "sell");
        // console.log(filtered);
        setSeeds(filtered);
      })
      .catch((err) => console.error("Error fetching seeds:", err));
  }, []);

  // 📦 Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "quantity" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  // 🖼 Handle image
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  // 🚀 Submit seed with image
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("quantity", formData.quantity);
      payload.append("city", formData.city);
      payload.append("type", "sell");
      payload.append("image", formData.image);

      const res = await api.post("/seeds", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setSeeds([...seeds, res.data.seed]);
      setFormData({ name: "", quantity: "", city: "", image: null });
      setShowForm(false);
    } catch (err) {
      console.error("Error submitting seed:", err);
      alert("Submission failed!");
    }
  };

  return (
    <UserLayout>
    <div className="p-4 max-w-4xl mx-auto">
      <button
        onClick={() => setShowForm(true)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Seed for Sale
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded p-4 mt-4 space-y-3 border"
          encType="multipart/form-data"
        >
          <input
            type="file"
            onChange={handleImage}
            required
            className="w-full border rounded px-3 py-2"
          />
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

      {/* 🟢 Display Seeds */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {seeds.map((seed, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-4"
          >
            {console.log(`http://localhost:5000${seed.image_url}`)}
            {seed.image_url && (
              <img
              src={`http://localhost:5000${seed.image_url}`}  // ✅ prepend backend URL
              alt={seed.name}
              className="h-40 w-full object-cover rounded mb-3"
            />
            
            )}
            <h2 className="text-xl font-semibold text-green-700">{seed.name}</h2>
            <p className="text-sm">Quantity: {seed.quantity} kg</p>
            <p className="text-sm">City: {seed.city}</p>
            <p className="text-sm text-gray-500">
              Posted on: {new Date(seed.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
    </UserLayout>
  );
};

export default SeedsSale;
