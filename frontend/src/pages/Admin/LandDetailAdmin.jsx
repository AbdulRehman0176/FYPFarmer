import React from 'react'
import AdminLayout from '../../component/AdminComponent/AdminLayout';
function LandDetailAdmin() {
  const data = [
    {
      id: 1,
      name: "Ali Khan",
      project: "Smart Home Automation",
      postedDate: "2024-11-16",
      detail: "Lahore",
    },
    {
      id: 2,
      name: "Ali Khan",
      project: "Smart Home Automation",
      postedDate: "2024-11-16",
      detail: "Sahwail",
    },
    {
      id: 3,
      name: "Ali Khan",
      project: "Smart Home Automation",
      postedDate: "2024-11-16",
      detail: "Sahiwal",
    },
    {
      id: 4,
      name: "Ali Khan",
      project: "Smart Home Automation",
      postedDate: "2024-11-16",
      detail: "Sahiwal",
    },
    {
      id: 5,
      name: "Ali Khan",
      project: "Smart Home Automation",
      postedDate: "2024-11-16",
      detail: "Lahore",
    },
     {
      id: 6,
      name: "Ali Khan",
      project: "Smart Home Automation",
      postedDate: "2024-11-16",
      detail: "Sahiwal",
    },
  ];
  return (
    <AdminLayout>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        Lands Detail
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg   ">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">User ID.</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Area</th>
              <th className="px-4 py-2 text-left">city</th>
              <th className="px-4 py-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-50`}
              >
                <td className="border-none px-4 py-2">{item.id}</td>
                <td className="border-none px-4 py-2">{item.name}</td>
                <td className="border-none px-4 py-2">{item.project}</td>
                <td className="border-none px-4 py-2">{item.postedDate}</td>
                <td className="border-none px-4 py-2 ">{item.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AdminLayout>
  )
}

export default LandDetailAdmin;
