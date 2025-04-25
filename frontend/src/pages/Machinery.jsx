import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const Machinery = ({deleteEnabled}) => {
  const [showForm, setShowForm] = useState(false);
  const [machineryList, setMachineryList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    status: "available",
    city: "",
    price: "",
  });
  const [imageFile, setImageFile] = useState(null);

  // ✅ Fetch all machines from backend
  useEffect(() => {
    api
      .get("/machines")
      .then((response) => setMachineryList(response.data))
      .catch((error) => console.error("Error fetching machines:", error));
  }, []);

  // ✅ Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle image file selection
  const handleImage = (e) => {
    setImageFile(e.target.files[0]);
  };

  // ✅ Submit new machine to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("price", formData.price);
    form.append("city", formData.city);
    form.append("status", formData.status);
    form.append("image", imageFile);

    try {
      const token = localStorage.getItem("token");
      const response = await api.post("/machines", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMachineryList([...machineryList, response.data.machine]);
      setShowForm(false);
      setFormData({
        name: "",
        status: "available",
        city: "",
        price: "",
      });
      setImageFile(null);
    } catch (error) {
      console.error("Error submitting machine:", error);
      alert("Failed to add machine.");
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Top Buttons */}
      <div className="flex justify-end gap-x-2 mb-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add Machinery
        </button>
        <Link
          to="/mypost"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          My Post
        </Link>
      </div>

      {/* Popup Add Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Machinery</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="file" onChange={handleImage} required />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Machine Name"
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                name="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Status (available/sold)"
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full border p-2 rounded"
                required
              />

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-400 px-4 py-2 rounded text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2 rounded text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Machinery Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {machineryList.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={`http://localhost:5000${item.image_url}`}
              alt={item.name}
              className="h-40 w-full object-cover rounded mb-2"
            />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.status}</p>
            <p className="text-sm">📍 {item.city}</p>
            <p className="text-sm font-semibold">💰 Rent: Rs. {item.price}</p>
            {
              deleteEnabled  && <Link to={"/delete"}>Delete</Link>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Machinery;
