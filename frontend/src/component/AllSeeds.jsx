import React, { useEffect, useState } from "react";
import api from "../api";
import { Button, Flex } from "antd";

function AllSeeds({deleteEnabled}) {
    const [seeds, setSeeds] = useState([]);
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
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4  ">
        {seeds.map((seed, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-4 w-[75%] m-auto"
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
  )
}

export default AllSeeds
