import React from "react";
import Machinery from "./Machinery";
import Land from "./Land";
import AllMachines from "../component/AllMachines";
import AllLands from "../component/AllLands";

function MyPost({ deleteEnabled }) {
  return (
    <div >
      <h1>Machines</h1>
      <AllMachines deleteEnabled={deleteEnabled}  />
      <hr />
      <h1>Lands</h1>
      <AllLands deleteEnabled={deleteEnabled}/>
    </div>
  );
}

export default MyPost;
