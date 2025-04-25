import React, { useState } from "react";
import axios from "axios";

const Land = () => {
  const [showForm, setShowForm] = useState(false);
  const [lands, setLands] = useState([]);
  const [formData, setFormData] = useState({
    area: "",
    price: "",
    city: "",
    mobile: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "area" || name === "price" || name === "mobile") {
      if (!/^\d*$/.test(value)) return;
    }

    if (name === "city") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    
    try {
      // API call for backend developer
    //   await axios.post("http://localhost:5000/api/lands", formData);

      setLands([...lands, formData]);
      setFormData({
        area: "",
        price: "",
        city: "",
        mobile: "",
        location: "",
      });
      setShowForm(false);
    } catch (error) {
      console.error("Failed to submit:", error);
    }
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#f2f2f2", fontFamily: "sans-serif", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🌾 Land Listings</h2>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button
          onClick={() => setShowForm(true)}
          style={{
            padding: "12px 25px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ➕ Add Land
        </button>
      </div>

      {showForm && (
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto 40px auto",
            background: "#fff",
            borderRadius: "12px",
            padding: "25px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Enter Land Details</h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input type="text" name="area" placeholder="Area (numbers only)" value={formData.area} onChange={handleChange} required />
            <input type="text" name="price" placeholder="Price (numbers only)" value={formData.price} onChange={handleChange} required />
            <input type="text" name="city" placeholder="City (text only)" value={formData.city} onChange={handleChange} required />
            <input type="text" name="mobile" placeholder="Mobile (numbers only)" value={formData.mobile} onChange={handleChange} required />
            <input type="text" name="location" placeholder="Location (text + number)" value={formData.location} onChange={handleChange} required />

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button
                type="submit"
                style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
              >
                ✅ Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{ padding: "10px 20px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
              >
                ❌ Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center" }}>
        {lands.map((land, index) => (
          <div
            key={index}
            style={{
              width: "320px",
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              position: "relative",
            }}
          >
            <div style={{ background: "#f0f0f0", borderRadius: "10px", padding: "10px", marginBottom: "10px", textAlign: "center" }}>
              <h4 style={{ margin: "0", fontSize: "18px" }}>📍 {land.city}</h4>
            </div>
            <p><strong>🏠 Area:</strong> {land.area} sq. ft</p>
            <p><strong>💰 Price:</strong> {land.price}</p>
            <p><strong>📞 Mobile:</strong> {land.mobile}</p>
            <p><strong>📌 Location:</strong> {land.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Land;
