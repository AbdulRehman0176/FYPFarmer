import { useState } from "react";
import profile from "./assets/profile.png";
import "./App.css";
import React from "react";

import {
  DashboardFilled,
  DashOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, theme } from "antd";
import SignUp from "./pages/signup";
import Login from "./pages/Login";
import GovtScheme from "./pages/GovtScheme";
import ProfilePage from "./pages/ProfilePage";
import Machinery from "./pages/Machinery";
import MyPost from "./pages/MyPost";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
import Land from "./pages/Land";
import SeedsSale from "./pages/SeedsSale";
import SeedsBuy from "./pages/SeedsBuy";



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
    <div className="fixed top-0 left-64 right-0 h-16 bg-white shadow-md z-10">
      <Header />
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

function SideMenu() {
  const navigate = useNavigate();
  return (
    <Menu
      onClick={({ key }) => {
        if (key === "signout") {
          //Sign out feature here
        } else {
          navigate(key);
        }
      }}
      style={{ padding: "20px", width: 250}}
      
      items={[
        { label: "Home", key: "/", icon: <DashboardFilled /> },
        { label: "Machine", key: "/machine", icon: <DashboardFilled /> },
        { label: "GovtScheme", key: "/govtscheme", icon: <DashboardFilled /> },
        { label: "Land", key: "/land", icon: <DashboardFilled /> },
        { label: "Seeds Buy", key: "/seeds-buy", icon: <DashboardFilled /> },
        { label: "Seeds Sale", key: "/seeds-sale", icon: <DashboardFilled /> },
        {
          label: "Signout",
          key: "/signout",
          icon: <DashboardFilled />,
          danger: true,
        },
      ]}
    ></Menu>
  );
}
function AllContent() {
  return (
    <div style={{ width: "100%" }}>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route
          path="/machine"
          element={<Machinery deleteEnabled={false} />}
        ></Route>
        <Route
          path="/mypost"
          element={<Machinery deleteEnabled={true} />}
        ></Route>
        <Route path="/govtscheme" element={<GovtScheme />}></Route>
        <Route path="/land" element={<Land/>}></Route>
        <Route path="/seeds-buy" element={<SeedsBuy/>}></Route>
        <Route path="/seeds-sale" element={<SeedsSale />}></Route> 
      </Routes>
    </div>
  );
}
export default App;
