import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import { Button, Flex } from "antd";

function AllMachines({ deleteEnabled, shouldReload }) {
  const [machineryList, setMachineryList] = useState([]);
  const userId = localStorage.getItem("userId");

  const fetchMachines = () => {
    api
      .get("/machines")
      .then((response) => {
        console.log("Machines -> ", response.data);
        
        setMachineryList(response.data);
      })
      .catch((error) => console.error("Error fetching machines:", error));
  };
  useEffect(() => {
    fetchMachines();
  }, [shouldReload]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this machine?"))
      return;
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-2xl mx-auto">
      {machineryList.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg p-3">
          <img
            src={`http://localhost:5000${item.image_url}`}
            alt={item.name}
            className="aspect-video w-full object-cover rounded mb-2"
            onClick={()=>{
              console.log("user id in local storage = ", userId);
              console.log("user id in local storage = ", item.user_id);

              
            }}
          />
          <h3 className="text-base font-bold">{item.name}</h3>
          <p className="text-xs text-gray-600">{item.status}</p>
          <p className="text-xs">📍 {item.city}</p>
          <p className="text-sm font-semibold">💰 Rent: Rs. {item.price}</p>
          <div className="flex justify-between items-center mt-2">
            {deleteEnabled && item.user_id == userId && (
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
        </div>
      ))}
    </div>
  );
}

export default AllMachines;
