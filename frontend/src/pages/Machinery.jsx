import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import { Button, Flex } from 'antd';

const Machinery = ({ deleteEnabled }) => {
  const [showForm, setShowForm] = useState(false);
  const [machineryList, setMachineryList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    status: "available",
    city: "",
    price: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [editId, setEditId] = useState(null); // null means add mode

  useEffect(() => {
    fetchMachines();
  }, []);

  const fetchMachines = () => {
    api
      .get("/machines")
      .then((response) => setMachineryList(response.data))
      .catch((error) => console.error("Error fetching machines:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("price", formData.price);
    form.append("city", formData.city);
    form.append("status", formData.status);

    // Only append image if it's a new image
    if (imageFile) {
      form.append("image", imageFile);
    }

    try {
      let response;

      if (editId) {
        // Edit mode (PUT request)
        console.log("Editing machine with ID:", editId);
        response = await api.put(`/machines/${editId}`, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Edit response:", response.data);
        setMachineryList((prev) =>
          prev.map((item) =>
            item.id === editId ? response.data.updatedMachine : item
          )
        );
      } else {
        // Add mode (POST request)
        console.log("Adding new machine");
        response = await api.post("/machines", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        setMachineryList([...machineryList, response.data.machine]);
      }

      resetForm();
    } catch (error) {
      console.error("Error submitting machine:", error);
      alert("Failed to submit machine.");
    }
  };

  const resetForm = () => {
    setFormData({ name: "", status: "available", city: "", price: "" });
    setImageFile(null);
    setEditId(null);
    setShowForm(false);
  };

  const handleEdit = (machine) => {
    setFormData({
      name: machine.name,
      status: machine.status,
      city: machine.city,
      price: machine.price,
    });
    setEditId(machine.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this machine?")) return;
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/machines/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMachineryList((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting machine:", error);
      alert("Failed to delete machine.");
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Top Buttons */}
      <div className="flex justify-center gap-x-2 mb-4">
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

      {/* Popup Add/Edit Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {editId ? "Edit Machinery" : "Add Machinery"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="file" onChange={handleImage} />
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
                  onClick={resetForm}
                  className="bg-gray-400 px-4 py-2 rounded text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2 rounded text-white"
                >
                  {editId ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Machinery Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-2xl mx-auto">
        {machineryList.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-3">
            <img
              src={`http://localhost:5000${item.image_url}`}
              alt={item.name}
              className="aspect-video w-full object-cover rounded mb-2"
            />
            <h3 className="text-base font-bold">{item.name}</h3>
            <p className="text-xs text-gray-600">{item.status}</p>
            <p className="text-xs">📍 {item.city}</p>
            <p className="text-sm font-semibold">💰 Rent: Rs. {item.price}</p>
            <div className="flex justify-between items-center mt-2">
             
              {deleteEnabled && (
                <div className="flex justify-between gap-3">
                <Button 
                type="primary" danger
                  onClick={() => handleDelete(item.id)}
                  
                >
                  Delete
                </Button>

                 <Button
                 onClick={() => handleEdit(item)}
                 className="text-blue-600 text-sm"
               >
                 Edit
               </Button>
               </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Machinery;
