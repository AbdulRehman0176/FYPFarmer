import React from "react";
import Machinery from "./Machinery";
import Land from "./Land";
import AllMachines from "../component/AllMachines";
import AllLands from "../component/AllLands";
import UserLayout from "../component/UserLayout";

function MyPost({ deleteEnabled }) {
  return (
    <UserLayout>
    <div >
      <h1>Machines</h1>
      <AllMachines deleteEnabled={deleteEnabled}  />
      <hr />
      <h1>Lands</h1>
      <AllLands deleteEnabled={deleteEnabled}/>
    </div>
    </UserLayout>
  );
}

export default MyPost;
