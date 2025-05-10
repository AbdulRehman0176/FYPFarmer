import React from "react";
import { Link } from "react-router-dom";

function SelectRole() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <Link to={"/login"} className="">
              User Login
            </Link>
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            <Link to={"/"}>Admin Login</Link>
          </button>
          <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            <Link to={"/"}>Company Login</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default SelectRole;
