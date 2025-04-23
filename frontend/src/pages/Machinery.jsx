import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

// const [machineryList, setMachineryList] = useState([]);



const Machinery = () => {
  const [showForm, setShowForm] = useState(false);
  const [machineryList, setMachineryList] = useState([]);
  const [formData, setFormData] = useState({
    image_url: "",
    name: "",
    status: "",
    city: "",
    mobile: "",
    price: "",
  });



  useEffect(() => {
    api.get("/machines")
      .then(response => setMachineryList(response.data))
      .catch(error => console.error("Error fetching machinery:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setFormData({ ...formData, image_url: imageUrl });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add to list
    setMachineryList([...machineryList, formData]);
    setFormData({
      image_url: "",
      name: "",
      status: "",
      city: "",
      mobile: "",
      price: "",
    });
    setShowForm(false);

    // 🔗 Backend call here: send `formData` to DB
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex justify-end gap-x-2 mb-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add Machinery
        </button>
        <Link to="/mypost"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          My Post
        </Link>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Machinery</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="file" onChange={handleImage} required className="bg-green-100 border-1 p-3"/>
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
                placeholder="status"
                className="w-full border p-2 rounded"
                required
                rows="2"
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
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder=" Price"
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

      {/* Display Machinery Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {machineryList.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={item.image_url}
              alt="machine"
              className="h-40 w-full object-cover rounded mb-2"
            />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">{item.status}</p>
            <p className="text-sm">📍 {item.city}</p>
            <p className="text-sm">📞 {item.mobile}</p>
            <p className="text-sm font-semibold">💰 Rent: Rs. {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Machinery;
