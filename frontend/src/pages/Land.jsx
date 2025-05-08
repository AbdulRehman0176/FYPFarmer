import React, { useState, useEffect } from "react";
import api from "../api";
import { Button } from "antd";
import AllLands from "../component/AllLands";

const Land = ({ deleteEnabled }) => {
  const [cityFilter, setCityFilter] = useState(""); // City filter state

  const [showForm, setShowForm] = useState(false);
  const [shouldReload, setshouldReload] = useState(false);

  const [formData, setFormData] = useState({
    area: "",
    price: "",
    city: "",
    location: "",
  });

  // Fetch all lands
  useEffect(() => {
    // api
    //   .get("/lands")
    //   .then((res) => setLands(res.data))
    //   .catch((err) => console.error("Failed to fetch lands:", err));
  }, [formData, cityFilter,shouldReload]);

  // Input handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["area", "price"].includes(name) && !/^\d*$/.test(value)) return;
    if (name === "city" && !/^[a-zA-Z\s]*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  // Submit land
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await api.post("/lands", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // setLands([...lands, res.data.land]);
      setFormData({ area: "", price: "", city: "", location: "" });
      setShowForm(false);
      setshouldReload(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit land.");
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f2f2f2",
        minHeight: "100vh",
      }}
    >
      {/* <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        🌾 Land Listings
      </h2> */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Filter by City"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
          <button
            onClick={() => setCityFilter("")}
            className="bg-gray-300 px-3 ml-2 py-2 rounded hover:bg-gray-400"
          >
            Clear
          </button>
        </div>
        <div>
          <button
            onClick={() => setShowForm(true)}
            style={{
              padding: "12px 25px",
              fontSize: "16px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            ➕ Add Land
          </button>
        </div>
      </div>

      {/* Popup Form */}
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
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
            Enter Land Details
          </h3>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <input
              type="text"
              name="area"
              placeholder="Enter Area in sq. ft (numbers only)"
              value={formData.area}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Enter Price (numbers only)"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="Enter City (text only)"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Enter Exact Location (area/plot/road etc)"
              value={formData.location}
              onChange={handleChange}
              required
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                ✅ Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  borderRadius: "6px",
                }}
              >
                ❌ Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Show Lands */}
     <AllLands cityFilter = {cityFilter} shouldReload = {shouldReload}/>
    </div>
  );
};

export default Land;
