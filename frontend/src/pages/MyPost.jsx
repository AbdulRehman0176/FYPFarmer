import { Menu } from "antd";
import React from 'react'

function MyPost() {
  return <div style={{display:'flex', flexDirection:'row'}}>
      <Menu style={{padding:'20px', margin:"10px"}} items={[
        {label:"Home"},
        {label:"Machine"},
        {label:"Schemes"},
        {label:"Seeds"},
        {label:"Land"},
      ]}
      ></Menu>
      <div>
        content
      </div>
    </div>
    
  
}

export default MyPost
