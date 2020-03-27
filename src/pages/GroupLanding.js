import React from "react";
import GroupHeader from "../components/GroupHeader";
import CreateGroupCard from "../components/CreateGroupCard";
import GroupCard from "../components/GroupCard";


function GroupLanding() {
  return (

    <div>

    <GroupHeader />

    <div class="container">
	<div class="row">
    <CreateGroupCard />

    <GroupCard />
    <GroupCard />
    <GroupCard />
    <GroupCard />
    <GroupCard />
    <GroupCard />


    </div>
    </div>
    </div>

    
  );
}

export default GroupLanding;
