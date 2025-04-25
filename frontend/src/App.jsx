import { useState } from "react";
import profile from "./assets/profile.png";
import "./App.css";
import React from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import SignUp from "./pages/signup";
import Login from "./pages/Login";
import GovtScheme from "./pages/GovtScheme";
import ProfilePage from "./pages/ProfilePage";
import Machinery from "./pages/Machinery";
import MyPost from "./pages/MyPost";
import { Route, Routes, useNavigate } from "react-router-dom";

// const { Header, Sider, Content } = Layout;

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", }}>
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
              //Sign out feature here
            } else {
              navigate(key);
            }
          }}
          style={{ padding: "20px", width: 200 }}
          items={[
            { label: "Home", key: "/" },
            { label: "Machine", key: "/machine" },
            { label: "Schemes", key: "/schemes" },
            { label: "Seeds", key: "/seeds" },
            { label: "Land", key: "/land" },
            { label: "Signout", key: "/signout" },
          ]}
        ></Menu>
        <div>
          <AllContent />
        </div>
      </div>

      {/* <Routes>
     <Route path='/login' element={<Login />} />
     <Route path='/' element={<Machinery deleteEnabled={false}/>} /> 
     <Route path='/signup' element={<SignUp />} />
     <Route path='/profile' element={<ProfilePage />} />
     <Route path='/mypost' element={<MyPost/>} />
    </Routes> */}
      {/* <GovtScheme/> */}
      {/* <ProfilePage/> */}
      {/* <Machinery/> */}
    </>
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
        <Route path="/mypost" element={<Machinery deleteEnabled={true} />}></Route>
        <Route path="/schemes" element={<div>Schemes</div>}></Route>
        <Route path="/seeds" element={<div>Seeds</div>}></Route>
        <Route path="/land" element={<div>Land</div>}></Route>
      </Routes>
    </div>
  );
}
export default App;
