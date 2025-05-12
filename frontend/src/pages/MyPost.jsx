import React from "react";
import Machinery from "./Machinery";
import Land from "./Land";
import AllMachines from "../component/AllMachines";
import AllLands from "../component/AllLands";
import UserLayout from "../component/UserLayout";
import AllSeeds from "../component/AllSeeds";

function MyPost({ deleteEnabled }) {
  return (
    <UserLayout>
    <div >
      <h1>Machines</h1>
      <AllMachines deleteEnabled={deleteEnabled}  />
      <hr />
      <h1>Lands</h1>
      <AllLands deleteEnabled={deleteEnabled}/>
      <hr />
      <h1>Seeds</h1>
      <AllSeeds deleteEnabled={deleteEnabled}/>
    </div>
    </UserLayout>
  );
}

export default MyPost;
