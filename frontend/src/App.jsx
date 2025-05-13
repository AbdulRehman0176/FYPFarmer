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
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import SelectRole from "./component/SelectRole";
import 'remixicon/fonts/remixicon.css'
import Home from "./pages/Home";
import MandiRates from "./pages/MandiRates";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserDetailAdmin from "./pages/Admin/UserDetailAdmin";
import MachineListAdmin from "./pages/Admin/MachineListAdmin";
import LandDetailAdmin from "./pages/Admin/LandDetailAdmin";
import SeedsListAdmin from "./pages/Admin/SeedsListAdmin";
function App() {
  return (
   
    <>
     <Routes>
      <Route path="/" element={<SelectRole/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/machine" element={<Machinery deleteEnabled={false}/>} />
      <Route path="/govtscheme" element={<GovtScheme/>} />
      <Route path="/land" element={<Land deleteEnabled={false}/>} />
      <Route path="/seeds-sale" element={<SeedsSale/>} />
      <Route path="/rates" element={<MandiRates/>} />
      <Route path="/myPosts" element={<MyPost deleteEnabled={true}/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contactUs" element={<ContactUs/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/adminDashboard" element={<AdminDashboard/>}/>
      <Route path="/UserDetailAdmin" element={<UserDetailAdmin/>}/>
      <Route path="/machinelistAdmin" element={<MachineListAdmin/>}/>
      <Route path="/landDetail" element={<LandDetailAdmin/>}/>
      <Route path="/seedsDetail" element={<SeedsListAdmin/>}/>
      </Routes>
    </>
  );
}


export default App;
