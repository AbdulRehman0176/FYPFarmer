import { Menu } from "antd";
import React from 'react'
import { Route, Routes } from "react-router-dom";

function MyPost() {
  return <div style={{display:'flex', flexDirection:'row'}}>
      <Menu style={{ padding: '20px', width: 200 }} items={[
        {label:"Home"},
        {label:"Machine"},
        {label:"Schemes"},
        {label:"Seeds"},
        {label:"Land"},
      ]}
      ></Menu>
     <div>
     <AllContent/>

     </div>
    </div>
    
  
}

function AllContent (){
  return (<div>
    <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/machine" element={<div>Machine</div>}></Route>
      <Route path="/schemes" element={<div>Schemes</div>}></Route>
      <Route path="/land" element={<div>Land</div>}></Route>
    </Routes>
  </div>
  )
}

export default MyPost
