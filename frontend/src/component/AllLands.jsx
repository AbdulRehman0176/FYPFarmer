import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import { Button, Flex } from "antd";

function AllLands({ deleteEnabled, cityFilter, shouldReload }) {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    api
      .get("/lands")
      .then((res) => setLands(res.data))
      .catch((err) => console.error("Failed to fetch lands:", err));
  }, [shouldReload]);

  return (
    
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
        justifyContent: "center",
      }}
    >
      {lands
        .filter((land) => {
            const landCity = land.city || "";
            const filterText = cityFilter || "";
            return landCity.toLowerCase().includes(filterText.toLowerCase());
        })
        .map((land, index) => (
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
            <div
              style={{
                background: "#f0f0f0",
                borderRadius: "10px",
                padding: "10px",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              <h4 style={{ margin: "0", fontSize: "18px" }}>📍 {land.city}</h4>
            </div>
            <p>
              <strong>🏠 Area:</strong> {land.area} sq. ft
            </p>
            <p>
              <strong>💰 Price:</strong> {land.price}
            </p>
            <p>
              <strong>📌 Location:</strong> {land.location}
            </p>
            {land.owner_name && (
              <p>
                <strong>👤 Posted by:</strong> {land.owner_name} {land.email}
              </p>
              
            )}
            {deleteEnabled && (
              <div className="flex justify-between gap-3">
                <Button
                  type="primary"
                  danger
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
        ))}
    </div>
  );
}

export default AllLands;
