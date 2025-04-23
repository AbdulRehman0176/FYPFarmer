import React, { useState, useEffect } from "react";
import api from "../api";

const ProfilePage = () => {
    const [machineryList, setMachineryList] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  const [previewImage, setPreviewImage] = useState("");
  const [message, setMessage] = useState("");

  // Simulate fetching current user data
  useEffect(() => {
    // Dummy initial user data (replace with actual API)
    const fetchData = async () => {
      // This would come from backend in real case
      const dataFromDB = {
        name: "John Doe",
        image: "https://via.placeholder.com/150",
      };
      setUserData((prev) => ({ ...prev, name: dataFromDB.name, image: dataFromDB.image }));
      setPreviewImage(dataFromDB.image);
    };
    fetchData();
  }, []);

  
  useEffect(() => {
    api.get("/machines")
      .then(response => setMachineryList(response.data))
      .catch(error => console.error("Error fetching machinery:", error));
      console.log(machineryList)
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
      setUserData({ ...userData, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password && userData.password !== userData.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    // Submit updated profile data to backend (API call here)
    console.log("Submitted Data:", userData);
    setMessage("✅ Profile updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={previewImage}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full object-cover mb-2 border"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm"
          />
        </div>

        {/* Name Input */}
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block mb-1 font-semibold">New Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 font-semibold">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>

        {/* Message */}
        {message && <p className="text-center mt-3 font-semibold">{message}</p>}
      </form>
    </div>
  );
};

export default ProfilePage;
