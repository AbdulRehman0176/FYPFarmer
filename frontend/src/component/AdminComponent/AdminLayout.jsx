import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
function AdminLayout({ children }) {
  const [size, setSize] = useState(280);
  const [accountMenu, setAccountMenu] = useState(false);

  const location = useLocation();
  const menus = [
    {
      to: "/adminDashboard",
      label: "DashBoard",
      icon: <i className="ri-dashboard-3-line mr-2"></i>,
    },
    {
      to: "/UserDetailAdmin",
      label: "User Details",
      icon: <i className="ri-dashboard-3-line mr-2"></i>,
    },
    {
      to: "/machinelistAdmin",
      label: "Machines Detail",
      icon: <i className="ri-user-line mr-2"></i>,
    },
    {
      to: "/landDetail",
      label: "Land Detail",
      icon: <i className="ri-shopping-cart-line mr-2"></i>,
    },
    {
      to: "/seedsDetail",
      label: "Seeds Detail",
      icon: <i className="ri-shape-line mr-2"></i>,
    },
    {
      to: "/company",
      label: "Companies",
      icon: <i className="ri-money-dollar-circle-line mr-2"></i>,
    },
    {
      to: "/AddGoveSchemes",
      label: "Add Govt Schemes",
      icon: <i className="ri-money-dollar-circle-line mr-2"></i>,
    },
    

    
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    // Local storage se token remove karo
    localStorage.removeItem("token");

    // Redirect to home page "/"
    navigate("/");
  };

  return (
    <div>
      <aside
        className=" bg-[#456ebf]  fixed top-0 left-0 h-full overflow-hidden"
        style={{ width: size, transition: "0.5s" }}
      >
        <div
          style={{ width: 250 }}
          class=".ant-menu-light .ant-menu-item-selected,"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
              background: "#5bd75b",
              padding: "8px",
              paddingTop: "20px",
              paddingBottom: "20px",
              marginTop: "20px",
              marginLeft: "5px",
              borderRadius: "20px",
              justifyContent: "center",
            }}
          >
            <img
              src={profile}
              alt="Profile"
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                marginRight: 1,
              }}
            />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              AbdulRehman
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-3">
          {menus.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              className=" w-full text-white p-2 rounded-md  "
              style={{
                background:
                  location.pathname == item.to ? "#16a34a" : "transparent",
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="text-white text-left p-2 hover:bg-rose-500 rounded-lg"
          >
            <i className="ri-logout-circle-line mr-2"></i> Logout
          </button>
        </div>
      </aside>

      <section
        className="bg-gray-100 h-full "
        style={{ marginLeft: size, transition: "0.5s" }}
      >
        <nav className="p-6 bg-white shadow-lg flex items-center justify-between sticky top-0">
          <div className="flex items-center gap-1 justify-between">
            <button onClick={() => setSize(size === 0 ? 280 : 0)}>
              <i className="ri-menu-2-line text-2xl p-3 hover:bg-indigo-600 hover:text-white"></i>
            </button>
            <h1 className="text-md font-semibold">Agriculture</h1>
          </div>

          <div>
            <button onClick={() => setAccountMenu(!accountMenu)}>
              <img
                src="/images/profile.jpg"
                className="w-10 h-10 rounded-full"
              />
            </button>
            {accountMenu && (
              <div className="bg-white shadow-lg absolute top-20 right-5 ">
                <div className="p-6 text-center">
                  <h1 className="font-semibold">User name</h1>
                  <p>Mobile Number</p>
                  <div className="h-px bg-gray-200 my-3"></div>
                  <button onClick={handleLogout}>
                    <i className="ri-logout-circle-line"></i> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
        <div>{children}</div>
      </section>
    </div>
  );
}

export default AdminLayout;
