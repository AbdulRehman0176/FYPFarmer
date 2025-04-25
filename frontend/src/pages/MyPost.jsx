// import { Menu } from "antd";
// import React from "react";
// import { Route, Routes , useNavigate} from "react-router-dom";
// import Machinery from "./Machinery";

// function MyPost() {

//   const navigate = useNavigate()

//   return (
//     <div style={{ display: "flex", flexDirection: "row" }}>
//       <Menu
//       onClick={({key}) => {
//         if(key === "signout"){
//           //Sign out feature here
//         }else{
//           navigate(key)
//         }

//       }}
//         style={{ padding: "20px", width: 200 }}
//         items={[
//           { label: "Home", key:"/" },
//           { label: "Machine" ,key:"/machine" },
//           { label: "Schemes",key:"/schemes" },
//           { label: "Seeds", key:"/seeds" },
//           { label: "Land" , key:"/land"},
//           { label: "Signout" , key:"/signout" },
//         ]}
//       ></Menu>
//       <div>
//         <AllContent />
//       </div>
//     </div>
//   );
// }

// function AllContent() {
//   return (
//     <div style={{width:"100%"}}>
//       <Routes>
//         <Route path="/" element={<Machinery deleteEnabled={true} />}></Route>
//         <Route path="/machine" element={<div>Machine</div>}></Route>
//         <Route path="/schemes" element={<div>Schemes</div>}></Route>
//         <Route path="/seeds" element={<div>Seeds</div>}></Route>
//         <Route path="/land" element={<div>Land</div>}></Route>
//       </Routes>
//     </div>
//   );
// }

// export default MyPost;

import React from 'react'

function MyPost() {
  return (
    <div>
      
    </div>
  )
}

export default MyPost
