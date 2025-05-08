import "./App.css";
import React from "react";
import logo from "./assets/logo.png"; // Replace with your image path
import profile from "./assets/profile.png"; // Replace with your profile image path

import {
  AppstoreAddOutlined,
  HeatMapOutlined,
  HomeOutlined,
  LogoutOutlined,
  NotificationOutlined,
  RocketOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, theme } from "antd";
import SignUp from "./pages/signup";
import Login from "./pages/Login";
import GovtScheme from "./pages/GovtScheme";
import ProfilePage from "./pages/ProfilePage";
import Machinery from "./pages/Machinery";
import MyPost from "./pages/MyPost";
import { Route, Routes, useNavigate } from "react-router-dom";
import Land from "./pages/Land";
import SeedsSale from "./pages/SeedsSale";
import SeedsBuy from "./pages/SeedsBuy";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 fixed left-0 top-0 h-screen bg-white shadow-lg z-20">
          <SideMenu />
        </div>

        {/* Main content */}
        <div className="flex-1 ml-64 flex flex-col">
          {/* Header */}
          <div className="fixed top-0 left-64 right-0 h-16 bg-white shadow-md z-10 ">
            <HeaderTop />
          </div>

          {/* Scrollable Content */}
          <div className="mt-16 p-4 overflow-auto h-[calc(100vh-4rem)]">
            <AllContent />
          </div>
        </div>
      </div>
    </>
  );
}

function HeaderTop() {
  return (
    <div className="h-16 flex items-center justify-between px-4 shadow-md bg-white">
      {/* Left section - logo + text */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-10 w-10 object-cover" />
        <span className="text-lg font-semibold">Aggriculture</span>
      </div>

      {/* Right section - notification + profile */}
      <div className="flex items-center space-x-4">
        <NotificationOutlined className="w-6 h-6 text-gray-600 cursor-pointer" />
        <img
          src={profile}
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
function SideMenu() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ width: 250, }} class=".ant-menu-light .ant-menu-item-selected,">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            background:"#5bd75b",
            padding: "8px",
            paddingTop:"20px",
            paddingBottom:"20px",
            marginTop:"20px",
            marginLeft:"5px",
            borderRadius:"20px",
            justifyContent:"center"
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
        <Menu
         className="custom-menu"
          onClick={({ key }) => {
            if (key === "signout") {
              //Sign out feature here
            } else {
              navigate(key);
            }
          }}
          style={{ padding: "20px", width: 250 , font:"bold"}}
         
          items={[
            { label: "Home", key: "/", icon: <HomeOutlined /> },
            { label: "Machine", key: "/machine", icon: <RocketOutlined /> },
            {
              label: "GovtScheme",
              key: "/govtscheme",
              icon: <AppstoreAddOutlined />,
            },
            { label: "Land", key: "/land", icon: <HeatMapOutlined /> },
            {
              label: "Seeds Buy",
              key: "/seeds-buy",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Seeds Sale",
              key: "/seeds-sale",
              icon: <ShoppingCartOutlined />,
            },
            { label: "About", key: "/about", icon: <ShoppingCartOutlined /> },
            {
              label: "My Post",
              key: "/myPosts",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Contact US",
              key: "/contactUs",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Signout",
              key: "/signout",
              icon: <LogoutOutlined />,
              danger: true,
            },
          ]}
        ></Menu>
      </div>
    </>
  );
}
function AllContent() {
  return (
    <div style={{ width: "100%" }}>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/machine"
          element={<Machinery deleteEnabled={false} />}
        ></Route>
        <Route
          path="/myposts"
          element={<MyPost deleteEnabled={true} />}
        ></Route>
         {/* <Route
          path="/mypost"
          element={<Land deleteEnabled={true} />}
        ></Route> */}
        <Route path="/govtscheme" element={<GovtScheme />}></Route>
        <Route path="/land" element={<Land deleteEnabled={false} />}></Route>
        <Route path="/seeds-buy" element={<SeedsBuy />}></Route>
        <Route path="/seeds-sale" element={<SeedsSale />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/myPost" element={<MyPost />}></Route> */}
        <Route path="/contactUs" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}
export default App;
